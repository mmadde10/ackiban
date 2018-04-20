// Compiled by ClojureScript 1.7.122 {}
goog.provide('ackiban.components');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('reagent.session');
goog.require('re_frame.core');
ackiban.components.username_input = (function ackiban$components$username_input(){
var username = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username-input","username-input",673530501)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,username),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username){
return (function (p1__23790_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-username-input","set-username-input",1418515164),p1__23790_SHARP_.target.value], null));
});})(username))
], null)], null);
});
ackiban.components.password_input = (function ackiban$components$password_input(){
var password = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-input","password-input",-978093158)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,password),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (password){
return (function (p1__23791_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-password-input","set-password-input",1219098995),p1__23791_SHARP_.target.value], null));
});})(password))
], null)], null);
});
ackiban.components.login_form = (function ackiban$components$login_form(){
var message = reagent.core.atom.call(null,"");
var username = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username-input","username-input",673530501)], null));
var password = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"password-input","password-input",-978093158)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (message,username,password){
return (function (e){
e.preventDefault();

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"oauth","oauth",-306386865),cljs.core.deref.call(null,username),cljs.core.deref.call(null,password)], null));

return e.target.reset();
});})(message,username,password))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (message,username,password){
return (function (p1__23792_SHARP_){
return cljs.core.reset_BANG_.call(null,message,p1__23792_SHARP_.target.value);
});})(message,username,password))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Login"], null)], null);
});

//# sourceMappingURL=components.js.map