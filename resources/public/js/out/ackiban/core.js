// Compiled by ClojureScript 1.7.122 {}
goog.provide('ackiban.core');
goog.require('cljs.core');
goog.require('matchbox.core');
goog.require('reagent.core');
goog.require('secretary.core');
goog.require('matchbox.async');
goog.require('reagent.session');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('cljs.core.async');
goog.require('goog.History');
goog.require('goog.events');
goog.require('clojure.string');
ackiban.core.firebase_io_root = "https://ackiban.firebaseio.com";
if(typeof ackiban.core.fb_root !== 'undefined'){
} else {
ackiban.core.fb_root = matchbox.core.connect.call(null,ackiban.core.firebase_io_root);
}
ackiban.core.initial_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"chat-room","chat-room",-830892048),null,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"username","username",1605666410),[cljs.core.str("Guest"),cljs.core.str(cljs.core.rand_int.call(null,(100)))].join('')], null);
ackiban.core.random_four_characters = (function ackiban$core$random_four_characters(){
return clojure.string.upper_case.call(null,clojure.string.join.call(null,cljs.core.take.call(null,(4),cljs.core.repeatedly.call(null,(function (){
return cljs.core.rand_nth.call(null,new cljs.core.PersistentVector(null, 26, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"], null));
})))));
});
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
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"initialize","initialize",609952913),(function (db,_){
return cljs.core.merge.call(null,db,ackiban.core.initial_state);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"set-username-input","set-username-input",1418515164),(function (db,p__7051){
var vec__7052 = p__7051;
var _ = cljs.core.nth.call(null,vec__7052,(0),null);
var value = cljs.core.nth.call(null,vec__7052,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"username","username",1605666410),value);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"room-update","room-update",-481478465),(function (db,p__7053){
var vec__7054 = p__7053;
var _ = cljs.core.nth.call(null,vec__7054,(0),null);
var v = cljs.core.nth.call(null,vec__7054,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"messages","messages",345434482),v);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"join-chat-room","join-chat-room",-2135149315),(function (db,p__7055){
var vec__7056 = p__7055;
var _ = cljs.core.nth.call(null,vec__7056,(0),null);
var room_id = cljs.core.nth.call(null,vec__7056,(1),null);
var id_7059 = cljs.core.keyword.call(null,clojure.string.lower_case.call(null,room_id));
matchbox.core.listen_to.call(null,matchbox.core.take_last.call(null,matchbox.core.get_in.call(null,ackiban.core.fb_root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id_7059,new cljs.core.Keyword(null,"messages","messages",345434482)], null)),(30)),new cljs.core.Keyword(null,"value","value",305978217),((function (id_7059,vec__7056,_,room_id){
return (function (p__7057){
var vec__7058 = p__7057;
var ___$1 = cljs.core.nth.call(null,vec__7058,(0),null);
var v = cljs.core.nth.call(null,vec__7058,(1),null);
cljs.core.println.call(null,v);

return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"room-update","room-update",-481478465),v], null));
});})(id_7059,vec__7056,_,room_id))
);

return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"chat-room","chat-room",-830892048),room_id);
}));
re_frame.core.register_handler.call(null,new cljs.core.Keyword(null,"send-message","send-message",185030731),(function (db,p__7060){
var vec__7061 = p__7060;
var _ = cljs.core.nth.call(null,vec__7061,(0),null);
var username = cljs.core.nth.call(null,vec__7061,(1),null);
var message = cljs.core.nth.call(null,vec__7061,(2),null);
var chat_room = cljs.core.nth.call(null,vec__7061,(3),null);
matchbox.core.conj_in_BANG_.call(null,ackiban.core.fb_root,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.call(null,clojure.string.lower_case.call(null,chat_room)),new cljs.core.Keyword(null,"messages","messages",345434482)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"username","username",1605666410),username,new cljs.core.Keyword(null,"message","message",-406056002),message], null));

return db;
}));
ackiban.core.username_input = (function ackiban$core$username_input(){
var username = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username-input","username-input",673530501)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,username),new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (username){
return (function (p1__7062_SHARP_){
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-username-input","set-username-input",1418515164),p1__7062_SHARP_.target.value], null));
});})(username))
], null)], null);
});
ackiban.core.message_form = (function ackiban$core$message_form(){
var message = reagent.core.atom.call(null,"");
var username = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"username-input","username-input",673530501)], null));
var chat_room = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-chat-room","current-chat-room",842163279)], null));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),((function (message,username,chat_room){
return (function (e){
e.preventDefault();

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"send-message","send-message",185030731),cljs.core.deref.call(null,username),cljs.core.deref.call(null,message),cljs.core.deref.call(null,chat_room)], null));

return e.target.reset();
});})(message,username,chat_room))
], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (message,username,chat_room){
return (function (p1__7063_SHARP_){
return cljs.core.reset_BANG_.call(null,message,p1__7063_SHARP_.target.value);
});})(message,username,chat_room))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Send"], null)], null);
});
ackiban.core.show_messages = (function ackiban$core$show_messages(){
var messages = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chat-room-messages","chat-room-messages",-117076439)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div#messages","div#messages",917168929),(function (){var iter__5335__auto__ = ((function (messages){
return (function ackiban$core$show_messages_$_iter__7080(s__7081){
return (new cljs.core.LazySeq(null,((function (messages){
return (function (){
var s__7081__$1 = s__7081;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7081__$1);
if(temp__4425__auto__){
var s__7081__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7081__$2)){
var c__5333__auto__ = cljs.core.chunk_first.call(null,s__7081__$2);
var size__5334__auto__ = cljs.core.count.call(null,c__5333__auto__);
var b__7083 = cljs.core.chunk_buffer.call(null,size__5334__auto__);
if((function (){var i__7082 = (0);
while(true){
if((i__7082 < size__5334__auto__)){
var vec__7090 = cljs.core._nth.call(null,c__5333__auto__,i__7082);
var map__7091 = cljs.core.nth.call(null,vec__7090,(0),null);
var map__7091__$1 = ((((!((map__7091 == null)))?((((map__7091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7091):map__7091);
var username = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var message = cljs.core.get.call(null,map__7091__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var index = cljs.core.nth.call(null,vec__7090,(1),null);
cljs.core.chunk_append.call(null,b__7083,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.username","span.username",1869100274),username], null),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.message","span.message",-91645153),message], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("message-"),cljs.core.str(index)].join('')], null)));

var G__7096 = (i__7082 + (1));
i__7082 = G__7096;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7083),ackiban$core$show_messages_$_iter__7080.call(null,cljs.core.chunk_rest.call(null,s__7081__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7083),null);
}
} else {
var vec__7093 = cljs.core.first.call(null,s__7081__$2);
var map__7094 = cljs.core.nth.call(null,vec__7093,(0),null);
var map__7094__$1 = ((((!((map__7094 == null)))?((((map__7094.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7094.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7094):map__7094);
var username = cljs.core.get.call(null,map__7094__$1,new cljs.core.Keyword(null,"username","username",1605666410));
var message = cljs.core.get.call(null,map__7094__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var index = cljs.core.nth.call(null,vec__7093,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.username","span.username",1869100274),username], null),": ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span.message","span.message",-91645153),message], null)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),[cljs.core.str("message-"),cljs.core.str(index)].join('')], null)),ackiban$core$show_messages_$_iter__7080.call(null,cljs.core.rest.call(null,s__7081__$2)));
}
} else {
return null;
}
break;
}
});})(messages))
,null,null));
});})(messages))
;
return iter__5335__auto__.call(null,cljs.core.map.call(null,cljs.core.vector,cljs.core.deref.call(null,messages),cljs.core.range.call(null)));
})()], null);
});
ackiban.core.on_going_chat = (function ackiban$core$on_going_chat(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),"Your username: "], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ackiban.core.username_input], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ackiban.core.show_messages], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ackiban.core.message_form], null)], null);
});
ackiban.core.join_room_view = (function ackiban$core$join_room_view(){
var this_room = cljs.core.atom.call(null,ackiban.core.random_four_characters.call(null));
var change_location = ((function (this_room){
return (function (){
return window.location = [cljs.core.str("#/room/"),cljs.core.str(cljs.core.deref.call(null,this_room))].join('');
});})(this_room))
;
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Room Name",new cljs.core.Keyword(null,"type","type",1174270348),"text",new cljs.core.Keyword(null,"on-change","on-change",-732046149),((function (this_room,change_location){
return (function (p1__7097_SHARP_){
return cljs.core.reset_BANG_.call(null,this_room,p1__7097_SHARP_.target.value);
});})(this_room,change_location))
], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"on-click","on-click",1632826543),change_location], null),"Join Room"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),change_location,new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null),"Random Room"], null)], null);
});
ackiban.core.home_page = (function ackiban$core$home_page(){
var chat_room = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"current-chat-room","current-chat-room",842163279)], null));
var messages = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"chat-room-messages","chat-room-messages",-117076439)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.page-header","div.page-header",-18181304),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h2","h2",-372662728),"ackiban"], null)], null),(cljs.core.truth_(cljs.core.deref.call(null,chat_room))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ackiban.core.on_going_chat], null):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ackiban.core.join_room_view], null)),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"br","br",934104792)], null),"STATE!!!!",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Messages: ",cljs.core.pr_str.call(null,cljs.core.deref.call(null,messages))], null)], null)], null)], null);
});
ackiban.core.current_page = (function ackiban$core$current_page(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [reagent.session.get.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180))], null)], null);
});
var action__7041__auto___7101 = (function (params__7042__auto__){
if(cljs.core.map_QMARK_.call(null,params__7042__auto__)){
var map__7098 = params__7042__auto__;
var map__7098__$1 = ((((!((map__7098 == null)))?((((map__7098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7098):map__7098);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit-chat-room","exit-chat-room",-513862968)], null));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ackiban.core.home_page;},new cljs.core.Symbol("ackiban.core","home-page","ackiban.core/home-page",-1036119033,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ackiban.core","ackiban.core",1239651935,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/ackiban/core.cljs",16,1,151,151,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ackiban.core.home_page)?ackiban.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__7042__auto__)){
var vec__7100 = params__7042__auto__;
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exit-chat-room","exit-chat-room",-513862968)], null));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ackiban.core.home_page;},new cljs.core.Symbol("ackiban.core","home-page","ackiban.core/home-page",-1036119033,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ackiban.core","ackiban.core",1239651935,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/ackiban/core.cljs",16,1,151,151,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ackiban.core.home_page)?ackiban.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__7041__auto___7101);

var action__7041__auto___7105 = (function (params__7042__auto__){
if(cljs.core.map_QMARK_.call(null,params__7042__auto__)){
var map__7102 = params__7042__auto__;
var map__7102__$1 = ((((!((map__7102 == null)))?((((map__7102.cljs$lang$protocol_mask$partition0$ & (64))) || (map__7102.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__7102):map__7102);
var id = cljs.core.get.call(null,map__7102__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"join-chat-room","join-chat-room",-2135149315),id], null));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ackiban.core.home_page;},new cljs.core.Symbol("ackiban.core","home-page","ackiban.core/home-page",-1036119033,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ackiban.core","ackiban.core",1239651935,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/ackiban/core.cljs",16,1,151,151,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ackiban.core.home_page)?ackiban.core.home_page.cljs$lang$test:null)])));
} else {
if(cljs.core.vector_QMARK_.call(null,params__7042__auto__)){
var vec__7104 = params__7042__auto__;
var id = cljs.core.nth.call(null,vec__7104,(0),null);
re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"join-chat-room","join-chat-room",-2135149315),id], null));

return reagent.session.put_BANG_.call(null,new cljs.core.Keyword(null,"current-page","current-page",-101294180),new cljs.core.Var(function(){return ackiban.core.home_page;},new cljs.core.Symbol("ackiban.core","home-page","ackiban.core/home-page",-1036119033,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"ackiban.core","ackiban.core",1239651935,null),new cljs.core.Symbol(null,"home-page","home-page",-850279575,null),"src/cljs/ackiban/core.cljs",16,1,151,151,cljs.core.list(cljs.core.PersistentVector.EMPTY),null,(cljs.core.truth_(ackiban.core.home_page)?ackiban.core.home_page.cljs$lang$test:null)])));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/room/:id",action__7041__auto___7105);

ackiban.core.hook_browser_navigation_BANG_ = (function ackiban$core$hook_browser_navigation_BANG_(){
var G__7107 = (new goog.History());
goog.events.listen(G__7107,goog.history.EventType.NAVIGATE,((function (G__7107){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__7107))
);

G__7107.setEnabled(true);

return G__7107;
});
ackiban.core.init_BANG_ = (function ackiban$core$init_BANG_(){
ackiban.core.hook_browser_navigation_BANG_.call(null);

secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"initialize","initialize",609952913)], null));

return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ackiban.core.current_page], null),document.getElementById("app"));
});

//# sourceMappingURL=core.js.map