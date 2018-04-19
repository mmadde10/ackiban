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