// Compiled by ClojureScript 1.7.122 {}
goog.provide('matchbox.utils');
goog.require('cljs.core');
goog.require('clojure.string');
matchbox.utils.kebab__GT_underscore = (function matchbox$utils$kebab__GT_underscore(keyword){
return clojure.string.replace.call(null,cljs.core.name.call(null,keyword),"-","_");
});
matchbox.utils.underscore__GT_kebab = (function matchbox$utils$underscore__GT_kebab(string){
return cljs.core.keyword.call(null,clojure.string.replace.call(null,string,"_","-"));
});
matchbox.utils.korks__GT_path = (function matchbox$utils$korks__GT_path(korks){
if(cljs.core.sequential_QMARK_.call(null,korks)){
return clojure.string.join.call(null,"/",cljs.core.map.call(null,cljs.core.name,korks));
} else {
if(cljs.core.truth_(korks)){
return cljs.core.name.call(null,korks);
} else {
return null;
}
}
});
matchbox.utils.no_op = (function matchbox$utils$no_op(var_args){
var args__5719__auto__ = [];
var len__5712__auto___14105 = arguments.length;
var i__5713__auto___14106 = (0);
while(true){
if((i__5713__auto___14106 < len__5712__auto___14105)){
args__5719__auto__.push((arguments[i__5713__auto___14106]));

var G__14107 = (i__5713__auto___14106 + (1));
i__5713__auto___14106 = G__14107;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((0) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((0)),(0))):null);
return matchbox.utils.no_op.cljs$core$IFn$_invoke$arity$variadic(argseq__5720__auto__);
});

matchbox.utils.no_op.cljs$core$IFn$_invoke$arity$variadic = (function (_){
return null;
});

matchbox.utils.no_op.cljs$lang$maxFixedArity = (0);

matchbox.utils.no_op.cljs$lang$applyTo = (function (seq14104){
return matchbox.utils.no_op.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14104));
});
matchbox.utils.extract_cb = (function matchbox$utils$extract_cb(args){
if(((cljs.core.count.call(null,args) >= (2))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,cljs.core.take_last.call(null,(2),args)),new cljs.core.Keyword(null,"callback","callback",-705136228)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last.call(null,args),cljs.core.drop_last.call(null,(2),args)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,args], null);
}
});

//# sourceMappingURL=utils.js.map