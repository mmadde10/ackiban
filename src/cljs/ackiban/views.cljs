(defn on-going-chat []
    [:div
     [:label "Your username: "]
     [username-input]
  
     [show-messages]
  
     [message-form]])
  
  (defn join-room-view []
    (let [this-room        (atom (random-four-characters))
          change-location #(set! (.-location js/window) (str "#/room/" @this-room))]
      [:div
       [:input {:placeholder "Room Name"
                :type "text"
                :on-change #(reset! this-room (-> % .-target .-value))}]
       [:button {:type "submit"
                 :on-click change-location}
        "Join Room"]
       [:button {:on-click change-location
                 :type "submit"}
        "Random Room"]]))
  
  (defn home-page []
    (let [chat-room (subscribe [:current-chat-room])
          messages  (subscribe [:chat-room-messages])]
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