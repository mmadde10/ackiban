// Compiled by ClojureScript 1.7.122 {}
goog.provide('matchbox.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('matchbox.utils');
goog.require('matchbox.registry');
goog.require('cljsjs.firebase');
matchbox.core.child_events = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-added","child-added",117696479),new cljs.core.Keyword(null,"child-changed","child-changed",-1341750948),new cljs.core.Keyword(null,"child-moved","child-moved",-1952562040),new cljs.core.Keyword(null,"child-removed","child-removed",-739888431)], null);
matchbox.core.all_events = cljs.core.conj.call(null,matchbox.core.child_events,new cljs.core.Keyword(null,"value","value",305978217));
matchbox.core.undefined;
matchbox.core.Firebase = Firebase;
matchbox.core.SERVER_TIMESTAMP = Firebase.ServerValue.TIMESTAMP;
matchbox.core.wrap_snapshot;
matchbox.core.hydrate;
matchbox.core.reset_BANG_;
matchbox.core.throw_fb_error = (function matchbox$core$throw_fb_error(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13782 = arguments.length;
var i__5713__auto___13783 = (0);
while(true){
if((i__5713__auto___13783 < len__5712__auto___13782)){
args__5719__auto__.push((arguments[i__5713__auto___13783]));

var G__13784 = (i__5713__auto___13783 + (1));
i__5713__auto___13783 = G__13784;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return matchbox.core.throw_fb_error.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

matchbox.core.throw_fb_error.cljs$core$IFn$_invoke$arity$variadic = (function (err,p__13780){
var vec__13781 = p__13780;
var msg = cljs.core.nth.call(null,vec__13781,(0),null);
throw cljs.core.ex_info.call(null,(function (){var or__4654__auto__ = msg;
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return "FirebaseError";
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"err","err",-2089457205),err], null));
});

matchbox.core.throw_fb_error.cljs$lang$maxFixedArity = (1);

matchbox.core.throw_fb_error.cljs$lang$applyTo = (function (seq13778){
var G__13779 = cljs.core.first.call(null,seq13778);
var seq13778__$1 = cljs.core.next.call(null,seq13778);
return matchbox.core.throw_fb_error.cljs$core$IFn$_invoke$arity$variadic(G__13779,seq13778__$1);
});
matchbox.core.keywords__GT_strings = (function matchbox$core$keywords__GT_strings(x){
if((x instanceof cljs.core.Keyword)){
return [cljs.core.str(x)].join('');
} else {
return x;
}
});
matchbox.core.hydrate_keywords = (function matchbox$core$hydrate_keywords(x){
if((typeof x === 'string') && (cljs.core._EQ_.call(null,":",cljs.core.first.call(null,x)))){
return cljs.core.keyword.call(null,cljs.core.apply.call(null,cljs.core.str,cljs.core.rest.call(null,x)));
} else {
return x;
}
});
matchbox.core.hydrate = (function matchbox$core$hydrate(v){
return clojure.walk.postwalk.call(null,matchbox.core.hydrate_keywords,cljs.core.js__GT_clj.call(null,v,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true));
});
matchbox.core.serialize = (function matchbox$core$serialize(v){
return cljs.core.clj__GT_js.call(null,clojure.walk.postwalk.call(null,matchbox.core.keywords__GT_strings,clojure.walk.stringify_keys.call(null,v)));
});
/**
 * Last segment in reference or snapshot path
 */
matchbox.core.key = (function matchbox$core$key(ref){
return ref.key();
});
/**
 * Data stored within snapshot
 */
matchbox.core.value = (function matchbox$core$value(snapshot){
return matchbox.core.hydrate.call(null,snapshot.val());
});
matchbox.core.wrap_snapshot = (function matchbox$core$wrap_snapshot(snapshot){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [matchbox.core.key.call(null,snapshot),matchbox.core.value.call(null,snapshot)], null);
});
/**
 * Obtain child reference from base by following korks
 */
matchbox.core.get_in = (function matchbox$core$get_in(ref,korks){
var path = matchbox.utils.korks__GT_path.call(null,korks);
if(cljs.core.not.call(null,cljs.core.seq.call(null,path))){
return ref;
} else {
return ref.child(path);
}
});
/**
 * Create a reference for firebase
 */
matchbox.core.connect = (function matchbox$core$connect(var_args){
var args13785 = [];
var len__5712__auto___13788 = arguments.length;
var i__5713__auto___13789 = (0);
while(true){
if((i__5713__auto___13789 < len__5712__auto___13788)){
args13785.push((arguments[i__5713__auto___13789]));

var G__13790 = (i__5713__auto___13789 + (1));
i__5713__auto___13789 = G__13790;
continue;
} else {
}
break;
}

var G__13787 = args13785.length;
switch (G__13787) {
case 1:
return matchbox.core.connect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return matchbox.core.connect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13785.length)].join('')));

}
});

matchbox.core.connect.cljs$core$IFn$_invoke$arity$1 = (function (url){
return (new Firebase(url));
});

matchbox.core.connect.cljs$core$IFn$_invoke$arity$2 = (function (url,korks){
return matchbox.core.get_in.call(null,matchbox.core.connect.call(null,url),korks);
});

matchbox.core.connect.cljs$lang$maxFixedArity = 2;
/**
 * Immediate ancestor of reference, if any
 */
matchbox.core.parent = (function matchbox$core$parent(ref){
var and__4642__auto__ = ref;
if(cljs.core.truth_(and__4642__auto__)){
return ref.parent();
} else {
return and__4642__auto__;
}
});
/**
 * Probably don't need this. Or maybe we want more zipper nav (siblings, in-order, etc)
 */
matchbox.core.parents = (function matchbox$core$parents(ref){
return cljs.core.take_while.call(null,cljs.core.identity,cljs.core.iterate.call(null,matchbox.core.parent,matchbox.core.parent.call(null,ref)));
});
matchbox.core.deref = (function matchbox$core$deref(ref,cb){
return ref.once("value",cljs.core.comp.call(null,cb,matchbox.core.value));
});
matchbox.core.get_children = (function matchbox$core$get_children(snapshot){
return cljs.core.mapv.call(null,matchbox.core.value,(function (){var kids = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
snapshot.forEach(((function (kids){
return (function (p1__13792_SHARP_){
cljs.core.swap_BANG_.call(null,kids,cljs.core.conj,p1__13792_SHARP_);

return matchbox.core.undefined;
});})(kids))
);

return cljs.core.deref.call(null,kids);
})());
});
matchbox.core.deref_list = (function matchbox$core$deref_list(ref,cb){
return ref.once("value",cljs.core.comp.call(null,cb,(function (p1__13793_SHARP_){
return matchbox.core.get_children.call(null,p1__13793_SHARP_);
})));
});
matchbox.core.reset_BANG_ = (function matchbox$core$reset_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13799 = arguments.length;
var i__5713__auto___13800 = (0);
while(true){
if((i__5713__auto___13800 < len__5712__auto___13799)){
args__5719__auto__.push((arguments[i__5713__auto___13800]));

var G__13801 = (i__5713__auto___13800 + (1));
i__5713__auto___13800 = G__13801;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.reset_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.reset_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,val,p__13797){
var vec__13798 = p__13797;
var cb = cljs.core.nth.call(null,vec__13798,(0),null);
return ref.set(matchbox.core.serialize.call(null,val),(cljs.core.truth_(cb)?((function (vec__13798,cb){
return (function (err){
if(cljs.core.truth_(err)){
return matchbox.core.throw_fb_error.call(null,err);
} else {
return cb.call(null,ref);
}
});})(vec__13798,cb))
:matchbox.core.undefined));
});

matchbox.core.reset_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.reset_BANG_.cljs$lang$applyTo = (function (seq13794){
var G__13795 = cljs.core.first.call(null,seq13794);
var seq13794__$1 = cljs.core.next.call(null,seq13794);
var G__13796 = cljs.core.first.call(null,seq13794__$1);
var seq13794__$2 = cljs.core.next.call(null,seq13794__$1);
return matchbox.core.reset_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13795,G__13796,seq13794__$2);
});
matchbox.core.reset_with_priority_BANG_ = (function matchbox$core$reset_with_priority_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13808 = arguments.length;
var i__5713__auto___13809 = (0);
while(true){
if((i__5713__auto___13809 < len__5712__auto___13808)){
args__5719__auto__.push((arguments[i__5713__auto___13809]));

var G__13810 = (i__5713__auto___13809 + (1));
i__5713__auto___13809 = G__13810;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.core.reset_with_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.core.reset_with_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,val,priority,p__13806){
var vec__13807 = p__13806;
var cb = cljs.core.nth.call(null,vec__13807,(0),null);
return ref.setWithPriority(matchbox.core.serialize.call(null,val),priority,(cljs.core.truth_(cb)?((function (vec__13807,cb){
return (function (err){
if(cljs.core.truth_(err)){
return matchbox.core.throw_fb_error.call(null,err);
} else {
return cb.call(null,ref);
}
});})(vec__13807,cb))
:matchbox.core.undefined));
});

matchbox.core.reset_with_priority_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.reset_with_priority_BANG_.cljs$lang$applyTo = (function (seq13802){
var G__13803 = cljs.core.first.call(null,seq13802);
var seq13802__$1 = cljs.core.next.call(null,seq13802);
var G__13804 = cljs.core.first.call(null,seq13802__$1);
var seq13802__$2 = cljs.core.next.call(null,seq13802__$1);
var G__13805 = cljs.core.first.call(null,seq13802__$2);
var seq13802__$3 = cljs.core.next.call(null,seq13802__$2);
return matchbox.core.reset_with_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13803,G__13804,G__13805,seq13802__$3);
});
matchbox.core.merge_BANG_ = (function matchbox$core$merge_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13816 = arguments.length;
var i__5713__auto___13817 = (0);
while(true){
if((i__5713__auto___13817 < len__5712__auto___13816)){
args__5719__auto__.push((arguments[i__5713__auto___13817]));

var G__13818 = (i__5713__auto___13817 + (1));
i__5713__auto___13817 = G__13818;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,val,p__13814){
var vec__13815 = p__13814;
var cb = cljs.core.nth.call(null,vec__13815,(0),null);
return ref.update(matchbox.core.serialize.call(null,val),(cljs.core.truth_(cb)?((function (vec__13815,cb){
return (function (err){
if(cljs.core.truth_(err)){
return matchbox.core.throw_fb_error.call(null,err);
} else {
return cb.call(null,ref);
}
});})(vec__13815,cb))
:matchbox.core.undefined));
});

matchbox.core.merge_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.merge_BANG_.cljs$lang$applyTo = (function (seq13811){
var G__13812 = cljs.core.first.call(null,seq13811);
var seq13811__$1 = cljs.core.next.call(null,seq13811);
var G__13813 = cljs.core.first.call(null,seq13811__$1);
var seq13811__$2 = cljs.core.next.call(null,seq13811__$1);
return matchbox.core.merge_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13812,G__13813,seq13811__$2);
});
matchbox.core.conj_BANG_ = (function matchbox$core$conj_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13824 = arguments.length;
var i__5713__auto___13825 = (0);
while(true){
if((i__5713__auto___13825 < len__5712__auto___13824)){
args__5719__auto__.push((arguments[i__5713__auto___13825]));

var G__13826 = (i__5713__auto___13825 + (1));
i__5713__auto___13825 = G__13826;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,val,p__13822){
var vec__13823 = p__13822;
var cb = cljs.core.nth.call(null,vec__13823,(0),null);
var k = cljs.core.atom.call(null,null);
cljs.core.reset_BANG_.call(null,k,matchbox.core.key.call(null,ref.push(matchbox.core.serialize.call(null,val),(cljs.core.truth_(cb)?((function (k,vec__13823,cb){
return (function (err){
if(cljs.core.truth_(err)){
return matchbox.core.throw_fb_error.call(null,err);
} else {
return cb.call(null,matchbox.core.get_in.call(null,ref,cljs.core.deref.call(null,k)));
}
});})(k,vec__13823,cb))
:matchbox.core.undefined))));

return cljs.core.deref.call(null,k);
});

matchbox.core.conj_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.conj_BANG_.cljs$lang$applyTo = (function (seq13819){
var G__13820 = cljs.core.first.call(null,seq13819);
var seq13819__$1 = cljs.core.next.call(null,seq13819);
var G__13821 = cljs.core.first.call(null,seq13819__$1);
var seq13819__$2 = cljs.core.next.call(null,seq13819__$1);
return matchbox.core.conj_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13820,G__13821,seq13819__$2);
});
/**
 * Update value atomically, with local optimistic writes
 */
matchbox.core.swap_BANG_ = (function matchbox$core$swap_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13832 = arguments.length;
var i__5713__auto___13833 = (0);
while(true){
if((i__5713__auto___13833 < len__5712__auto___13832)){
args__5719__auto__.push((arguments[i__5713__auto___13833]));

var G__13834 = (i__5713__auto___13833 + (1));
i__5713__auto___13833 = G__13834;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,f,args){
var vec__13831 = matchbox.utils.extract_cb.call(null,args);
var cb = cljs.core.nth.call(null,vec__13831,(0),null);
var args__$1 = cljs.core.nth.call(null,vec__13831,(1),null);
var f_SINGLEQUOTE_ = ((function (vec__13831,cb,args__$1){
return (function (p1__13827_SHARP_){
return matchbox.core.serialize.call(null,((function (vec__13831,cb,args__$1){
return (function (x){
return cljs.core.apply.call(null,f,x,args__$1);
});})(vec__13831,cb,args__$1))
.call(null,matchbox.core.hydrate.call(null,p1__13827_SHARP_)));
});})(vec__13831,cb,args__$1))
;
return ref.transaction(f_SINGLEQUOTE_,(cljs.core.truth_(cb)?((function (f_SINGLEQUOTE_,vec__13831,cb,args__$1){
return (function (err,commit_QMARK_,ds){
if(cljs.core.truth_(err)){
return matchbox.core.throw_fb_error.call(null,err);
} else {
return cb.call(null,matchbox.core.value.call(null,ds));
}
});})(f_SINGLEQUOTE_,vec__13831,cb,args__$1))
:matchbox.core.undefined));
});

matchbox.core.swap_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.swap_BANG_.cljs$lang$applyTo = (function (seq13828){
var G__13829 = cljs.core.first.call(null,seq13828);
var seq13828__$1 = cljs.core.next.call(null,seq13828);
var G__13830 = cljs.core.first.call(null,seq13828__$1);
var seq13828__$2 = cljs.core.next.call(null,seq13828__$1);
return matchbox.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13829,G__13830,seq13828__$2);
});
matchbox.core.dissoc_BANG_ = (function matchbox$core$dissoc_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13839 = arguments.length;
var i__5713__auto___13840 = (0);
while(true){
if((i__5713__auto___13840 < len__5712__auto___13839)){
args__5719__auto__.push((arguments[i__5713__auto___13840]));

var G__13841 = (i__5713__auto___13840 + (1));
i__5713__auto___13840 = G__13841;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return matchbox.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

matchbox.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,p__13837){
var vec__13838 = p__13837;
var cb = cljs.core.nth.call(null,vec__13838,(0),null);
return ref.remove((function (){var or__4654__auto__ = cb;
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.dissoc_BANG_.cljs$lang$maxFixedArity = (1);

matchbox.core.dissoc_BANG_.cljs$lang$applyTo = (function (seq13835){
var G__13836 = cljs.core.first.call(null,seq13835);
var seq13835__$1 = cljs.core.next.call(null,seq13835);
return matchbox.core.dissoc_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13836,seq13835__$1);
});
matchbox.core.remove_BANG_ = matchbox.core.dissoc_BANG_;
matchbox.core.set_priority_BANG_ = (function matchbox$core$set_priority_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13847 = arguments.length;
var i__5713__auto___13848 = (0);
while(true){
if((i__5713__auto___13848 < len__5712__auto___13847)){
args__5719__auto__.push((arguments[i__5713__auto___13848]));

var G__13849 = (i__5713__auto___13848 + (1));
i__5713__auto___13848 = G__13849;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.set_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.set_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,priority,p__13845){
var vec__13846 = p__13845;
var cb = cljs.core.nth.call(null,vec__13846,(0),null);
return ref.setPriority(priority,(function (){var or__4654__auto__ = cb;
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.set_priority_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.set_priority_BANG_.cljs$lang$applyTo = (function (seq13842){
var G__13843 = cljs.core.first.call(null,seq13842);
var seq13842__$1 = cljs.core.next.call(null,seq13842);
var G__13844 = cljs.core.first.call(null,seq13842__$1);
var seq13842__$2 = cljs.core.next.call(null,seq13842__$1);
return matchbox.core.set_priority_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13843,G__13844,seq13842__$2);
});
matchbox.core.ref_QMARK_ = (function matchbox$core$ref_QMARK_(x){
return (x instanceof Firebase);
});
matchbox.core.with_ds = (function matchbox$core$with_ds(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13855 = arguments.length;
var i__5713__auto___13856 = (0);
while(true){
if((i__5713__auto___13856 < len__5712__auto___13855)){
args__5719__auto__.push((arguments[i__5713__auto___13856]));

var G__13857 = (i__5713__auto___13856 + (1));
i__5713__auto___13856 = G__13857;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.with_ds.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.with_ds.cljs$core$IFn$_invoke$arity$variadic = (function (ref_or_ds,f,p__13853){
var vec__13854 = p__13853;
var cb = cljs.core.nth.call(null,vec__13854,(0),null);
if(cljs.core.truth_(matchbox.core.ref_QMARK_.call(null,ref_or_ds))){
var ref = ref_or_ds;
if(cljs.core.truth_(cb)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Callback required when called against reference"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"cb","cb",-2064487928,null)))].join('')));
}

return ref.once("value",cljs.core.comp.call(null,cb,f));
} else {
var ds = ref_or_ds;
var v = f.call(null,ds);
if(cljs.core.truth_(cb)){
return cb.call(null,v);
} else {
return v;
}
}
});

matchbox.core.with_ds.cljs$lang$maxFixedArity = (2);

matchbox.core.with_ds.cljs$lang$applyTo = (function (seq13850){
var G__13851 = cljs.core.first.call(null,seq13850);
var seq13850__$1 = cljs.core.next.call(null,seq13850);
var G__13852 = cljs.core.first.call(null,seq13850__$1);
var seq13850__$2 = cljs.core.next.call(null,seq13850__$1);
return matchbox.core.with_ds.cljs$core$IFn$_invoke$arity$variadic(G__13851,G__13852,seq13850__$2);
});
matchbox.core._export = (function matchbox$core$_export(ds){
return matchbox.core.hydrate.call(null,ds.exportVal());
});
matchbox.core._priority = (function matchbox$core$_priority(ds){
return ds.getPriority();
});
matchbox.core.export$ = (function matchbox$core$export(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13862 = arguments.length;
var i__5713__auto___13863 = (0);
while(true){
if((i__5713__auto___13863 < len__5712__auto___13862)){
args__5719__auto__.push((arguments[i__5713__auto___13863]));

var G__13864 = (i__5713__auto___13863 + (1));
i__5713__auto___13863 = G__13864;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return matchbox.core.export$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

matchbox.core.export$.cljs$core$IFn$_invoke$arity$variadic = (function (ref_or_ds,p__13860){
var vec__13861 = p__13860;
var cb = cljs.core.nth.call(null,vec__13861,(0),null);
return matchbox.core.with_ds.call(null,ref_or_ds,matchbox.core._export,cb);
});

matchbox.core.export$.cljs$lang$maxFixedArity = (1);

matchbox.core.export$.cljs$lang$applyTo = (function (seq13858){
var G__13859 = cljs.core.first.call(null,seq13858);
var seq13858__$1 = cljs.core.next.call(null,seq13858);
return matchbox.core.export$.cljs$core$IFn$_invoke$arity$variadic(G__13859,seq13858__$1);
});
matchbox.core.priority = (function matchbox$core$priority(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13869 = arguments.length;
var i__5713__auto___13870 = (0);
while(true){
if((i__5713__auto___13870 < len__5712__auto___13869)){
args__5719__auto__.push((arguments[i__5713__auto___13870]));

var G__13871 = (i__5713__auto___13870 + (1));
i__5713__auto___13870 = G__13871;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return matchbox.core.priority.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

matchbox.core.priority.cljs$core$IFn$_invoke$arity$variadic = (function (ref_or_ds,p__13867){
var vec__13868 = p__13867;
var cb = cljs.core.nth.call(null,vec__13868,(0),null);
return matchbox.core.with_ds.call(null,ref_or_ds,matchbox.core._priority,cb);
});

matchbox.core.priority.cljs$lang$maxFixedArity = (1);

matchbox.core.priority.cljs$lang$applyTo = (function (seq13865){
var G__13866 = cljs.core.first.call(null,seq13865);
var seq13865__$1 = cljs.core.next.call(null,seq13865);
return matchbox.core.priority.cljs$core$IFn$_invoke$arity$variadic(G__13866,seq13865__$1);
});
matchbox.core.export_in = (function matchbox$core$export_in(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13878 = arguments.length;
var i__5713__auto___13879 = (0);
while(true){
if((i__5713__auto___13879 < len__5712__auto___13878)){
args__5719__auto__.push((arguments[i__5713__auto___13879]));

var G__13880 = (i__5713__auto___13879 + (1));
i__5713__auto___13879 = G__13880;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.export_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.export_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref_or_ds,korks,p__13876){
var vec__13877 = p__13876;
var cb = cljs.core.nth.call(null,vec__13877,(0),null);
if(cljs.core.truth_(matchbox.core.ref_QMARK_.call(null,ref_or_ds))){
return matchbox.core.export$.call(null,matchbox.core.get_in.call(null,ref_or_ds,korks),cb);
} else {
return matchbox.core.export$.call(null,ref_or_ds,cljs.core.comp.call(null,cb,((function (vec__13877,cb){
return (function (p1__13872_SHARP_){
return matchbox.core.get_in.call(null,p1__13872_SHARP_,korks);
});})(vec__13877,cb))
));
}
});

matchbox.core.export_in.cljs$lang$maxFixedArity = (2);

matchbox.core.export_in.cljs$lang$applyTo = (function (seq13873){
var G__13874 = cljs.core.first.call(null,seq13873);
var seq13873__$1 = cljs.core.next.call(null,seq13873);
var G__13875 = cljs.core.first.call(null,seq13873__$1);
var seq13873__$2 = cljs.core.next.call(null,seq13873__$1);
return matchbox.core.export_in.cljs$core$IFn$_invoke$arity$variadic(G__13874,G__13875,seq13873__$2);
});
matchbox.core.priority_in = (function matchbox$core$priority_in(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13887 = arguments.length;
var i__5713__auto___13888 = (0);
while(true){
if((i__5713__auto___13888 < len__5712__auto___13887)){
args__5719__auto__.push((arguments[i__5713__auto___13888]));

var G__13889 = (i__5713__auto___13888 + (1));
i__5713__auto___13888 = G__13889;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.priority_in.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.priority_in.cljs$core$IFn$_invoke$arity$variadic = (function (ref_or_ds,korks,p__13885){
var vec__13886 = p__13885;
var cb = cljs.core.nth.call(null,vec__13886,(0),null);
if(cljs.core.truth_(matchbox.core.ref_QMARK_.call(null,ref_or_ds))){
return matchbox.core.priority.call(null,matchbox.core.get_in.call(null,ref_or_ds,korks),cb);
} else {
return matchbox.core.priority.call(null,ref_or_ds,cljs.core.comp.call(null,cb,((function (vec__13886,cb){
return (function (p1__13881_SHARP_){
return matchbox.core.get_in.call(null,p1__13881_SHARP_,korks);
});})(vec__13886,cb))
));
}
});

matchbox.core.priority_in.cljs$lang$maxFixedArity = (2);

matchbox.core.priority_in.cljs$lang$applyTo = (function (seq13882){
var G__13883 = cljs.core.first.call(null,seq13882);
var seq13882__$1 = cljs.core.next.call(null,seq13882);
var G__13884 = cljs.core.first.call(null,seq13882__$1);
var seq13882__$2 = cljs.core.next.call(null,seq13882__$1);
return matchbox.core.priority_in.cljs$core$IFn$_invoke$arity$variadic(G__13883,G__13884,seq13882__$2);
});
matchbox.core.order_by_priority = (function matchbox$core$order_by_priority(ref){
return ref.orderByPriority();
});
matchbox.core.order_by_key = (function matchbox$core$order_by_key(ref){
return ref.orderByKey();
});
matchbox.core.order_by_value = (function matchbox$core$order_by_value(ref){
return ref.orderByValue();
});
matchbox.core.order_by_child = (function matchbox$core$order_by_child(ref,key){
return ref.orderByChild(cljs.core.name.call(null,key));
});
/**
 * Limit query to start at `value` (inclusive). By default `value` is compared against
 * priorities, but reacts to the `order-by-*` scope. This also affects what types
 * `value can take on.
 * 
 * `key` is the child key to start at, and is supported only when ordering by priority.
 */
matchbox.core.start_at = (function matchbox$core$start_at(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13895 = arguments.length;
var i__5713__auto___13896 = (0);
while(true){
if((i__5713__auto___13896 < len__5712__auto___13895)){
args__5719__auto__.push((arguments[i__5713__auto___13896]));

var G__13897 = (i__5713__auto___13896 + (1));
i__5713__auto___13896 = G__13897;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.start_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.start_at.cljs$core$IFn$_invoke$arity$variadic = (function (ref,value,p__13893){
var vec__13894 = p__13893;
var key = cljs.core.nth.call(null,vec__13894,(0),null);
var value__$1 = ((typeof value === 'number')?value:value);
if(cljs.core.truth_(key)){
return ref.startAt(value__$1,cljs.core.name.call(null,key));
} else {
return ref.startAt(value__$1);
}
});

matchbox.core.start_at.cljs$lang$maxFixedArity = (2);

matchbox.core.start_at.cljs$lang$applyTo = (function (seq13890){
var G__13891 = cljs.core.first.call(null,seq13890);
var seq13890__$1 = cljs.core.next.call(null,seq13890);
var G__13892 = cljs.core.first.call(null,seq13890__$1);
var seq13890__$2 = cljs.core.next.call(null,seq13890__$1);
return matchbox.core.start_at.cljs$core$IFn$_invoke$arity$variadic(G__13891,G__13892,seq13890__$2);
});
/**
 * Limit query to end at `value` (inclusive). By default `value` is compared against
 * priorities, but reacts to the `order-by-*` scope. This also affects what types
 * `value can take on.
 * 
 * `key` is the child key to end at, and is supported only when ordering by priority.
 */
matchbox.core.end_at = (function matchbox$core$end_at(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13903 = arguments.length;
var i__5713__auto___13904 = (0);
while(true){
if((i__5713__auto___13904 < len__5712__auto___13903)){
args__5719__auto__.push((arguments[i__5713__auto___13904]));

var G__13905 = (i__5713__auto___13904 + (1));
i__5713__auto___13904 = G__13905;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.end_at.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.end_at.cljs$core$IFn$_invoke$arity$variadic = (function (ref,value,p__13901){
var vec__13902 = p__13901;
var key = cljs.core.nth.call(null,vec__13902,(0),null);
var value__$1 = ((typeof value === 'number')?value:value);
if(cljs.core.truth_(key)){
return ref.endAt(value__$1,cljs.core.name.call(null,key));
} else {
return ref.endAt(value__$1);
}
});

matchbox.core.end_at.cljs$lang$maxFixedArity = (2);

matchbox.core.end_at.cljs$lang$applyTo = (function (seq13898){
var G__13899 = cljs.core.first.call(null,seq13898);
var seq13898__$1 = cljs.core.next.call(null,seq13898);
var G__13900 = cljs.core.first.call(null,seq13898__$1);
var seq13898__$2 = cljs.core.next.call(null,seq13898__$1);
return matchbox.core.end_at.cljs$core$IFn$_invoke$arity$variadic(G__13899,G__13900,seq13898__$2);
});
/**
 * Limit query to `value` (inclusive). By default `value` is compared against
 * priorities, but reacts to the `order-by-*` scope. This also affects what types
 * `value can take on.
 * 
 *   `key` is the child key to compare on, and is supported only when ordering by priority.
 */
matchbox.core.equal_to = (function matchbox$core$equal_to(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13911 = arguments.length;
var i__5713__auto___13912 = (0);
while(true){
if((i__5713__auto___13912 < len__5712__auto___13911)){
args__5719__auto__.push((arguments[i__5713__auto___13912]));

var G__13913 = (i__5713__auto___13912 + (1));
i__5713__auto___13912 = G__13913;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.equal_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.equal_to.cljs$core$IFn$_invoke$arity$variadic = (function (ref,value,p__13909){
var vec__13910 = p__13909;
var key = cljs.core.nth.call(null,vec__13910,(0),null);
var value__$1 = ((typeof value === 'number')?value:value);
if(cljs.core.truth_(key)){
return ref.equalTo(value__$1,cljs.core.name.call(null,key));
} else {
return ref.equalTo(value__$1);
}
});

matchbox.core.equal_to.cljs$lang$maxFixedArity = (2);

matchbox.core.equal_to.cljs$lang$applyTo = (function (seq13906){
var G__13907 = cljs.core.first.call(null,seq13906);
var seq13906__$1 = cljs.core.next.call(null,seq13906);
var G__13908 = cljs.core.first.call(null,seq13906__$1);
var seq13906__$2 = cljs.core.next.call(null,seq13906__$1);
return matchbox.core.equal_to.cljs$core$IFn$_invoke$arity$variadic(G__13907,G__13908,seq13906__$2);
});
/**
 * Limit scope to the first `limit` items
 */
matchbox.core.take = (function matchbox$core$take(ref,limit){
return ref.limitToFirst(limit);
});
/**
 * Limit scope to the last `limit` items
 */
matchbox.core.take_last = (function matchbox$core$take_last(ref,limit){
return ref.limitToLast(limit);
});
if(typeof matchbox.core.connected !== 'undefined'){
} else {
matchbox.core.connected = cljs.core.atom.call(null,true);
}
matchbox.core.disconnect_BANG_ = (function matchbox$core$disconnect_BANG_(){
Firebase.goOffline();

return cljs.core.reset_BANG_.call(null,matchbox.core.connected,false);
});
matchbox.core.reconnect_BANG_ = (function matchbox$core$reconnect_BANG_(){
Firebase.goOnline();

return cljs.core.reset_BANG_.call(null,matchbox.core.connected,true);
});
/**
 * Returns boolean around whether client is set to synchronise with server.
 * Says nothing about actual connectivity.
 */
matchbox.core.connected_QMARK_ = (function matchbox$core$connected_QMARK_(){
return cljs.core.deref.call(null,matchbox.core.connected);
});
/**
 * Return an on
 */
matchbox.core.on_disconnect = (function matchbox$core$on_disconnect(ref){
return ref.onDisconnect();
});
matchbox.core.cancel = (function matchbox$core$cancel(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13918 = arguments.length;
var i__5713__auto___13919 = (0);
while(true){
if((i__5713__auto___13919 < len__5712__auto___13918)){
args__5719__auto__.push((arguments[i__5713__auto___13919]));

var G__13920 = (i__5713__auto___13919 + (1));
i__5713__auto___13919 = G__13920;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return matchbox.core.cancel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

matchbox.core.cancel.cljs$core$IFn$_invoke$arity$variadic = (function (ref_disconnect,p__13916){
var vec__13917 = p__13916;
var cb = cljs.core.nth.call(null,vec__13917,(0),null);
return ref_disconnect.cancel((function (){var or__4654__auto__ = cb;
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return matchbox.core.undefined;
}
})());
});

matchbox.core.cancel.cljs$lang$maxFixedArity = (1);

matchbox.core.cancel.cljs$lang$applyTo = (function (seq13914){
var G__13915 = cljs.core.first.call(null,seq13914);
var seq13914__$1 = cljs.core.next.call(null,seq13914);
return matchbox.core.cancel.cljs$core$IFn$_invoke$arity$variadic(G__13915,seq13914__$1);
});
matchbox.core.build_opts = (function matchbox$core$build_opts(session_only_QMARK_){
if(cljs.core.truth_(session_only_QMARK_)){
return {"remember": "sessionOnly"};
} else {
return matchbox.core.undefined;
}
});
/**
 * Coerce java.util.HashMap and friends to keywordized maps
 */
matchbox.core.ensure_kw_map = (function matchbox$core$ensure_kw_map(data){
return clojure.walk.keywordize_keys.call(null,cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,data));
});
matchbox.core.auth_data__GT_map = (function matchbox$core$auth_data__GT_map(auth_data){
return matchbox.core.hydrate.call(null,auth_data);
});
matchbox.core.wrap_auth_cb = (function matchbox$core$wrap_auth_cb(cb){
if(cljs.core.truth_(cb)){
return (function (err,info){
return cb.call(null,err,matchbox.core.hydrate.call(null,info));
});
} else {
return cljs.core.identity;
}
});
/**
 * create-user creates a user in the Firebase built-in authentication server
 */
matchbox.core.create_user = (function matchbox$core$create_user(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13927 = arguments.length;
var i__5713__auto___13928 = (0);
while(true){
if((i__5713__auto___13928 < len__5712__auto___13927)){
args__5719__auto__.push((arguments[i__5713__auto___13928]));

var G__13929 = (i__5713__auto___13928 + (1));
i__5713__auto___13928 = G__13929;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.core.create_user.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.core.create_user.cljs$core$IFn$_invoke$arity$variadic = (function (ref,email,password,p__13925){
var vec__13926 = p__13925;
var cb = cljs.core.nth.call(null,vec__13926,(0),null);
return ref.createUser({"email": email, "password": password},matchbox.core.wrap_auth_cb.call(null,cb));
});

matchbox.core.create_user.cljs$lang$maxFixedArity = (3);

matchbox.core.create_user.cljs$lang$applyTo = (function (seq13921){
var G__13922 = cljs.core.first.call(null,seq13921);
var seq13921__$1 = cljs.core.next.call(null,seq13921);
var G__13923 = cljs.core.first.call(null,seq13921__$1);
var seq13921__$2 = cljs.core.next.call(null,seq13921__$1);
var G__13924 = cljs.core.first.call(null,seq13921__$2);
var seq13921__$3 = cljs.core.next.call(null,seq13921__$2);
return matchbox.core.create_user.cljs$core$IFn$_invoke$arity$variadic(G__13922,G__13923,G__13924,seq13921__$3);
});
matchbox.core.auth = (function matchbox$core$auth(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13936 = arguments.length;
var i__5713__auto___13937 = (0);
while(true){
if((i__5713__auto___13937 < len__5712__auto___13936)){
args__5719__auto__.push((arguments[i__5713__auto___13937]));

var G__13938 = (i__5713__auto___13937 + (1));
i__5713__auto___13937 = G__13938;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.core.auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.core.auth.cljs$core$IFn$_invoke$arity$variadic = (function (ref,email,password,p__13934){
var vec__13935 = p__13934;
var cb = cljs.core.nth.call(null,vec__13935,(0),null);
var session_only_QMARK_ = cljs.core.nth.call(null,vec__13935,(1),null);
return ref.authWithPassword({"email": email, "password": password},matchbox.core.wrap_auth_cb.call(null,cb),matchbox.core.build_opts.call(null,session_only_QMARK_));
});

matchbox.core.auth.cljs$lang$maxFixedArity = (3);

matchbox.core.auth.cljs$lang$applyTo = (function (seq13930){
var G__13931 = cljs.core.first.call(null,seq13930);
var seq13930__$1 = cljs.core.next.call(null,seq13930);
var G__13932 = cljs.core.first.call(null,seq13930__$1);
var seq13930__$2 = cljs.core.next.call(null,seq13930__$1);
var G__13933 = cljs.core.first.call(null,seq13930__$2);
var seq13930__$3 = cljs.core.next.call(null,seq13930__$2);
return matchbox.core.auth.cljs$core$IFn$_invoke$arity$variadic(G__13931,G__13932,G__13933,seq13930__$3);
});
matchbox.core.auth_anon = (function matchbox$core$auth_anon(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13943 = arguments.length;
var i__5713__auto___13944 = (0);
while(true){
if((i__5713__auto___13944 < len__5712__auto___13943)){
args__5719__auto__.push((arguments[i__5713__auto___13944]));

var G__13945 = (i__5713__auto___13944 + (1));
i__5713__auto___13944 = G__13945;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return matchbox.core.auth_anon.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

matchbox.core.auth_anon.cljs$core$IFn$_invoke$arity$variadic = (function (ref,p__13941){
var vec__13942 = p__13941;
var cb = cljs.core.nth.call(null,vec__13942,(0),null);
var session_only_QMARK_ = cljs.core.nth.call(null,vec__13942,(1),null);
return ref.authAnonymously(matchbox.core.wrap_auth_cb.call(null,cb),matchbox.core.build_opts.call(null,session_only_QMARK_));
});

matchbox.core.auth_anon.cljs$lang$maxFixedArity = (1);

matchbox.core.auth_anon.cljs$lang$applyTo = (function (seq13939){
var G__13940 = cljs.core.first.call(null,seq13939);
var seq13939__$1 = cljs.core.next.call(null,seq13939);
return matchbox.core.auth_anon.cljs$core$IFn$_invoke$arity$variadic(G__13940,seq13939__$1);
});
/**
 * Authenticates a Firebase client using an authentication token or Firebase Secret.
 */
matchbox.core.auth_custom = (function matchbox$core$auth_custom(var_args){
var args13946 = [];
var len__5712__auto___13949 = arguments.length;
var i__5713__auto___13950 = (0);
while(true){
if((i__5713__auto___13950 < len__5712__auto___13949)){
args13946.push((arguments[i__5713__auto___13950]));

var G__13951 = (i__5713__auto___13950 + (1));
i__5713__auto___13950 = G__13951;
continue;
} else {
}
break;
}

var G__13948 = args13946.length;
switch (G__13948) {
case 2:
return matchbox.core.auth_custom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return matchbox.core.auth_custom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return matchbox.core.auth_custom.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args13946.length)].join('')));

}
});

matchbox.core.auth_custom.cljs$core$IFn$_invoke$arity$2 = (function (ref,secret){
return matchbox.core.auth_custom.call(null,ref,secret,null);
});

matchbox.core.auth_custom.cljs$core$IFn$_invoke$arity$3 = (function (ref,secret,cb){
return ref.authWithCustomToken(secret,matchbox.core.wrap_auth_cb.call(null,cb));
});

matchbox.core.auth_custom.cljs$core$IFn$_invoke$arity$4 = (function (ref,secret,cb,session_only_QMARK_){
return ref.authWithCustomToken(secret,matchbox.core.wrap_auth_cb.call(null,cb),matchbox.core.build_opts.call(null,session_only_QMARK_));
});

matchbox.core.auth_custom.cljs$lang$maxFixedArity = 4;
/**
 * Returns a map of uid, provider, token, expires - or nil if there is no session
 */
matchbox.core.auth_info = (function matchbox$core$auth_info(ref){
return matchbox.core.auth_data__GT_map.call(null,ref.getAuth());
});
matchbox.core.unauth = (function matchbox$core$unauth(ref){
return ref.unauth();
});
matchbox.core.deref_in = (function matchbox$core$deref_in(ref,korks,cb){
return matchbox.core.deref.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});
matchbox.core.deref_list_in = (function matchbox$core$deref_list_in(ref,korks,cb){
return matchbox.core.deref_list.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});
matchbox.core.reset_in_BANG_ = (function matchbox$core$reset_in_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13959 = arguments.length;
var i__5713__auto___13960 = (0);
while(true){
if((i__5713__auto___13960 < len__5712__auto___13959)){
args__5719__auto__.push((arguments[i__5713__auto___13960]));

var G__13961 = (i__5713__auto___13960 + (1));
i__5713__auto___13960 = G__13961;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.core.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.core.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,val,p__13957){
var vec__13958 = p__13957;
var cb = cljs.core.nth.call(null,vec__13958,(0),null);
return matchbox.core.reset_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),val,cb);
});

matchbox.core.reset_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.reset_in_BANG_.cljs$lang$applyTo = (function (seq13953){
var G__13954 = cljs.core.first.call(null,seq13953);
var seq13953__$1 = cljs.core.next.call(null,seq13953);
var G__13955 = cljs.core.first.call(null,seq13953__$1);
var seq13953__$2 = cljs.core.next.call(null,seq13953__$1);
var G__13956 = cljs.core.first.call(null,seq13953__$2);
var seq13953__$3 = cljs.core.next.call(null,seq13953__$2);
return matchbox.core.reset_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13954,G__13955,G__13956,seq13953__$3);
});
matchbox.core.reset_with_priority_in_BANG_ = (function matchbox$core$reset_with_priority_in_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13969 = arguments.length;
var i__5713__auto___13970 = (0);
while(true){
if((i__5713__auto___13970 < len__5712__auto___13969)){
args__5719__auto__.push((arguments[i__5713__auto___13970]));

var G__13971 = (i__5713__auto___13970 + (1));
i__5713__auto___13970 = G__13971;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((4) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((4)),(0))):null);
return matchbox.core.reset_with_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5720__auto__);
});

matchbox.core.reset_with_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,val,priority,p__13967){
var vec__13968 = p__13967;
var cb = cljs.core.nth.call(null,vec__13968,(0),null);
return matchbox.core.reset_with_priority_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),val,priority,cb);
});

matchbox.core.reset_with_priority_in_BANG_.cljs$lang$maxFixedArity = (4);

matchbox.core.reset_with_priority_in_BANG_.cljs$lang$applyTo = (function (seq13962){
var G__13963 = cljs.core.first.call(null,seq13962);
var seq13962__$1 = cljs.core.next.call(null,seq13962);
var G__13964 = cljs.core.first.call(null,seq13962__$1);
var seq13962__$2 = cljs.core.next.call(null,seq13962__$1);
var G__13965 = cljs.core.first.call(null,seq13962__$2);
var seq13962__$3 = cljs.core.next.call(null,seq13962__$2);
var G__13966 = cljs.core.first.call(null,seq13962__$3);
var seq13962__$4 = cljs.core.next.call(null,seq13962__$3);
return matchbox.core.reset_with_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13963,G__13964,G__13965,G__13966,seq13962__$4);
});
matchbox.core.merge_in_BANG_ = (function matchbox$core$merge_in_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13978 = arguments.length;
var i__5713__auto___13979 = (0);
while(true){
if((i__5713__auto___13979 < len__5712__auto___13978)){
args__5719__auto__.push((arguments[i__5713__auto___13979]));

var G__13980 = (i__5713__auto___13979 + (1));
i__5713__auto___13979 = G__13980;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.core.merge_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.core.merge_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,val,p__13976){
var vec__13977 = p__13976;
var cb = cljs.core.nth.call(null,vec__13977,(0),null);
return matchbox.core.merge_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),val,cb);
});

matchbox.core.merge_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.merge_in_BANG_.cljs$lang$applyTo = (function (seq13972){
var G__13973 = cljs.core.first.call(null,seq13972);
var seq13972__$1 = cljs.core.next.call(null,seq13972);
var G__13974 = cljs.core.first.call(null,seq13972__$1);
var seq13972__$2 = cljs.core.next.call(null,seq13972__$1);
var G__13975 = cljs.core.first.call(null,seq13972__$2);
var seq13972__$3 = cljs.core.next.call(null,seq13972__$2);
return matchbox.core.merge_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13973,G__13974,G__13975,seq13972__$3);
});
matchbox.core.conj_in_BANG_ = (function matchbox$core$conj_in_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13987 = arguments.length;
var i__5713__auto___13988 = (0);
while(true){
if((i__5713__auto___13988 < len__5712__auto___13987)){
args__5719__auto__.push((arguments[i__5713__auto___13988]));

var G__13989 = (i__5713__auto___13988 + (1));
i__5713__auto___13988 = G__13989;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.core.conj_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.core.conj_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,val,p__13985){
var vec__13986 = p__13985;
var cb = cljs.core.nth.call(null,vec__13986,(0),null);
return matchbox.core.conj_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),val,cb);
});

matchbox.core.conj_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.conj_in_BANG_.cljs$lang$applyTo = (function (seq13981){
var G__13982 = cljs.core.first.call(null,seq13981);
var seq13981__$1 = cljs.core.next.call(null,seq13981);
var G__13983 = cljs.core.first.call(null,seq13981__$1);
var seq13981__$2 = cljs.core.next.call(null,seq13981__$1);
var G__13984 = cljs.core.first.call(null,seq13981__$2);
var seq13981__$3 = cljs.core.next.call(null,seq13981__$2);
return matchbox.core.conj_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13982,G__13983,G__13984,seq13981__$3);
});
matchbox.core.swap_in_BANG_ = (function matchbox$core$swap_in_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13994 = arguments.length;
var i__5713__auto___13995 = (0);
while(true){
if((i__5713__auto___13995 < len__5712__auto___13994)){
args__5719__auto__.push((arguments[i__5713__auto___13995]));

var G__13996 = (i__5713__auto___13995 + (1));
i__5713__auto___13995 = G__13996;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.core.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.core.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,f,args){
return cljs.core.apply.call(null,matchbox.core.swap_BANG_,matchbox.core.get_in.call(null,ref,korks),f,args);
});

matchbox.core.swap_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.swap_in_BANG_.cljs$lang$applyTo = (function (seq13990){
var G__13991 = cljs.core.first.call(null,seq13990);
var seq13990__$1 = cljs.core.next.call(null,seq13990);
var G__13992 = cljs.core.first.call(null,seq13990__$1);
var seq13990__$2 = cljs.core.next.call(null,seq13990__$1);
var G__13993 = cljs.core.first.call(null,seq13990__$2);
var seq13990__$3 = cljs.core.next.call(null,seq13990__$2);
return matchbox.core.swap_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13991,G__13992,G__13993,seq13990__$3);
});
matchbox.core.dissoc_in_BANG_ = (function matchbox$core$dissoc_in_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___14002 = arguments.length;
var i__5713__auto___14003 = (0);
while(true){
if((i__5713__auto___14003 < len__5712__auto___14002)){
args__5719__auto__.push((arguments[i__5713__auto___14003]));

var G__14004 = (i__5713__auto___14003 + (1));
i__5713__auto___14003 = G__14004;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return matchbox.core.dissoc_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

matchbox.core.dissoc_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,p__14000){
var vec__14001 = p__14000;
var cb = cljs.core.nth.call(null,vec__14001,(0),null);
return matchbox.core.dissoc_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});

matchbox.core.dissoc_in_BANG_.cljs$lang$maxFixedArity = (2);

matchbox.core.dissoc_in_BANG_.cljs$lang$applyTo = (function (seq13997){
var G__13998 = cljs.core.first.call(null,seq13997);
var seq13997__$1 = cljs.core.next.call(null,seq13997);
var G__13999 = cljs.core.first.call(null,seq13997__$1);
var seq13997__$2 = cljs.core.next.call(null,seq13997__$1);
return matchbox.core.dissoc_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__13998,G__13999,seq13997__$2);
});
matchbox.core.remove_in_BANG_ = matchbox.core.dissoc_in_BANG_;
matchbox.core.set_priority_in_BANG_ = (function matchbox$core$set_priority_in_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___14011 = arguments.length;
var i__5713__auto___14012 = (0);
while(true){
if((i__5713__auto___14012 < len__5712__auto___14011)){
args__5719__auto__.push((arguments[i__5713__auto___14012]));

var G__14013 = (i__5713__auto___14012 + (1));
i__5713__auto___14012 = G__14013;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.core.set_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.core.set_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ref,korks,priority,p__14009){
var vec__14010 = p__14009;
var cb = cljs.core.nth.call(null,vec__14010,(0),null);
return matchbox.core.set_priority_BANG_.call(null,matchbox.core.get_in.call(null,ref,korks),priority,cb);
});

matchbox.core.set_priority_in_BANG_.cljs$lang$maxFixedArity = (3);

matchbox.core.set_priority_in_BANG_.cljs$lang$applyTo = (function (seq14005){
var G__14006 = cljs.core.first.call(null,seq14005);
var seq14005__$1 = cljs.core.next.call(null,seq14005);
var G__14007 = cljs.core.first.call(null,seq14005__$1);
var seq14005__$2 = cljs.core.next.call(null,seq14005__$1);
var G__14008 = cljs.core.first.call(null,seq14005__$2);
var seq14005__$3 = cljs.core.next.call(null,seq14005__$2);
return matchbox.core.set_priority_in_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14006,G__14007,G__14008,seq14005__$3);
});
matchbox.core.__listen_to = (function matchbox$core$__listen_to(ref,type,cb,render_fn){
var type__$1 = matchbox.utils.kebab__GT_underscore.call(null,type);
var listener = cljs.core.comp.call(null,cb,render_fn);
ref.on(type__$1,listener);

return ((function (listener,type__$1){
return (function (){
return ref.off(type__$1,listener);
});
;})(listener,type__$1))
});
matchbox.core._listen_to = (function matchbox$core$_listen_to(var_args){
var args__5719__auto__ = [];
var len__5712__auto___14020 = arguments.length;
var i__5713__auto___14021 = (0);
while(true){
if((i__5713__auto___14021 < len__5712__auto___14020)){
args__5719__auto__.push((arguments[i__5713__auto___14021]));

var G__14022 = (i__5713__auto___14021 + (1));
i__5713__auto___14021 = G__14022;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return matchbox.core._listen_to.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

matchbox.core._listen_to.cljs$core$IFn$_invoke$arity$variadic = (function (ref,type,cb,p__14018){
var vec__14019 = p__14018;
var render_fn = cljs.core.nth.call(null,vec__14019,(0),null);
var render_fn__$1 = (function (){var or__4654__auto__ = render_fn;
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return matchbox.core.wrap_snapshot;
}
})();
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.PersistentHashSet.fromArray([type], true),matchbox.core.all_events))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("Unknown type: "),cljs.core.str(type)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"some","some",-310548046,null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"type","type",-1480165421,null),null], null), null),new cljs.core.Symbol(null,"all-events","all-events",804885970,null))))].join('')));
}

var unsub_BANG_ = matchbox.core.__listen_to.call(null,ref,type,cb,render_fn__$1);
matchbox.registry.register_listener.call(null,ref,type,unsub_BANG_);

return unsub_BANG_;
});

matchbox.core._listen_to.cljs$lang$maxFixedArity = (3);

matchbox.core._listen_to.cljs$lang$applyTo = (function (seq14014){
var G__14015 = cljs.core.first.call(null,seq14014);
var seq14014__$1 = cljs.core.next.call(null,seq14014);
var G__14016 = cljs.core.first.call(null,seq14014__$1);
var seq14014__$2 = cljs.core.next.call(null,seq14014__$1);
var G__14017 = cljs.core.first.call(null,seq14014__$2);
var seq14014__$3 = cljs.core.next.call(null,seq14014__$2);
return matchbox.core._listen_to.cljs$core$IFn$_invoke$arity$variadic(G__14015,G__14016,G__14017,seq14014__$3);
});
matchbox.core._listen_children = (function matchbox$core$_listen_children(ref,cb){
var cbs = cljs.core.map.call(null,(function (p1__14024_SHARP_){
return cljs.core.comp.call(null,cb,p1__14024_SHARP_);
}),cljs.core.map.call(null,(function (type){
return (function (p1__14023_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[type,p1__14023_SHARP_],null));
});
}),matchbox.core.child_events));
var unsubs = cljs.core.doall.call(null,cljs.core.map.call(null,matchbox.core._listen_to,cljs.core.repeat.call(null,ref),matchbox.core.child_events,cbs));
return ((function (cbs,unsubs){
return (function (){
var seq__14029 = cljs.core.seq.call(null,unsubs);
var chunk__14030 = null;
var count__14031 = (0);
var i__14032 = (0);
while(true){
if((i__14032 < count__14031)){
var unsub_BANG_ = cljs.core._nth.call(null,chunk__14030,i__14032);
unsub_BANG_.call(null);

var G__14033 = seq__14029;
var G__14034 = chunk__14030;
var G__14035 = count__14031;
var G__14036 = (i__14032 + (1));
seq__14029 = G__14033;
chunk__14030 = G__14034;
count__14031 = G__14035;
i__14032 = G__14036;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14029);
if(temp__4425__auto__){
var seq__14029__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14029__$1)){
var c__5457__auto__ = cljs.core.chunk_first.call(null,seq__14029__$1);
var G__14037 = cljs.core.chunk_rest.call(null,seq__14029__$1);
var G__14038 = c__5457__auto__;
var G__14039 = cljs.core.count.call(null,c__5457__auto__);
var G__14040 = (0);
seq__14029 = G__14037;
chunk__14030 = G__14038;
count__14031 = G__14039;
i__14032 = G__14040;
continue;
} else {
var unsub_BANG_ = cljs.core.first.call(null,seq__14029__$1);
unsub_BANG_.call(null);

var G__14041 = cljs.core.next.call(null,seq__14029__$1);
var G__14042 = null;
var G__14043 = (0);
var G__14044 = (0);
seq__14029 = G__14041;
chunk__14030 = G__14042;
count__14031 = G__14043;
i__14032 = G__14044;
continue;
}
} else {
return null;
}
}
break;
}
});
;})(cbs,unsubs))
});
/**
 * Subscribe to notifications of given type
 * Callback receives [<key> <value>] as only argument
 * Returns an unsubscribe function
 */
matchbox.core.listen_to = (function matchbox$core$listen_to(var_args){
var args14045 = [];
var len__5712__auto___14048 = arguments.length;
var i__5713__auto___14049 = (0);
while(true){
if((i__5713__auto___14049 < len__5712__auto___14048)){
args14045.push((arguments[i__5713__auto___14049]));

var G__14050 = (i__5713__auto___14049 + (1));
i__5713__auto___14049 = G__14050;
continue;
} else {
}
break;
}

var G__14047 = args14045.length;
switch (G__14047) {
case 3:
return matchbox.core.listen_to.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return matchbox.core.listen_to.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14045.length)].join('')));

}
});

matchbox.core.listen_to.cljs$core$IFn$_invoke$arity$3 = (function (ref,type,cb){
return matchbox.core._listen_to.call(null,ref,type,cb);
});

matchbox.core.listen_to.cljs$core$IFn$_invoke$arity$4 = (function (ref,korks,type,cb){
return matchbox.core._listen_to.call(null,matchbox.core.get_in.call(null,ref,korks),type,cb);
});

matchbox.core.listen_to.cljs$lang$maxFixedArity = 4;
/**
 * Subscribe to updates containing full vector or children
 */
matchbox.core.listen_list = (function matchbox$core$listen_list(var_args){
var args14052 = [];
var len__5712__auto___14055 = arguments.length;
var i__5713__auto___14056 = (0);
while(true){
if((i__5713__auto___14056 < len__5712__auto___14055)){
args14052.push((arguments[i__5713__auto___14056]));

var G__14057 = (i__5713__auto___14056 + (1));
i__5713__auto___14056 = G__14057;
continue;
} else {
}
break;
}

var G__14054 = args14052.length;
switch (G__14054) {
case 2:
return matchbox.core.listen_list.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return matchbox.core.listen_list.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14052.length)].join('')));

}
});

matchbox.core.listen_list.cljs$core$IFn$_invoke$arity$2 = (function (ref,cb){
return matchbox.core._listen_to.call(null,ref,new cljs.core.Keyword(null,"value","value",305978217),cb,matchbox.core.get_children);
});

matchbox.core.listen_list.cljs$core$IFn$_invoke$arity$3 = (function (ref,korks,cb){
return matchbox.core.listen_list.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});

matchbox.core.listen_list.cljs$lang$maxFixedArity = 3;
/**
 * Subscribe to all children notifications on a reference.
 * Callback receives [:event-type [<key> <value>]] as only argument
 * Returns an unsubscribe function
 */
matchbox.core.listen_children = (function matchbox$core$listen_children(var_args){
var args14059 = [];
var len__5712__auto___14062 = arguments.length;
var i__5713__auto___14063 = (0);
while(true){
if((i__5713__auto___14063 < len__5712__auto___14062)){
args14059.push((arguments[i__5713__auto___14063]));

var G__14064 = (i__5713__auto___14063 + (1));
i__5713__auto___14063 = G__14064;
continue;
} else {
}
break;
}

var G__14061 = args14059.length;
switch (G__14061) {
case 2:
return matchbox.core.listen_children.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return matchbox.core.listen_children.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14059.length)].join('')));

}
});

matchbox.core.listen_children.cljs$core$IFn$_invoke$arity$2 = (function (ref,cb){
return matchbox.core._listen_children.call(null,ref,cb);
});

matchbox.core.listen_children.cljs$core$IFn$_invoke$arity$3 = (function (ref,korks,cb){
return matchbox.core._listen_children.call(null,matchbox.core.get_in.call(null,ref,korks),cb);
});

matchbox.core.listen_children.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=core.js.map