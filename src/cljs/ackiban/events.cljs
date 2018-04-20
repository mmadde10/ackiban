(ns ackiban.events
  (:require [day8.re-frame.http-fx]
            [matchbox.core :as m]
            [re-frame.core :as rf :refer [dispatch
                                          dispatch-sync
                                          register-handler
                                          register-sub
                                          subscribe]]))
(register-handler
    :initialize
    (fn [db _]
      (merge db initial-state)))
  
  (register-handler
    :set-username-input
    (fn [db [_ value]]
      (assoc db :username value)))
  
  (register-handler
    :room-update
    (fn [db [_ v]]
      (assoc db :messages v)))
  
  (register-handler
    :join-chat-room
    (fn [db [_ room-id]]
      ;; listen to chat room on firebase
      (let [id  (-> room-id (str/lower-case) (keyword))]
        (-> fb-root
            (m/get-in [id :messages])
            (m/take-last 30)
            (m/listen-to :value
                         (fn [[_ v]] (println v) (dispatch [:room-update v])))))
  
      ;; update current room id
      (assoc db :chat-room room-id)))
  
  (register-handler
    :send-message
    (fn [db [_ username message chat-room]]
      (m/conj-in! fb-root [(-> chat-room (str/lower-case) (keyword))
                           :messages]
                  {:username username
                   :message message})
      db))