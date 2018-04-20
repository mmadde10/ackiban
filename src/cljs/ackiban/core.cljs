(ns ackiban.core
  (:require [cljs.core.async :refer [<!]]
            [clojure.string :as str]
            [goog.events :as events]
            [goog.history.EventType :as EventType]
            [reagent.core :as reagent]
            [reagent.session :as session]
            [secretary.core :as secretary :refer-macros [defroute]]
            [expound.core :as expound]
            [garden.core :refer [css]]
            [ns-tracker.core :as ns-tracker]
            [ackiban.views :as views]
            [ackiban.events :as event]
            [ackiban.routes :as routes]
            [ackiban.subscription :as subscription]
            [ackiban.components :as components]
            [re-frame.core :as rf :refer [dispatch
                                          dispatch-sync
                                          register-handler
                                          register-sub
                                          subscribe]]
            [matchbox.async :as ma]
            [matchbox.core :as m])
            (:require-macros [reagent.ratom :refer [reaction]]
              [cljs.core.async.macros :refer [go-loop]])
(:import goog.History)))

;; -- REPLACE with your own DB location ---------
(def firebase-io-root "https://ackiban.firebaseio.com")
;; ----------------------------------------------

;; Connection to Firebase
(defonce fb-root (m/connect firebase-io-root))

(def initial-state
  {:chat-room nil
   :messages []
   :username (str "Guest" (rand-int 100))})

;; -- Helpers ---------------

(defn- random-four-characters []
  (->> (repeatedly #(rand-nth ["a" "b" "c" "d" "e" "f" "g" "h" "i" "j" "k" "l" "m" "n" "o" "p" "q" "r" "s" "t" "u" "v" "w" "x" "y" "z"]))
       (take 4)
       (str/join)
       (str/upper-case)))

;; -- Subscriptions ---------


;; -- Event Handlers --------



;; -- View Components -------

;; -- Views -----------------



;; -- Routes and History ----


;; -------------------------
;; Initialize app

(defn init! []
  (hook-browser-navigation!)
  (secretary/set-config! :prefix "#")
  (dispatch-sync [:initialize])

  ;; mount root
  (reagent/render-component [views/current-page] (.getElementById js/document "app")))

