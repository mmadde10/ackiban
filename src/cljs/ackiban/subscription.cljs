(register-sub
    :username-input
    (fn [db _]
      (reaction (:username @db))))
  
  (register-sub
    :current-chat-room
    (fn [db _]
      (reaction (:chat-room @db))))
  
  (register-sub
    :chat-room-messages
    (fn [db _]
      (reaction (vals (:messages @db)))))