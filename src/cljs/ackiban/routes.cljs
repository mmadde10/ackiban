(ns ackiban.routes
  (:require [secretary.core :as secretary :refer-macros [defroute]]
            [goog.events :as events]
            [reagent.session :as session]
            [ackiban.views :as views]
            [re-frame.core :as rf :refer [dispatch dispatch-sync]]))

(secretary/defroute "/" []
    (dispatch [:exit-chat-room])
    (session/put! :current-page #'home-page))
  
  (secretary/defroute "/room/:id" [id]
    (dispatch [:join-chat-room id])
    (session/put! :current-page #'home-page))
  
  (defn hook-browser-navigation! []
    (doto (History.)
      (events/listen
       EventType/NAVIGATE
       (fn [event]
         (secretary/dispatch! (.-token event))))
      (.setEnabled true)))