(ns user
  (:require [ackiban.config :refer [env]]
            [mount.core :as mount]
            [ackiban.core :refer [start-app]]))

(defn start []
  (mount/start-without #'ackiban.core/repl-server))

(defn stop []
  (mount/stop-except #'ackiban.core/repl-server))

(defn restart []
  (stop)
  (start))


