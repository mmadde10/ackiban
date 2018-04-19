// Compiled by ClojureScript 1.7.122 {}
goog.provide('reagent.session');
goog.require('cljs.core');
goog.require('reagent.core');
reagent.session.state = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Get the key's value from the session, returns nil if it doesn't exist.
 */
reagent.session.get = (function reagent$session$get(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13739 = arguments.length;
var i__5713__auto___13740 = (0);
while(true){
if((i__5713__auto___13740 < len__5712__auto___13739)){
args__5719__auto__.push((arguments[i__5713__auto___13740]));

var G__13741 = (i__5713__auto___13740 + (1));
i__5713__auto___13740 = G__13741;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

reagent.session.get.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13737){
var vec__13738 = p__13737;
var default$ = cljs.core.nth.call(null,vec__13738,(0),null);
return cljs.core.get.call(null,cljs.core.deref.call(null,reagent.session.state),k,default$);
});

reagent.session.get.cljs$lang$maxFixedArity = (1);

reagent.session.get.cljs$lang$applyTo = (function (seq13735){
var G__13736 = cljs.core.first.call(null,seq13735);
var seq13735__$1 = cljs.core.next.call(null,seq13735);
return reagent.session.get.cljs$core$IFn$_invoke$arity$variadic(G__13736,seq13735__$1);
});
reagent.session.put_BANG_ = (function reagent$session$put_BANG_(k,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.assoc,k,v);
});
/**
 * Gets the value at the path specified by the vector ks from the session,
 *   returns nil if it doesn't exist.
 */
reagent.session.get_in = (function reagent$session$get_in(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13746 = arguments.length;
var i__5713__auto___13747 = (0);
while(true){
if((i__5713__auto___13747 < len__5712__auto___13746)){
args__5719__auto__.push((arguments[i__5713__auto___13747]));

var G__13748 = (i__5713__auto___13747 + (1));
i__5713__auto___13747 = G__13748;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13744){
var vec__13745 = p__13744;
var default$ = cljs.core.nth.call(null,vec__13745,(0),null);
return cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
});

reagent.session.get_in.cljs$lang$maxFixedArity = (1);

reagent.session.get_in.cljs$lang$applyTo = (function (seq13742){
var G__13743 = cljs.core.first.call(null,seq13742);
var seq13742__$1 = cljs.core.next.call(null,seq13742);
return reagent.session.get_in.cljs$core$IFn$_invoke$arity$variadic(G__13743,seq13742__$1);
});
/**
 * Replace the current session's value with the result of executing f with
 *   the current value and args.
 */
reagent.session.swap_BANG_ = (function reagent$session$swap_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13751 = arguments.length;
var i__5713__auto___13752 = (0);
while(true){
if((i__5713__auto___13752 < len__5712__auto___13751)){
args__5719__auto__.push((arguments[i__5713__auto___13752]));

var G__13753 = (i__5713__auto___13752 + (1));
i__5713__auto___13752 = G__13753;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
return cljs.core.apply.call(null,cljs.core.swap_BANG_,reagent.session.state,f,args);
});

reagent.session.swap_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.swap_BANG_.cljs$lang$applyTo = (function (seq13749){
var G__13750 = cljs.core.first.call(null,seq13749);
var seq13749__$1 = cljs.core.next.call(null,seq13749);
return reagent.session.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13750,seq13749__$1);
});
/**
 * Remove all data from the session and start over cleanly.
 */
reagent.session.clear_BANG_ = (function reagent$session$clear_BANG_(){
return cljs.core.reset_BANG_.call(null,reagent.session.state,cljs.core.PersistentArrayMap.EMPTY);
});
reagent.session.reset_BANG_ = (function reagent$session$reset_BANG_(m){
return cljs.core.reset_BANG_.call(null,reagent.session.state,m);
});
/**
 * Remove a key from the session
 */
reagent.session.remove_BANG_ = (function reagent$session$remove_BANG_(k){
return cljs.core.swap_BANG_.call(null,reagent.session.state,cljs.core.dissoc,k);
});
/**
 * Associates a value in the session, where ks is a
 * sequence of keys and v is the new value and returns
 * a new nested structure. If any levels do not exist,
 * hash-maps will be created.
 */
reagent.session.assoc_in_BANG_ = (function reagent$session$assoc_in_BANG_(ks,v){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__13754_SHARP_){
return cljs.core.assoc_in.call(null,p1__13754_SHARP_,ks,v);
}));
});
/**
 * Destructive get from the session. This returns the current value of the key
 *   and then removes it from the session.
 */
reagent.session.get_BANG_ = (function reagent$session$get_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13759 = arguments.length;
var i__5713__auto___13760 = (0);
while(true){
if((i__5713__auto___13760 < len__5712__auto___13759)){
args__5719__auto__.push((arguments[i__5713__auto___13760]));

var G__13761 = (i__5713__auto___13760 + (1));
i__5713__auto___13760 = G__13761;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (k,p__13757){
var vec__13758 = p__13757;
var default$ = cljs.core.nth.call(null,vec__13758,(0),null);
var cur = reagent.session.get.call(null,k,default$);
reagent.session.remove_BANG_.call(null,k);

return cur;
});

reagent.session.get_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_BANG_.cljs$lang$applyTo = (function (seq13755){
var G__13756 = cljs.core.first.call(null,seq13755);
var seq13755__$1 = cljs.core.next.call(null,seq13755);
return reagent.session.get_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13756,seq13755__$1);
});
/**
 * Destructive get from the session. This returns the current value of the path
 *   specified by the vector ks and then removes it from the session.
 */
reagent.session.get_in_BANG_ = (function reagent$session$get_in_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13766 = arguments.length;
var i__5713__auto___13767 = (0);
while(true){
if((i__5713__auto___13767 < len__5712__auto___13766)){
args__5719__auto__.push((arguments[i__5713__auto___13767]));

var G__13768 = (i__5713__auto___13767 + (1));
i__5713__auto___13767 = G__13768;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,p__13764){
var vec__13765 = p__13764;
var default$ = cljs.core.nth.call(null,vec__13765,(0),null);
var cur = cljs.core.get_in.call(null,cljs.core.deref.call(null,reagent.session.state),ks,default$);
reagent.session.assoc_in_BANG_.call(null,ks,null);

return cur;
});

reagent.session.get_in_BANG_.cljs$lang$maxFixedArity = (1);

reagent.session.get_in_BANG_.cljs$lang$applyTo = (function (seq13762){
var G__13763 = cljs.core.first.call(null,seq13762);
var seq13762__$1 = cljs.core.next.call(null,seq13762);
return reagent.session.get_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13763,seq13762__$1);
});
/**
 * 'Updates' a value in the session, where ks is a
 * sequence of keys and f is a function that will
 * take the old value along with any supplied args and return
 * the new value. If any levels do not exist, hash-maps
 * will be created.
 */
reagent.session.update_in_BANG_ = (function reagent$session$update_in_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13773 = arguments.length;
var i__5713__auto___13774 = (0);
while(true){
if((i__5713__auto___13774 < len__5712__auto___13773)){
args__5719__auto__.push((arguments[i__5713__auto___13774]));

var G__13775 = (i__5713__auto___13774 + (1));
i__5713__auto___13774 = G__13775;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ks,f,args){
return cljs.core.swap_BANG_.call(null,reagent.session.state,(function (p1__13769_SHARP_){
return cljs.core.apply.call(null,cljs.core.partial.call(null,cljs.core.update_in,p1__13769_SHARP_,ks,f),args);
}));
});

reagent.session.update_in_BANG_.cljs$lang$maxFixedArity = (2);

reagent.session.update_in_BANG_.cljs$lang$applyTo = (function (seq13770){
var G__13771 = cljs.core.first.call(null,seq13770);
var seq13770__$1 = cljs.core.next.call(null,seq13770);
var G__13772 = cljs.core.first.call(null,seq13770__$1);
var seq13770__$2 = cljs.core.next.call(null,seq13770__$1);
return reagent.session.update_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13771,G__13772,seq13770__$2);
});

//# sourceMappingURL=session.js.map