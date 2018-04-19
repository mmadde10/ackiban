// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13685_13699 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13686_13700 = null;
var count__13687_13701 = (0);
var i__13688_13702 = (0);
while(true){
if((i__13688_13702 < count__13687_13701)){
var f_13703 = cljs.core._nth.call(null,chunk__13686_13700,i__13688_13702);
cljs.core.println.call(null,"  ",f_13703);

var G__13704 = seq__13685_13699;
var G__13705 = chunk__13686_13700;
var G__13706 = count__13687_13701;
var G__13707 = (i__13688_13702 + (1));
seq__13685_13699 = G__13704;
chunk__13686_13700 = G__13705;
count__13687_13701 = G__13706;
i__13688_13702 = G__13707;
continue;
} else {
var temp__4425__auto___13708 = cljs.core.seq.call(null,seq__13685_13699);
if(temp__4425__auto___13708){
var seq__13685_13709__$1 = temp__4425__auto___13708;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13685_13709__$1)){
var c__5457__auto___13710 = cljs.core.chunk_first.call(null,seq__13685_13709__$1);
var G__13711 = cljs.core.chunk_rest.call(null,seq__13685_13709__$1);
var G__13712 = c__5457__auto___13710;
var G__13713 = cljs.core.count.call(null,c__5457__auto___13710);
var G__13714 = (0);
seq__13685_13699 = G__13711;
chunk__13686_13700 = G__13712;
count__13687_13701 = G__13713;
i__13688_13702 = G__13714;
continue;
} else {
var f_13715 = cljs.core.first.call(null,seq__13685_13709__$1);
cljs.core.println.call(null,"  ",f_13715);

var G__13716 = cljs.core.next.call(null,seq__13685_13709__$1);
var G__13717 = null;
var G__13718 = (0);
var G__13719 = (0);
seq__13685_13699 = G__13716;
chunk__13686_13700 = G__13717;
count__13687_13701 = G__13718;
i__13688_13702 = G__13719;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_13720 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4654__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_13720);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_13720)))?cljs.core.second.call(null,arglists_13720):arglists_13720));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__13689 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__13690 = null;
var count__13691 = (0);
var i__13692 = (0);
while(true){
if((i__13692 < count__13691)){
var vec__13693 = cljs.core._nth.call(null,chunk__13690,i__13692);
var name = cljs.core.nth.call(null,vec__13693,(0),null);
var map__13694 = cljs.core.nth.call(null,vec__13693,(1),null);
var map__13694__$1 = ((((!((map__13694 == null)))?((((map__13694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13694):map__13694);
var doc = cljs.core.get.call(null,map__13694__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13694__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13721 = seq__13689;
var G__13722 = chunk__13690;
var G__13723 = count__13691;
var G__13724 = (i__13692 + (1));
seq__13689 = G__13721;
chunk__13690 = G__13722;
count__13691 = G__13723;
i__13692 = G__13724;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__13689);
if(temp__4425__auto__){
var seq__13689__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__13689__$1)){
var c__5457__auto__ = cljs.core.chunk_first.call(null,seq__13689__$1);
var G__13725 = cljs.core.chunk_rest.call(null,seq__13689__$1);
var G__13726 = c__5457__auto__;
var G__13727 = cljs.core.count.call(null,c__5457__auto__);
var G__13728 = (0);
seq__13689 = G__13725;
chunk__13690 = G__13726;
count__13691 = G__13727;
i__13692 = G__13728;
continue;
} else {
var vec__13696 = cljs.core.first.call(null,seq__13689__$1);
var name = cljs.core.nth.call(null,vec__13696,(0),null);
var map__13697 = cljs.core.nth.call(null,vec__13696,(1),null);
var map__13697__$1 = ((((!((map__13697 == null)))?((((map__13697.cljs$lang$protocol_mask$partition0$ & (64))) || (map__13697.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__13697):map__13697);
var doc = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__13697__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__13729 = cljs.core.next.call(null,seq__13689__$1);
var G__13730 = null;
var G__13731 = (0);
var G__13732 = (0);
seq__13689 = G__13729;
chunk__13690 = G__13730;
count__13691 = G__13731;
i__13692 = G__13732;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map