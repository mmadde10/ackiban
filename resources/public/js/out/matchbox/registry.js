// Compiled by ClojureScript 1.7.122 {}
goog.provide('matchbox.registry');
goog.require('cljs.core');
goog.require('clojure.walk');
if(typeof matchbox.registry.unsubs !== 'undefined'){
} else {
matchbox.registry.unsubs = cljs.core.atom.call(null,null);
}
if(typeof matchbox.registry.unsubs_flat !== 'undefined'){
} else {
matchbox.registry.unsubs_flat = cljs.core.atom.call(null,null);
}
matchbox.registry.register_listener = (function matchbox$registry$register_listener(ref,type,unsub_BANG_){
cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(ref)].join(''),type], null),(function (p1__14068_SHARP_){
return cljs.core.set.call(null,cljs.core.conj.call(null,p1__14068_SHARP_,unsub_BANG_));
}));

return cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs_flat,cljs.core.assoc,unsub_BANG_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str(ref)].join(''),type], null));
});
matchbox.registry.flatten_vals = (function matchbox$registry$flatten_vals(xss){
if(!(cljs.core.map_QMARK_.call(null,xss))){
return xss;
} else {
var temp__4423__auto__ = cljs.core.seq.call(null,cljs.core.map.call(null,matchbox$registry$flatten_vals,cljs.core.vals.call(null,xss)));
if(temp__4423__auto__){
var xs = temp__4423__auto__;
return cljs.core.reduce.call(null,cljs.core.into,xs);
} else {
return null;
}
}
});
matchbox.registry.disable_all_BANG_ = (function matchbox$registry$disable_all_BANG_(fs){
cljs.core.apply.call(null,cljs.core.swap_BANG_,matchbox.registry.unsubs_flat,cljs.core.dissoc,fs);

var seq__14073 = cljs.core.seq.call(null,fs);
var chunk__14074 = null;
var count__14075 = (0);
var i__14076 = (0);
while(true){
if((i__14076 < count__14075)){
var f = cljs.core._nth.call(null,chunk__14074,i__14076);
f.call(null);

var G__14077 = seq__14073;
var G__14078 = chunk__14074;
var G__14079 = count__14075;
var G__14080 = (i__14076 + (1));
seq__14073 = G__14077;
chunk__14074 = G__14078;
count__14075 = G__14079;
i__14076 = G__14080;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__14073);
if(temp__4425__auto__){
var seq__14073__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__14073__$1)){
var c__5457__auto__ = cljs.core.chunk_first.call(null,seq__14073__$1);
var G__14081 = cljs.core.chunk_rest.call(null,seq__14073__$1);
var G__14082 = c__5457__auto__;
var G__14083 = cljs.core.count.call(null,c__5457__auto__);
var G__14084 = (0);
seq__14073 = G__14081;
chunk__14074 = G__14082;
count__14075 = G__14083;
i__14076 = G__14084;
continue;
} else {
var f = cljs.core.first.call(null,seq__14073__$1);
f.call(null);

var G__14085 = cljs.core.next.call(null,seq__14073__$1);
var G__14086 = null;
var G__14087 = (0);
var G__14088 = (0);
seq__14073 = G__14085;
chunk__14074 = G__14086;
count__14075 = G__14087;
i__14076 = G__14088;
continue;
}
} else {
return null;
}
}
break;
}
});
matchbox.registry._cleanup_BANG_ = (function matchbox$registry$_cleanup_BANG_(data){
return clojure.walk.postwalk.call(null,(function (x){
if((cljs.core.coll_QMARK_.call(null,x)) && (cljs.core.empty_QMARK_.call(null,x))){
return null;
} else {
if(cljs.core.map_QMARK_.call(null,x)){
var temp__4423__auto__ = cljs.core.seq.call(null,cljs.core.filter.call(null,cljs.core.second,x));
if(temp__4423__auto__){
var remains = temp__4423__auto__;
return cljs.core.into.call(null,cljs.core.empty.call(null,x),remains);
} else {
return null;
}
} else {
return x;
}
}
}),data);
});
/**
 * Remove empty branches in `unsubs`
 */
matchbox.registry.cleanup_BANG_ = (function matchbox$registry$cleanup_BANG_(){
return cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,matchbox.registry._cleanup_BANG_);
});
matchbox.registry.disable_listener_BANG_ = (function matchbox$registry$disable_listener_BANG_(unsub_BANG_){
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,matchbox.registry.unsubs_flat),unsub_BANG_);
if(cljs.core.truth_(temp__4425__auto__)){
var vec__14091 = temp__4425__auto__;
var ref = cljs.core.nth.call(null,vec__14091,(0),null);
var type = cljs.core.nth.call(null,vec__14091,(1),null);
unsub_BANG_.call(null);

cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs_flat,cljs.core.dissoc,unsub_BANG_);

cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref,type], null),((function (vec__14091,ref,type,temp__4425__auto__){
return (function (p1__14089_SHARP_){
return cljs.core.disj.call(null,p1__14089_SHARP_,unsub_BANG_);
});})(vec__14091,ref,type,temp__4425__auto__))
);

return matchbox.registry.cleanup_BANG_.call(null);
} else {
return null;
}
});
/**
 * Remove all known listeners within appropriate scope.
 * 
 *   By known listeners, we mean listeners that were added with Matchbox.
 * 
 *   The scope is determined by the args:
 * 
 *   0-arity: remove all listeners
 *   1-arity: remove all listeners on a given `ref`
 *   2-arity: remove all listeners of `type` on a given `ref`
 * 
 *   For removing a single listener, see `disable-listener!`
 */
matchbox.registry.disable_listeners_BANG_ = (function matchbox$registry$disable_listeners_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___14097 = arguments.length;
var i__5713__auto___14098 = (0);
while(true){
if((i__5713__auto___14098 < len__5712__auto___14097)){
args__5719__auto__.push((arguments[i__5713__auto___14098]));

var G__14099 = (i__5713__auto___14098 + (1));
i__5713__auto___14098 = G__14099;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((0) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((0)),(0))):null);
return matchbox.registry.disable_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__5720__auto__);
});

matchbox.registry.disable_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__14094){
var vec__14095 = p__14094;
var ref = cljs.core.nth.call(null,vec__14095,(0),null);
var type = cljs.core.nth.call(null,vec__14095,(1),null);
var path = vec__14095;
var ref__$1 = (cljs.core.truth_(ref)?[cljs.core.str(ref)].join(''):null);
var G__14096_14100 = cljs.core.count.call(null,path);
switch (G__14096_14100) {
case (0):
matchbox.registry.disable_all_BANG_.call(null,matchbox.registry.flatten_vals.call(null,cljs.core.deref.call(null,matchbox.registry.unsubs)));

cljs.core.reset_BANG_.call(null,matchbox.registry.unsubs,cljs.core.PersistentArrayMap.EMPTY);

break;
case (1):
matchbox.registry.disable_all_BANG_.call(null,matchbox.registry.flatten_vals.call(null,cljs.core.get.call(null,cljs.core.deref.call(null,matchbox.registry.unsubs),ref__$1)));

cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,cljs.core.dissoc,ref__$1);

break;
case (2):
matchbox.registry.disable_all_BANG_.call(null,matchbox.registry.flatten_vals.call(null,cljs.core.get_in.call(null,cljs.core.deref.call(null,matchbox.registry.unsubs),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1,type], null))));

cljs.core.swap_BANG_.call(null,matchbox.registry.unsubs,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ref__$1], null),((function (G__14096_14100,ref__$1,vec__14095,ref,type,path){
return (function (p1__14092_SHARP_){
return cljs.core.dissoc.call(null,p1__14092_SHARP_,type);
});})(G__14096_14100,ref__$1,vec__14095,ref,type,path))
);

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(cljs.core.count.call(null,path))].join('')));

}

return matchbox.registry.cleanup_BANG_.call(null);
});

matchbox.registry.disable_listeners_BANG_.cljs$lang$maxFixedArity = (0);

matchbox.registry.disable_listeners_BANG_.cljs$lang$applyTo = (function (seq14093){
return matchbox.registry.disable_listeners_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14093));
});

//# sourceMappingURL=registry.js.map