(ns matchbox.core
  (:refer-clojure :exclude [get-in set! reset! conj! swap! dissoc! deref parents key
                            take take-last])
       
                               
                    
                              
                  
                        
                    
                         
                       
                       
                       
                               
                              
                                       
                              
                                                    
                                         
  (:require [clojure.string :as str]
            [clojure.walk :as walk]
            [matchbox.utils :as utils]
            [matchbox.registry :refer [register-listener]]
           cljsjs.firebase))

;; constants

(def child-events
  [:child-added
   :child-changed
   :child-moved
   :child-removed])

     
                  
                            
                           
                           
                            
                             

     
                             
                                                                                  
                                                   
                                     

(def all-events
  (conj child-events :value))

;; Distinct from nil/null in CLJS, useful for opting out of callbacks
       (def undefined)

       (def Firebase js/Firebase)

(def SERVER_TIMESTAMP
                             
         js/Firebase.ServerValue.TIMESTAMP)

;; helpers

(declare wrap-snapshot)
(declare hydrate)
(declare reset!)

(defn throw-fb-error [err & [msg]]
  (throw (ex-info (or msg "FirebaseError") {:err err})))

     
                   
                                    
                                                          
                                                           

     
                                               
                                                 
                             
                                              
                             
                                               
                                                              

     
                                   
                            
                                                         
                                            
                                         
                                 
                                                                                   
                                        
                                        

     
                                                                  
                           
                                                     
                                           
                                                       
                                               
                                                     
                                           
                                             
                                               
                                             
                                         

     
                          
                                                   

(defn- keywords->strings [x]
  (if (keyword? x) (str x) x))

(defn- hydrate-keywords [x]
  (if (and (string? x) (= \: (first x)))
    (keyword (apply str (rest x)))
    x))

     
                   
                                                 
                                                   
                                                         
                                    

(defn hydrate [v]
                                 
         (walk/postwalk
           hydrate-keywords
           (js->clj v :keywordize-keys true)))

(defn serialize [v]
  (->> v
       (walk/stringify-keys)
       (walk/postwalk keywords->strings)
              (clj->js)))

(defn key
  "Last segment in reference or snapshot path"
  [ref]
                     
         (.key ref))

(defn value
  "Data stored within snapshot"
  [snapshot]
  (hydrate
                              
           (.val snapshot)))

(defn- wrap-snapshot [snapshot]
  [(key snapshot) (value snapshot)])

;; API

(defn get-in
  "Obtain child reference from base by following korks"
  [ref korks]
  (let [path (utils/korks->path korks)]
    (if-not (seq path) ref (.child ref path))))

(defn connect
  "Create a reference for firebase"
  ([url]
                        
          (js/Firebase. url))
  ([url korks]
   (get-in (connect url) korks)))

(defn parent
  "Immediate ancestor of reference, if any"
  [ref]
  (and ref
                             
              (.parent ref)))

(defn parents
  "Probably don't need this. Or maybe we want more zipper nav (siblings, in-order, etc)"
  [ref]
  (take-while identity (iterate parent (parent ref))))

(defn deref [ref cb]
                                                                             
         (.once ref "value" (comp cb value)))

(defn- get-children [snapshot]
  (mapv value
                                     
        ;; perhaps use js array if too much latency here for larger lists
               (let [kids (atom [])]
                 ;; must return falsey else iteration ends
                 (.forEach snapshot #(do (clojure.core/swap! kids conj %) undefined))
                 @kids)))

(defn deref-list [ref cb]
                                                                                    
         (.once ref "value" (comp cb #(get-children %))))

(defn reset! [ref val & [cb]]
       
            
                                   
                                                 
         (.set ref (serialize val) (if cb
                                     (fn [err]
                                       (if err
                                         (throw-fb-error err)
                                         (cb ref)))
                                     undefined)))

(defn reset-with-priority! [ref val priority & [cb]]
                  
                                                  
                                                                
         (.setWithPriority ref (serialize val) priority
                           (if cb
                             (fn [err]
                               (if err
                                 (throw-fb-error err)
                                 (cb ref)))
                             undefined)))

(defn merge! [ref val & [cb]]
       
            
                                         
                                                       
        
  (.update ref (serialize val) (if cb
                                 (fn [err]
                                   (if err
                                     (throw-fb-error err)
                                     (cb ref)))
                                 undefined)))

(defn conj! [ref val & [cb]]
                            
                           
                  
         (let [k (atom nil)]
           (clojure.core/reset!
            k
            (key
             (.push ref (serialize val)
                    (if cb
                      (fn [err]
                        (if err
                          (throw-fb-error err)
                          (cb (get-in ref @k))))
                      undefined))))
           @k))

(defn swap!
  "Update value atomically, with local optimistic writes"
  [ref f & args]
  (let [[cb args] (utils/extract-cb args)]
         
                                                           
          
    (let [f' #(-> % hydrate ((fn [x] (apply f x args))) serialize)]
      (.transaction ref f' (if cb
                             (fn [err commit? ds]
                               (if err
                                 (throw-fb-error err)
                                 (cb (value ds))))
                             undefined)))))

(defn dissoc! [ref & [cb]]
       
            
                      
                                    
        
  (.remove ref (or cb undefined)))

(def remove! dissoc!)

(defn set-priority! [ref priority & [cb]]
       
            
                               
                                             
        
  (.setPriority ref priority (or cb undefined)))

;;

(defn ref? [x]
  (instance?                       js/Firebase x))

(defn- with-ds [ref-or-ds f & [cb]]
  (if (ref? ref-or-ds)
    (let [ref ref-or-ds]
      (assert cb "Callback required when called against reference")
                                                                             
             (.once ref "value" (comp cb f)))
    (let [ds ref-or-ds
          v (f ds)]
      (if cb (cb v) v))))

(defn- -export [ds]
  (hydrate
                             
           (.exportVal ds)))

(defn- -priority [ds]
  (.getPriority ds))

(defn export [ref-or-ds & [cb]]
  (with-ds ref-or-ds -export cb))

(defn priority [ref-or-ds & [cb]]
  (with-ds ref-or-ds -priority cb))

(defn export-in [ref-or-ds korks & [cb]]
  (if (ref? ref-or-ds)
    (export (get-in ref-or-ds korks) cb)
    (export ref-or-ds (comp cb #(get-in % korks)))))

(defn priority-in [ref-or-ds korks & [cb]]
  (if (ref? ref-or-ds)
    (priority (get-in ref-or-ds korks) cb)
    (priority ref-or-ds (comp cb #(get-in % korks)))))

;;

(defn order-by-priority [ref]
  (.orderByPriority ref))

(defn order-by-key [ref]
  (.orderByKey ref))

(defn order-by-value [ref]
  (.orderByValue ref))

(defn order-by-child [ref key]
  (.orderByChild ref (name key)))

;;

(defn start-at
  "Limit query to start at `value` (inclusive). By default `value` is compared against
   priorities, but reacts to the `order-by-*` scope. This also affects what types
   `value can take on.

   `key` is the child key to start at, and is supported only when ordering by priority."
  [ref value & [key]]
  (let [value (if (number? value) (double value) value)]
    (if key
      (.startAt ref value (name key))
      (.startAt ref value))))

(defn end-at
  "Limit query to end at `value` (inclusive). By default `value` is compared against
   priorities, but reacts to the `order-by-*` scope. This also affects what types
   `value can take on.

   `key` is the child key to end at, and is supported only when ordering by priority."
  [ref value & [key]]
  (let [value (if (number? value) (double value) value)]
    (if key
      (.endAt ref value (name key))
      (.endAt ref value))))

(defn equal-to
  "Limit query to `value` (inclusive). By default `value` is compared against
   priorities, but reacts to the `order-by-*` scope. This also affects what types
   `value can take on.

  `key` is the child key to compare on, and is supported only when ordering by priority."
  [ref value & [key]]
  (let [value (if (number? value) (double value) value)]
    (if key
      (.equalTo ref value (name key))
      (.equalTo ref value))))

(defn take
  "Limit scope to the first `limit` items"
  [ref limit]
  (.limitToFirst ref limit))

(defn take-last
  "Limit scope to the last `limit` items"
  [ref limit]
  (.limitToLast ref limit))

;;

(defonce connected (atom true))

(defn disconnect! []
         (.goOffline js/Firebase)
  (clojure.core/reset! connected false))

(defn reconnect! []
         (.goOnline js/Firebase)
  (clojure.core/reset! connected true))

(defn connected?
  "Returns boolean around whether client is set to synchronise with server.
   Says nothing about actual connectivity."
  []
  @connected)

(defn on-disconnect
  "Return an on"
  [ref]
         (.onDisconnect ref))

(defn cancel [ref-disconnect & [cb]]
         (.cancel ref-disconnect (or cb undefined)))

;; --------------------
;; auth

(defn build-opts [session-only?]
         (if session-only?
           #js {:remember "sessionOnly"}
           undefined))

(defn- ensure-kw-map
  "Coerce java.util.HashMap and friends to keywordized maps"
  [data]
  (walk/keywordize-keys (into {} data)))

(defn- auth-data->map [auth-data]
         (hydrate auth-data)
                     
                                             
                                                            
                                               
                                                 
                                                              
                                                                        )

(defn- wrap-auth-cb [cb]
        
  (if cb
    (fn [err info]
      (cb err (hydrate info)))
    identity)
       
                                   
                                                  
                                                  
                                                       
                            )

(defn create-user
  "create-user creates a user in the Firebase built-in authentication server"
  [ref email password & [cb]]
  (.createUser ref
                      #js {:email email, :password password}
                                         
               (wrap-auth-cb cb)))

(defn auth [ref email password & [cb session-only?]]
  (.authWithPassword ref
                            #js {:email email, :password password}
                                               
                     (wrap-auth-cb cb)
                            (build-opts session-only?)))

(defn auth-anon [ref & [cb session-only?]]
  (.authAnonymously ref
                    (wrap-auth-cb cb)
                    ;; Note: session-only? ignored on JVM
                           (build-opts session-only?)))

(defn auth-custom
  "Authenticates a Firebase client using an authentication token or Firebase Secret."
  ([^Firebase ref secret]
   (auth-custom ref secret nil))
  ([^Firebase ref secret cb]
   (.authWithCustomToken ref secret (wrap-auth-cb cb)))
        
  ([^Firebase ref secret cb session-only?]
   (.authWithCustomToken ref
                         secret
                         (wrap-auth-cb cb)
                         (build-opts session-only?))))

(defn auth-info
  "Returns a map of uid, provider, token, expires - or nil if there is no session"
  [ref]
  (auth-data->map (.getAuth ref)))

;; onAuth and offAuth are not wrapped yet

(defn unauth [ref]
  (.unauth ref))

;; nested variants

(defn deref-in [ref korks cb]
  (deref (get-in ref korks) cb))

(defn deref-list-in [ref korks cb]
  (deref-list (get-in ref korks) cb))

(defn reset-in! [ref korks val & [cb]]
  (reset! (get-in ref korks) val cb))

(defn reset-with-priority-in! [ref korks val priority & [cb]]
  (reset-with-priority! (get-in ref korks) val priority cb))

(defn merge-in! [ref korks val & [cb]]
  (merge! (get-in ref korks) val cb))

(defn conj-in! [ref korks val & [cb]]
  (conj! (get-in ref korks) val cb))

(defn swap-in! [ref korks f & args]
  (apply swap! (get-in ref korks) f args))

(defn dissoc-in! [ref korks & [cb]]
  (dissoc! (get-in ref korks) cb))

(def remove-in! dissoc-in!)

(defn set-priority-in! [ref korks priority & [cb]]
  (set-priority! (get-in ref korks) priority cb))

;; ------------------
;; subscriptions

(defn --listen-to [ref type cb render-fn]
       
                                                    
                               
                                                                                   
                                                                    
                                                                                      
                              
                                                
        
  (let [type (utils/kebab->underscore type)]
    (let [listener (comp cb render-fn)]
      ;; subscribe
      (.on ref type listener)
      ;; build unsubsubscribe fn
      (fn [] (.off ref type listener)))))

(defn- -listen-to [ref type cb & [render-fn]]
  (let [render-fn (or render-fn wrap-snapshot)]
    (assert (some #{type} all-events) (str "Unknown type: " type))
    (let [unsub! (--listen-to ref type cb render-fn)]
      (register-listener ref type unsub!)
      unsub!)))

(defn- -listen-children [ref cb]
  (let [cbs (->> child-events
                 (map (fn [type] #(vector type %)))
                 (map #(comp cb %)))
        ;; NOTE: JVM implementation could create a single listener
        unsubs (doall (map -listen-to (repeat ref) child-events cbs))]
    (fn []
      (doseq [unsub! unsubs]
        (unsub!)))))

(defn listen-to
  "Subscribe to notifications of given type
   Callback receives [<key> <value>] as only argument
   Returns an unsubscribe function"
  ([ref type cb] (-listen-to ref type cb))
  ([ref korks type cb] (-listen-to (get-in ref korks) type cb)))

(defn listen-list
  "Subscribe to updates containing full vector or children"
  ([ref cb] (-listen-to ref :value cb get-children))
  ([ref korks cb] (listen-list (get-in ref korks) cb)))

(defn listen-children
  "Subscribe to all children notifications on a reference.
   Callback receives [:event-type [<key> <value>]] as only argument
   Returns an unsubscribe function"
  ([ref cb] (-listen-children ref cb))
  ([ref korks cb] (-listen-children (get-in ref korks) cb)))

;;;;;;;;;;;; This file autogenerated from src/matchbox/core.cljx
