// Compiled by ClojureScript 1.7.122 {}
goog.provide('re_frame.utils');
goog.require('cljs.core');
goog.require('clojure.set');
re_frame.utils.default_loggers = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"log","log",-1595516004),(function (p1__13252_SHARP_){
return console.log(p1__13252_SHARP_);
}),new cljs.core.Keyword(null,"warn","warn",-436710552),(function (p1__13253_SHARP_){
return console.warn(p1__13253_SHARP_);
}),new cljs.core.Keyword(null,"error","error",-978969032),(function (p1__13254_SHARP_){
return console.error(p1__13254_SHARP_);
}),new cljs.core.Keyword(null,"group","group",582596132),(function (p1__13255_SHARP_){
if(cljs.core.truth_(console.group())){
return console.group(p1__13255_SHARP_);
} else {
return console.log(p1__13255_SHARP_);
}
}),new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382),(function (){
if(cljs.core.truth_(console.groupEnd())){
return console.groupEnd();
} else {
return null;
}
})], null);
re_frame.utils.loggers = cljs.core.atom.call(null,re_frame.utils.default_loggers);
/**
 * Change the set (subset?) of logging functions used by re-frame.
 *   'new-loggers' should be a map which looks like default-loggers
 */
re_frame.utils.set_loggers_BANG_ = (function re_frame$utils$set_loggers_BANG_(new_loggers){
if(cljs.core.empty_QMARK_.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.keys.call(null,new_loggers)),cljs.core.set.call(null,cljs.core.keys.call(null,re_frame.utils.default_loggers))))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("Unknown keys in new-loggers"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),cljs.core.list(new cljs.core.Symbol(null,"difference","difference",-738334373,null),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"new-loggers","new-loggers",-1268568509,null))),cljs.core.list(new cljs.core.Symbol(null,"set","set",1945134081,null),cljs.core.list(new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"default-loggers","default-loggers",387733219,null)))))))].join('')));
}

return cljs.core.swap_BANG_.call(null,re_frame.utils.loggers,cljs.core.merge,new_loggers);
});
re_frame.utils.log = (function re_frame$utils$log(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13257 = arguments.length;
var i__5713__auto___13258 = (0);
while(true){
if((i__5713__auto___13258 < len__5712__auto___13257)){
args__5719__auto__.push((arguments[i__5713__auto___13258]));

var G__13259 = (i__5713__auto___13258 + (1));
i__5713__auto___13258 = G__13259;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((0) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((0)),(0))):null);
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5720__auto__);
});

re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"log","log",-1595516004).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.log.cljs$lang$maxFixedArity = (0);

re_frame.utils.log.cljs$lang$applyTo = (function (seq13256){
return re_frame.utils.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13256));
});
re_frame.utils.warn = (function re_frame$utils$warn(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13261 = arguments.length;
var i__5713__auto___13262 = (0);
while(true){
if((i__5713__auto___13262 < len__5712__auto___13261)){
args__5719__auto__.push((arguments[i__5713__auto___13262]));

var G__13263 = (i__5713__auto___13262 + (1));
i__5713__auto___13262 = G__13263;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((0) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((0)),(0))):null);
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(argseq__5720__auto__);
});

re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"warn","warn",-436710552).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.warn.cljs$lang$maxFixedArity = (0);

re_frame.utils.warn.cljs$lang$applyTo = (function (seq13260){
return re_frame.utils.warn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13260));
});
re_frame.utils.group = (function re_frame$utils$group(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13265 = arguments.length;
var i__5713__auto___13266 = (0);
while(true){
if((i__5713__auto___13266 < len__5712__auto___13265)){
args__5719__auto__.push((arguments[i__5713__auto___13266]));

var G__13267 = (i__5713__auto___13266 + (1));
i__5713__auto___13266 = G__13267;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((0) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((0)),(0))):null);
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5720__auto__);
});

re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.group.cljs$lang$maxFixedArity = (0);

re_frame.utils.group.cljs$lang$applyTo = (function (seq13264){
return re_frame.utils.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13264));
});
re_frame.utils.groupEnd = (function re_frame$utils$groupEnd(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13269 = arguments.length;
var i__5713__auto___13270 = (0);
while(true){
if((i__5713__auto___13270 < len__5712__auto___13269)){
args__5719__auto__.push((arguments[i__5713__auto___13270]));

var G__13271 = (i__5713__auto___13270 + (1));
i__5713__auto___13270 = G__13271;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((0) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((0)),(0))):null);
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(argseq__5720__auto__);
});

re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.groupEnd.cljs$lang$maxFixedArity = (0);

re_frame.utils.groupEnd.cljs$lang$applyTo = (function (seq13268){
return re_frame.utils.groupEnd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13268));
});
re_frame.utils.error = (function re_frame$utils$error(var_args){
var args__5719__auto__ = [];
var len__5712__auto___13273 = arguments.length;
var i__5713__auto___13274 = (0);
while(true){
if((i__5713__auto___13274 < len__5712__auto___13273)){
args__5719__auto__.push((arguments[i__5713__auto___13274]));

var G__13275 = (i__5713__auto___13274 + (1));
i__5713__auto___13274 = G__13275;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((0) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((0)),(0))):null);
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(argseq__5720__auto__);
});

re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,re_frame.utils.loggers)).call(null,cljs.core.apply.call(null,cljs.core.str,args));
});

re_frame.utils.error.cljs$lang$maxFixedArity = (0);

re_frame.utils.error.cljs$lang$applyTo = (function (seq13272){
return re_frame.utils.error.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq13272));
});
re_frame.utils.first_in_vector = (function re_frame$utils$first_in_vector(v){
if(cljs.core.vector_QMARK_.call(null,v)){
return cljs.core.first.call(null,v);
} else {
return re_frame.utils.error.call(null,"re-frame: expected a vector event, but got: ",v);
}
});

//# sourceMappingURL=utils.js.map