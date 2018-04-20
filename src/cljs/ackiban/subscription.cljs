(ns ackiban.subscription
  (:require [re-frame.core :as rf :refer [dispatch
                                          register-sub
                                          subscribe]])
  (:require-macros [reagent.ratom :refer [reaction]]
                   [cljs.core.async.macros :refer [go-loop]]))
(rf/register-sub
    :username-input
    (fn [db _]
      (reaction (:username @db))))
  
  (rf/register-sub
    :current-chat-room
    (fn [db _]
      (reaction (:chat-room @db))))
  
  (rf/register-sub
    :chat-room-messages
    (fn [db _]
      (reaction (vals (:messages @db)))))