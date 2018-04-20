// Compiled by ClojureScript 1.7.122 {}
goog.provide('ackiban.subscription');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"username-input","username-input",673530501),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"username","username",1605666410).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"current-chat-room","current-chat-room",842163279),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return new cljs.core.Keyword(null,"chat-room","chat-room",-830892048).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db));
}));
}));
re_frame.core.register_sub.call(null,new cljs.core.Keyword(null,"chat-room-messages","chat-room-messages",-117076439),(function (db,_){
return reagent.ratom.make_reaction.call(null,(function (){
return cljs.core.vals.call(null,new cljs.core.Keyword(null,"messages","messages",345434482).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,db)));
}));
}));

//# sourceMappingURL=subscription.js.map