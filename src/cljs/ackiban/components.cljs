(defn username-input []
  (let [username (subscribe [:username-input])]
    [:input {:type "text"
              :value @username
              :on-change #(dispatch [:set-username-input (-> % .-target .-value)])}]))


;;OBV not secure 
(defn password-input []
  (let [password (subscribe [:password-input])]
  [:input {:type "text"
            :value @password
            :on-change #(dispatch [:set-password-input (-> % .-target .-value)])}]))

;; login form
(defn login-form []
  (let [message   (reagent/atom "")
        username  (subscribe [:username-input])
        password (subscribe [:password-input])]
        [:form {:on-submit (fn [e]
                         ;; prevent redirect
                         (.preventDefault e)
                         (dispatch-sync [:oauth @username @password])
                         ;; reset the form
                         (.reset (.-target e)))}
     [:input {:type "text"
              :on-change #(reset! message (-> % .-target .-value))}]
     [:button {:type "submit"} "Login"]])))

;;Todo Add register form