// Compiled by ClojureScript 1.7.122 {}
goog.provide('matchbox.async');
goog.require('cljs.core');
goog.require('matchbox.core');
goog.require('cljs.core.async');
/**
 * Call a function with a fresh channel, then return the channel
 */
matchbox.async.with_chan = (function matchbox$async$with_chan(f){
var ch = cljs.core.async.chan.call(null);
f.call(null,ch);

return ch;
});
/**
 * Create callback that pushes non-nil arguments onto given chan
 */
matchbox.async.chan__GT_cb = (function matchbox$async$chan__GT_cb(ch){
return (function (val){
if(cljs.core.truth_(val)){
return cljs.core.async.put_BANG_.call(null,ch,val);
} else {
return null;
}
});
});
/**
 * Create callback that pushes arguments onto chan at-most once
 */
matchbox.async.chan__GT_cb_once = (function matchbox$async$chan__GT_cb_once(ch){
return (function (val){
if(cljs.core.truth_(val)){
cljs.core.async.put_BANG_.call(null,ch,val);
} else {
}

return cljs.core.async.close_BANG_.call(null,ch);
});
});
/**
 * Creates a callback to push [err, value] arguments onto a chan, exactly once
 */
matchbox.async.chan__GT_auth_cb = (function matchbox$async$chan__GT_auth_cb(ch){
return (function (err,val){
cljs.core.async.put_BANG_.call(null,ch,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [err,val], null));

return cljs.core.async.close_BANG_.call(null,ch);
});
});
matchbox.async.auth_LT_ = (function matchbox$async$auth_LT_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___12598 = arguments.length;
var i__5713__auto___12599 = (0);
while(true){
if((i__5713__auto___12599 < len__5712__auto___12598)){
args__5719__auto__.push((arguments[i__5713__auto___12599]));

var G__12600 = (i__5713__auto___12599 + (1));
i__5713__auto___12599 = G__12600;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.async.auth_LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.async.auth_LT_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,email,password,p__12596){
var vec__12597 = p__12596;
var session_only_QMARK_ = cljs.core.nth.call(null,vec__12597,(0),null);
return matchbox.async.with_chan.call(null,((function (vec__12597,session_only_QMARK_){
return (function (p1__12591_SHARP_){
return matchbox.core.auth.call(null,ref,email,password,matchbox.async.chan__GT_auth_cb.call(null,p1__12591_SHARP_),session_only_QMARK_);
});})(vec__12597,session_only_QMARK_))
);
});

matchbox.async.auth_LT_.cljs$lang$maxFixedArity = (3);

matchbox.async.auth_LT_.cljs$lang$applyTo = (function (seq12592){
var G__12593 = cljs.core.first.call(null,seq12592);
var seq12592__$1 = cljs.core.next.call(null,seq12592);
var G__12594 = cljs.core.first.call(null,seq12592__$1);
var seq12592__$2 = cljs.core.next.call(null,seq12592__$1);
var G__12595 = cljs.core.first.call(null,seq12592__$2);
var seq12592__$3 = cljs.core.next.call(null,seq12592__$2);
return matchbox.async.auth_LT_.cljs$core$IFn$_invoke$arity$variadic(G__12593,G__12594,G__12595,seq12592__$3);
});
matchbox.async.auth_anon_LT_ = (function matchbox$async$auth_anon_LT_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___12606 = arguments.length;
var i__5713__auto___12607 = (0);
while(true){
if((i__5713__auto___12607 < len__5712__auto___12606)){
args__5719__auto__.push((arguments[i__5713__auto___12607]));

var G__12608 = (i__5713__auto___12607 + (1));
i__5713__auto___12607 = G__12608;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return matchbox.async.auth_anon_LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

matchbox.async.auth_anon_LT_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,p__12604){
var vec__12605 = p__12604;
var session_only_QMARK_ = cljs.core.nth.call(null,vec__12605,(0),null);
return matchbox.async.with_chan.call(null,((function (vec__12605,session_only_QMARK_){
return (function (p1__12601_SHARP_){
return matchbox.core.auth_anon.call(null,ref,matchbox.async.chan__GT_auth_cb.call(null,p1__12601_SHARP_),session_only_QMARK_);
});})(vec__12605,session_only_QMARK_))
);
});

matchbox.async.auth_anon_LT_.cljs$lang$maxFixedArity = (1);

matchbox.async.auth_anon_LT_.cljs$lang$applyTo = (function (seq12602){
var G__12603 = cljs.core.first.call(null,seq12602);
var seq12602__$1 = cljs.core.next.call(null,seq12602);
return matchbox.async.auth_anon_LT_.cljs$core$IFn$_invoke$arity$variadic(G__12603,seq12602__$1);
});
/**
 * Authenticates a Firebase client using an authentication token or Firebase Secret.
 */
matchbox.async.auth_custom_LT_ = (function matchbox$async$auth_custom_LT_(var_args){
var args12611 = [];
var len__5712__auto___12614 = arguments.length;
var i__5713__auto___12615 = (0);
while(true){
if((i__5713__auto___12615 < len__5712__auto___12614)){
args12611.push((arguments[i__5713__auto___12615]));

var G__12616 = (i__5713__auto___12615 + (1));
i__5713__auto___12615 = G__12616;
continue;
} else {
}
break;
}

var G__12613 = args12611.length;
switch (G__12613) {
case 2:
return matchbox.async.auth_custom_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return matchbox.async.auth_custom_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12611.length)].join('')));

}
});

matchbox.async.auth_custom_LT_.cljs$core$IFn$_invoke$arity$2 = (function (ref,secret){
return matchbox.async.with_chan.call(null,(function (p1__12609_SHARP_){
return matchbox.core.auth_custom.call(null,ref,secret,matchbox.async.chan__GT_auth_cb.call(null,p1__12609_SHARP_));
}));
});

matchbox.async.auth_custom_LT_.cljs$core$IFn$_invoke$arity$3 = (function (ref,secret,session_only_QMARK_){
return matchbox.async.with_chan.call(null,(function (p1__12610_SHARP_){
return matchbox.core.auth_custom.call(null,ref,secret,matchbox.async.chan__GT_auth_cb.call(null,p1__12610_SHARP_),session_only_QMARK_);
}));
});

matchbox.async.auth_custom_LT_.cljs$lang$maxFixedArity = 3;
matchbox.async.create_user_LT_ = (function matchbox$async$create_user_LT_(ref,email,password){
return matchbox.async.with_chan.call(null,(function (p1__12618_SHARP_){
return matchbox.core.create_user.call(null,ref,email,password,matchbox.async.chan__GT_cb_once.call(null,p1__12618_SHARP_));
}));
});
matchbox.async.deref_LT_ = (function matchbox$async$deref_LT_(ref){
return matchbox.async.with_chan.call(null,(function (p1__12619_SHARP_){
return matchbox.core.deref.call(null,ref,matchbox.async.chan__GT_cb_once.call(null,p1__12619_SHARP_));
}));
});
matchbox.async.deref_list_LT_ = (function matchbox$async$deref_list_LT_(ref){
return matchbox.async.with_chan.call(null,(function (p1__12620_SHARP_){
return matchbox.core.deref_list.call(null,ref,matchbox.async.chan__GT_cb_once.call(null,p1__12620_SHARP_));
}));
});
matchbox.async.reset_BANG__LT_ = (function matchbox$async$reset_BANG__LT_(ref,val){
return matchbox.async.with_chan.call(null,(function (p1__12621_SHARP_){
return matchbox.core.reset_BANG_.call(null,ref,val,matchbox.async.chan__GT_cb_once.call(null,p1__12621_SHARP_));
}));
});
matchbox.async.reset_with_priority_BANG__LT_ = (function matchbox$async$reset_with_priority_BANG__LT_(ref,val,priority){
return matchbox.async.with_chan.call(null,(function (p1__12622_SHARP_){
return matchbox.core.reset_with_priority_BANG_.call(null,ref,val,priority,matchbox.async.chan__GT_cb_once.call(null,p1__12622_SHARP_));
}));
});
matchbox.async.merge_BANG__LT_ = (function matchbox$async$merge_BANG__LT_(ref,val){
return matchbox.async.with_chan.call(null,(function (p1__12623_SHARP_){
return matchbox.core.merge_BANG_.call(null,ref,val,matchbox.async.chan__GT_cb_once.call(null,p1__12623_SHARP_));
}));
});
matchbox.async.conj_BANG__LT_ = (function matchbox$async$conj_BANG__LT_(ref,val){
return matchbox.async.with_chan.call(null,(function (p1__12624_SHARP_){
return matchbox.core.conj_BANG_.call(null,ref,val,matchbox.async.chan__GT_cb_once.call(null,p1__12624_SHARP_));
}));
});
matchbox.async.swap_BANG__LT_ = (function matchbox$async$swap_BANG__LT_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___12630 = arguments.length;
var i__5713__auto___12631 = (0);
while(true){
if((i__5713__auto___12631 < len__5712__auto___12630)){
args__5719__auto__.push((arguments[i__5713__auto___12631]));

var G__12632 = (i__5713__auto___12631 + (1));
i__5713__auto___12631 = G__12632;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.async.swap_BANG__LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.async.swap_BANG__LT_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
if(cljs.core.every_QMARK_.call(null,(function (p1__12625_SHARP_){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"callback","callback",-705136228),p1__12625_SHARP_);
}),args)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"every?","every?",2083724064,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__12625#","p1__12625#",1449647281,null)], null),cljs.core.list(new cljs.core.Symbol(null,"not=","not=",1466536204,null),new cljs.core.Keyword(null,"callback","callback",-705136228),new cljs.core.Symbol(null,"p1__12625#","p1__12625#",1449647281,null))),new cljs.core.Symbol(null,"args","args",-1338879193,null))))].join('')));
}

return matchbox.async.with_chan.call(null,(function (p1__12626_SHARP_){
return cljs.core.apply.call(null,matchbox.core.swap_BANG_,ref,f,cljs.core.into.call(null,cljs.core.vec.call(null,args),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"callback","callback",-705136228),matchbox.async.chan__GT_cb_once.call(null,p1__12626_SHARP_)], null)));
}));
});

matchbox.async.swap_BANG__LT_.cljs$lang$maxFixedArity = (2);

matchbox.async.swap_BANG__LT_.cljs$lang$applyTo = (function (seq12627){
var G__12628 = cljs.core.first.call(null,seq12627);
var seq12627__$1 = cljs.core.next.call(null,seq12627);
var G__12629 = cljs.core.first.call(null,seq12627__$1);
var seq12627__$2 = cljs.core.next.call(null,seq12627__$1);
return matchbox.async.swap_BANG__LT_.cljs$core$IFn$_invoke$arity$variadic(G__12628,G__12629,seq12627__$2);
});
matchbox.async.dissoc_BANG__LT_ = (function matchbox$async$dissoc_BANG__LT_(ref){
return matchbox.async.with_chan.call(null,(function (p1__12633_SHARP_){
return matchbox.core.remove_BANG_.call(null,ref,matchbox.async.chan__GT_cb_once.call(null,p1__12633_SHARP_));
}));
});
matchbox.async.remove_BANG__LT_ = matchbox.async.dissoc_BANG__LT_;
matchbox.async.set_priority_BANG__LT_ = (function matchbox$async$set_priority_BANG__LT_(ref,priority){
return matchbox.async.with_chan.call(null,(function (p1__12634_SHARP_){
return matchbox.core.set_priority_BANG_.call(null,ref,priority,matchbox.async.chan__GT_cb_once.call(null,p1__12634_SHARP_));
}));
});
matchbox.async.export_LT_ = (function matchbox$async$export_LT_(ref_or_ds){
return matchbox.async.with_chan.call(null,(function (p1__12635_SHARP_){
return matchbox.core.export$.call(null,ref_or_ds,matchbox.async.chan__GT_cb_once.call(null,p1__12635_SHARP_));
}));
});
matchbox.async.priority_LT_ = (function matchbox$async$priority_LT_(ref_or_ds){
return matchbox.async.with_chan.call(null,(function (p1__12636_SHARP_){
return matchbox.core.priority.call(null,ref_or_ds,matchbox.async.chan__GT_cb_once.call(null,p1__12636_SHARP_));
}));
});
matchbox.async.deref_in_LT_ = (function matchbox$async$deref_in_LT_(ref,korks){
return matchbox.async.deref_LT_.call(null,matchbox.core.get_in.call(null,ref,korks));
});
matchbox.async.deref_list_in_LT_ = (function matchbox$async$deref_list_in_LT_(ref,korks){
return matchbox.async.deref_list_LT_.call(null,matchbox.core.get_in.call(null,ref,korks));
});
matchbox.async.reset_in_BANG__LT_ = (function matchbox$async$reset_in_BANG__LT_(ref,korks,val){
return matchbox.async.reset_BANG__LT_.call(null,matchbox.core.get_in.call(null,ref,korks),val);
});
matchbox.async.reset_with_priority_in_BANG__LT_ = (function matchbox$async$reset_with_priority_in_BANG__LT_(ref,korks,val,priority){
return matchbox.async.reset_with_priority_BANG__LT_.call(null,matchbox.core.get_in.call(null,ref,korks),val,priority);
});
matchbox.async.merge_in_BANG__LT_ = (function matchbox$async$merge_in_BANG__LT_(ref,korks,val){
return matchbox.async.merge_BANG__LT_.call(null,matchbox.core.get_in.call(null,ref,korks),val);
});
matchbox.async.conj_in_BANG__LT_ = (function matchbox$async$conj_in_BANG__LT_(ref,korks,val){
return matchbox.async.conj_BANG__LT_.call(null,matchbox.core.get_in.call(null,ref,korks),val);
});
matchbox.async.swap_in_BANG__LT_ = (function matchbox$async$swap_in_BANG__LT_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___12641 = arguments.length;
var i__5713__auto___12642 = (0);
while(true){
if((i__5713__auto___12642 < len__5712__auto___12641)){
args__5719__auto__.push((arguments[i__5713__auto___12642]));

var G__12643 = (i__5713__auto___12642 + (1));
i__5713__auto___12642 = G__12643;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.async.swap_in_BANG__LT_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.async.swap_in_BANG__LT_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,f,args){
return cljs.core.apply.call(null,matchbox.async.swap_BANG__LT_,matchbox.core.get_in.call(null,ref,korks),f,args);
});

matchbox.async.swap_in_BANG__LT_.cljs$lang$maxFixedArity = (3);

matchbox.async.swap_in_BANG__LT_.cljs$lang$applyTo = (function (seq12637){
var G__12638 = cljs.core.first.call(null,seq12637);
var seq12637__$1 = cljs.core.next.call(null,seq12637);
var G__12639 = cljs.core.first.call(null,seq12637__$1);
var seq12637__$2 = cljs.core.next.call(null,seq12637__$1);
var G__12640 = cljs.core.first.call(null,seq12637__$2);
var seq12637__$3 = cljs.core.next.call(null,seq12637__$2);
return matchbox.async.swap_in_BANG__LT_.cljs$core$IFn$_invoke$arity$variadic(G__12638,G__12639,G__12640,seq12637__$3);
});
matchbox.async.dissoc_in_BANG__LT_ = (function matchbox$async$dissoc_in_BANG__LT_(ref,korks){
return matchbox.async.remove_BANG__LT_.call(null,matchbox.core.get_in.call(null,ref,korks));
});
matchbox.async.remove_in_BANG__LT_ = matchbox.async.dissoc_in_BANG__LT_;
matchbox.async.set_priority_in_BANG__LT_ = (function matchbox$async$set_priority_in_BANG__LT_(ref,korks,priority){
return matchbox.async.set_priority_BANG__LT_.call(null,cljs.core.get_in.call(null,ref,korks),priority);
});
matchbox.async.export_in_LT_ = (function matchbox$async$export_in_LT_(ref_or_ds,korks){
return matchbox.async.with_chan.call(null,(function (p1__12644_SHARP_){
return matchbox.core.export_in.call(null,ref_or_ds,korks,matchbox.async.chan__GT_cb_once.call(null,p1__12644_SHARP_));
}));
});
matchbox.async.priority_in_LT_ = (function matchbox$async$priority_in_LT_(ref_or_ds,korks){
return matchbox.async.with_chan.call(null,(function (p1__12645_SHARP_){
return matchbox.core.priority_in.call(null,ref_or_ds,korks,matchbox.async.chan__GT_cb_once.call(null,p1__12645_SHARP_));
}));
});
matchbox.async.listen_to_LT_ = (function matchbox$async$listen_to_LT_(var_args){
var args12647 = [];
var len__5712__auto___12650 = arguments.length;
var i__5713__auto___12651 = (0);
while(true){
if((i__5713__auto___12651 < len__5712__auto___12650)){
args12647.push((arguments[i__5713__auto___12651]));

var G__12652 = (i__5713__auto___12651 + (1));
i__5713__auto___12651 = G__12652;
continue;
} else {
}
break;
}

var G__12649 = args12647.length;
switch (G__12649) {
case 2:
return matchbox.async.listen_to_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return matchbox.async.listen_to_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12647.length)].join('')));

}
});

matchbox.async.listen_to_LT_.cljs$core$IFn$_invoke$arity$2 = (function (ref,type){
return matchbox.async.with_chan.call(null,(function (p1__12646_SHARP_){
return matchbox.core.listen_to.call(null,ref,type,matchbox.async.chan__GT_cb.call(null,p1__12646_SHARP_));
}));
});

matchbox.async.listen_to_LT_.cljs$core$IFn$_invoke$arity$3 = (function (ref,korks,type){
return matchbox.async.listen_to_LT_.call(null,matchbox.core.get_in.call(null,ref,korks),type);
});

matchbox.async.listen_to_LT_.cljs$lang$maxFixedArity = 3;
matchbox.async.listen_list_LT_ = (function matchbox$async$listen_list_LT_(var_args){
var args12655 = [];
var len__5712__auto___12658 = arguments.length;
var i__5713__auto___12659 = (0);
while(true){
if((i__5713__auto___12659 < len__5712__auto___12658)){
args12655.push((arguments[i__5713__auto___12659]));

var G__12660 = (i__5713__auto___12659 + (1));
i__5713__auto___12659 = G__12660;
continue;
} else {
}
break;
}

var G__12657 = args12655.length;
switch (G__12657) {
case 1:
return matchbox.async.listen_list_LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return matchbox.async.listen_list_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12655.length)].join('')));

}
});

matchbox.async.listen_list_LT_.cljs$core$IFn$_invoke$arity$1 = (function (ref){
return matchbox.async.with_chan.call(null,(function (p1__12654_SHARP_){
return matchbox.core.listen_list.call(null,ref,matchbox.async.chan__GT_cb.call(null,p1__12654_SHARP_));
}));
});

matchbox.async.listen_list_LT_.cljs$core$IFn$_invoke$arity$2 = (function (ref,korks){
return matchbox.async.listen_list_LT_.call(null,matchbox.core.get_in.call(null,ref,korks));
});

matchbox.async.listen_list_LT_.cljs$lang$maxFixedArity = 2;
matchbox.async.listen_children_LT_ = (function matchbox$async$listen_children_LT_(var_args){
var args12663 = [];
var len__5712__auto___12666 = arguments.length;
var i__5713__auto___12667 = (0);
while(true){
if((i__5713__auto___12667 < len__5712__auto___12666)){
args12663.push((arguments[i__5713__auto___12667]));

var G__12668 = (i__5713__auto___12667 + (1));
i__5713__auto___12667 = G__12668;
continue;
} else {
}
break;
}

var G__12665 = args12663.length;
switch (G__12665) {
case 1:
return matchbox.async.listen_children_LT_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return matchbox.async.listen_children_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args12663.length)].join('')));

}
});

matchbox.async.listen_children_LT_.cljs$core$IFn$_invoke$arity$1 = (function (ref){
return matchbox.async.with_chan.call(null,(function (p1__12662_SHARP_){
return matchbox.core.listen_children.call(null,ref,matchbox.async.chan__GT_cb.call(null,p1__12662_SHARP_));
}));
});

matchbox.async.listen_children_LT_.cljs$core$IFn$_invoke$arity$2 = (function (ref,korks){
return matchbox.async.listen_children_LT_.call(null,matchbox.core.get_in.call(null,ref,korks));
});

matchbox.async.listen_children_LT_.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=async.js.map