(ns ackiban.views
  (:require
    [ackiban.subscription :as subscriptions]
    [ackiban.core :as ackiban]
    [ackiban.components :as components]
    [reagent.session :as session]))

  
  (defn home-page []
    (let [chat-room (subscriptions/subscribe [:current-chat-room])
          messages  (subscriptions/subscribe [:chat-room-messages])]
      [:div
       [:div.container
        [:div.page-header
         [:h2 "ackiban"]]
  
        (if @chat-room
          [on-going-chat]
          [join-room-view])
  
        [:div [:br] [:br] [:br]
         "STATE!!!!"
         [:div "Messages: " (pr-str @messages)]]]]))
  
  (defn current-page []
    [:div [(session/get :current-page)]])

  (defn login-view []
      [:div
        [:h2 "Login"]
        [components/login-form]
      ])