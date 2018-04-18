(ns ackiban.env
  (:require [clojure.tools.logging :as log]))

(def defaults
  {:init
   (fn []
     (log/info "\n-=[ackiban started successfully]=-"))
   :stop
   (fn []
     (log/info "\n-=[ackiban has shut down successfully]=-"))
   :middleware identity})
