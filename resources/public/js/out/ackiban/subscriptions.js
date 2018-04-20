// Compiled by ClojureScript 1.7.122 {}
goog.provide('ackiban.subscriptions');
goog.require('cljs.core');
ackiban.subscriptions.register_sub.call(null,new cljs.core.Keyword(null,"username-input","username-input",673530501),(function (db,_){
return ackiban.subscriptions.reaction.call(null,new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
ackiban.subscriptions.register_sub.call(null,new cljs.core.Keyword(null,"current-chat-room","current-chat-room",842163279),(function (db,_){
return ackiban.subscriptions.reaction.call(null,new cljs.core.Keyword(null,"chat-room","chat-room",-830892048).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
ackiban.subscriptions.register_sub.call(null,new cljs.core.Keyword(null,"chat-room-messages","chat-room-messages",-117076439),(function (db,_){
return ackiban.subscriptions.reaction.call(null,cljs.core.vals.call(null,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db))));
}));

//# sourceMappingURL=subscriptions.js.map