// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async14148 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14148 = (function (fn_handler,f,meta14149){
this.fn_handler = fn_handler;
this.f = f;
this.meta14149 = meta14149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14150,meta14149__$1){
var self__ = this;
var _14150__$1 = this;
return (new cljs.core.async.t_cljs$core$async14148(self__.fn_handler,self__.f,meta14149__$1));
});

cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14150){
var self__ = this;
var _14150__$1 = this;
return self__.meta14149;
});

cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async14148.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async14148.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta14149","meta14149",1388850037,null)], null);
});

cljs.core.async.t_cljs$core$async14148.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14148.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14148";

cljs.core.async.t_cljs$core$async14148.cljs$lang$ctorPrWriter = (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async14148");
});

cljs.core.async.__GT_t_cljs$core$async14148 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async14148(fn_handler__$1,f__$1,meta14149){
return (new cljs.core.async.t_cljs$core$async14148(fn_handler__$1,f__$1,meta14149));
});

}

return (new cljs.core.async.t_cljs$core$async14148(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args14153 = [];
var len__5712__auto___14156 = arguments.length;
var i__5713__auto___14157 = (0);
while(true){
if((i__5713__auto___14157 < len__5712__auto___14156)){
args14153.push((arguments[i__5713__auto___14157]));

var G__14158 = (i__5713__auto___14157 + (1));
i__5713__auto___14157 = G__14158;
continue;
} else {
}
break;
}

var G__14155 = args14153.length;
switch (G__14155) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14153.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args14160 = [];
var len__5712__auto___14163 = arguments.length;
var i__5713__auto___14164 = (0);
while(true){
if((i__5713__auto___14164 < len__5712__auto___14163)){
args14160.push((arguments[i__5713__auto___14164]));

var G__14165 = (i__5713__auto___14164 + (1));
i__5713__auto___14164 = G__14165;
continue;
} else {
}
break;
}

var G__14162 = args14160.length;
switch (G__14162) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14160.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_14167 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_14167);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_14167,ret){
return (function (){
return fn1.call(null,val_14167);
});})(val_14167,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args14168 = [];
var len__5712__auto___14171 = arguments.length;
var i__5713__auto___14172 = (0);
while(true){
if((i__5713__auto___14172 < len__5712__auto___14171)){
args14168.push((arguments[i__5713__auto___14172]));

var G__14173 = (i__5713__auto___14172 + (1));
i__5713__auto___14172 = G__14173;
continue;
} else {
}
break;
}

var G__14170 = args14168.length;
switch (G__14170) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14168.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5557__auto___14175 = n;
var x_14176 = (0);
while(true){
if((x_14176 < n__5557__auto___14175)){
(a[x_14176] = (0));

var G__14177 = (x_14176 + (1));
x_14176 = G__14177;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__14178 = (i + (1));
i = G__14178;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async14182 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14182 = (function (alt_flag,flag,meta14183){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta14183 = meta14183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14184,meta14183__$1){
var self__ = this;
var _14184__$1 = this;
return (new cljs.core.async.t_cljs$core$async14182(self__.alt_flag,self__.flag,meta14183__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14184){
var self__ = this;
var _14184__$1 = this;
return self__.meta14183;
});})(flag))
;

cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async14182.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async14182.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta14183","meta14183",744735920,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async14182.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14182.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14182";

cljs.core.async.t_cljs$core$async14182.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async14182");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async14182 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async14182(alt_flag__$1,flag__$1,meta14183){
return (new cljs.core.async.t_cljs$core$async14182(alt_flag__$1,flag__$1,meta14183));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async14182(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async14188 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async14188 = (function (alt_handler,flag,cb,meta14189){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta14189 = meta14189;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async14188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14190,meta14189__$1){
var self__ = this;
var _14190__$1 = this;
return (new cljs.core.async.t_cljs$core$async14188(self__.alt_handler,self__.flag,self__.cb,meta14189__$1));
});

cljs.core.async.t_cljs$core$async14188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14190){
var self__ = this;
var _14190__$1 = this;
return self__.meta14189;
});

cljs.core.async.t_cljs$core$async14188.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async14188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async14188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async14188.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta14189","meta14189",739459412,null)], null);
});

cljs.core.async.t_cljs$core$async14188.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async14188.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async14188";

cljs.core.async.t_cljs$core$async14188.cljs$lang$ctorPrWriter = (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async14188");
});

cljs.core.async.__GT_t_cljs$core$async14188 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async14188(alt_handler__$1,flag__$1,cb__$1,meta14189){
return (new cljs.core.async.t_cljs$core$async14188(alt_handler__$1,flag__$1,cb__$1,meta14189));
});

}

return (new cljs.core.async.t_cljs$core$async14188(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14191_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14191_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__14192_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14192_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__4654__auto__ = wport;
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return port;
}
})()], null));
} else {
var G__14193 = (i + (1));
i = G__14193;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4654__auto__ = ret;
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__4642__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__4642__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__4642__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___14199 = arguments.length;
var i__5713__auto___14200 = (0);
while(true){
if((i__5713__auto___14200 < len__5712__auto___14199)){
args__5719__auto__.push((arguments[i__5713__auto___14200]));

var G__14201 = (i__5713__auto___14200 + (1));
i__5713__auto___14200 = G__14201;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((1) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5720__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__14196){
var map__14197 = p__14196;
var map__14197__$1 = ((((!((map__14197 == null)))?((((map__14197.cljs$lang$protocol_mask$partition0$ & (64))) || (map__14197.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__14197):map__14197);
var opts = map__14197__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq14194){
var G__14195 = cljs.core.first.call(null,seq14194);
var seq14194__$1 = cljs.core.next.call(null,seq14194);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__14195,seq14194__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args14202 = [];
var len__5712__auto___14252 = arguments.length;
var i__5713__auto___14253 = (0);
while(true){
if((i__5713__auto___14253 < len__5712__auto___14252)){
args14202.push((arguments[i__5713__auto___14253]));

var G__14254 = (i__5713__auto___14253 + (1));
i__5713__auto___14253 = G__14254;
continue;
} else {
}
break;
}

var G__14204 = args14202.length;
switch (G__14204) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14202.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__7252__auto___14256 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___14256){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___14256){
return (function (state_14228){
var state_val_14229 = (state_14228[(1)]);
if((state_val_14229 === (7))){
var inst_14224 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
var statearr_14230_14257 = state_14228__$1;
(statearr_14230_14257[(2)] = inst_14224);

(statearr_14230_14257[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (1))){
var state_14228__$1 = state_14228;
var statearr_14231_14258 = state_14228__$1;
(statearr_14231_14258[(2)] = null);

(statearr_14231_14258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (4))){
var inst_14207 = (state_14228[(7)]);
var inst_14207__$1 = (state_14228[(2)]);
var inst_14208 = (inst_14207__$1 == null);
var state_14228__$1 = (function (){var statearr_14232 = state_14228;
(statearr_14232[(7)] = inst_14207__$1);

return statearr_14232;
})();
if(cljs.core.truth_(inst_14208)){
var statearr_14233_14259 = state_14228__$1;
(statearr_14233_14259[(1)] = (5));

} else {
var statearr_14234_14260 = state_14228__$1;
(statearr_14234_14260[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (13))){
var state_14228__$1 = state_14228;
var statearr_14235_14261 = state_14228__$1;
(statearr_14235_14261[(2)] = null);

(statearr_14235_14261[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (6))){
var inst_14207 = (state_14228[(7)]);
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14228__$1,(11),to,inst_14207);
} else {
if((state_val_14229 === (3))){
var inst_14226 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14228__$1,inst_14226);
} else {
if((state_val_14229 === (12))){
var state_14228__$1 = state_14228;
var statearr_14236_14262 = state_14228__$1;
(statearr_14236_14262[(2)] = null);

(statearr_14236_14262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (2))){
var state_14228__$1 = state_14228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14228__$1,(4),from);
} else {
if((state_val_14229 === (11))){
var inst_14217 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
if(cljs.core.truth_(inst_14217)){
var statearr_14237_14263 = state_14228__$1;
(statearr_14237_14263[(1)] = (12));

} else {
var statearr_14238_14264 = state_14228__$1;
(statearr_14238_14264[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (9))){
var state_14228__$1 = state_14228;
var statearr_14239_14265 = state_14228__$1;
(statearr_14239_14265[(2)] = null);

(statearr_14239_14265[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (5))){
var state_14228__$1 = state_14228;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14240_14266 = state_14228__$1;
(statearr_14240_14266[(1)] = (8));

} else {
var statearr_14241_14267 = state_14228__$1;
(statearr_14241_14267[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (14))){
var inst_14222 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
var statearr_14242_14268 = state_14228__$1;
(statearr_14242_14268[(2)] = inst_14222);

(statearr_14242_14268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (10))){
var inst_14214 = (state_14228[(2)]);
var state_14228__$1 = state_14228;
var statearr_14243_14269 = state_14228__$1;
(statearr_14243_14269[(2)] = inst_14214);

(statearr_14243_14269[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14229 === (8))){
var inst_14211 = cljs.core.async.close_BANG_.call(null,to);
var state_14228__$1 = state_14228;
var statearr_14244_14270 = state_14228__$1;
(statearr_14244_14270[(2)] = inst_14211);

(statearr_14244_14270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___14256))
;
return ((function (switch__7187__auto__,c__7252__auto___14256){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_14248 = [null,null,null,null,null,null,null,null];
(statearr_14248[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_14248[(1)] = (1));

return statearr_14248;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_14228){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_14228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e14249){if((e14249 instanceof Object)){
var ex__7191__auto__ = e14249;
var statearr_14250_14271 = state_14228;
(statearr_14250_14271[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14272 = state_14228;
state_14228 = G__14272;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_14228){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_14228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___14256))
})();
var state__7254__auto__ = (function (){var statearr_14251 = f__7253__auto__.call(null);
(statearr_14251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___14256);

return statearr_14251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___14256))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__14456){
var vec__14457 = p__14456;
var v = cljs.core.nth.call(null,vec__14457,(0),null);
var p = cljs.core.nth.call(null,vec__14457,(1),null);
var job = vec__14457;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__7252__auto___14639 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___14639,res,vec__14457,v,p,job,jobs,results){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___14639,res,vec__14457,v,p,job,jobs,results){
return (function (state_14462){
var state_val_14463 = (state_14462[(1)]);
if((state_val_14463 === (1))){
var state_14462__$1 = state_14462;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14462__$1,(2),res,v);
} else {
if((state_val_14463 === (2))){
var inst_14459 = (state_14462[(2)]);
var inst_14460 = cljs.core.async.close_BANG_.call(null,res);
var state_14462__$1 = (function (){var statearr_14464 = state_14462;
(statearr_14464[(7)] = inst_14459);

return statearr_14464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14462__$1,inst_14460);
} else {
return null;
}
}
});})(c__7252__auto___14639,res,vec__14457,v,p,job,jobs,results))
;
return ((function (switch__7187__auto__,c__7252__auto___14639,res,vec__14457,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0 = (function (){
var statearr_14468 = [null,null,null,null,null,null,null,null];
(statearr_14468[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__);

(statearr_14468[(1)] = (1));

return statearr_14468;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1 = (function (state_14462){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_14462);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e14469){if((e14469 instanceof Object)){
var ex__7191__auto__ = e14469;
var statearr_14470_14640 = state_14462;
(statearr_14470_14640[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14462);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14469;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14641 = state_14462;
state_14462 = G__14641;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = function(state_14462){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1.call(this,state_14462);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___14639,res,vec__14457,v,p,job,jobs,results))
})();
var state__7254__auto__ = (function (){var statearr_14471 = f__7253__auto__.call(null);
(statearr_14471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___14639);

return statearr_14471;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___14639,res,vec__14457,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__14472){
var vec__14473 = p__14472;
var v = cljs.core.nth.call(null,vec__14473,(0),null);
var p = cljs.core.nth.call(null,vec__14473,(1),null);
var job = vec__14473;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__5557__auto___14642 = n;
var __14643 = (0);
while(true){
if((__14643 < n__5557__auto___14642)){
var G__14474_14644 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__14474_14644) {
case "compute":
var c__7252__auto___14646 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14643,c__7252__auto___14646,G__14474_14644,n__5557__auto___14642,jobs,results,process,async){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (__14643,c__7252__auto___14646,G__14474_14644,n__5557__auto___14642,jobs,results,process,async){
return (function (state_14487){
var state_val_14488 = (state_14487[(1)]);
if((state_val_14488 === (1))){
var state_14487__$1 = state_14487;
var statearr_14489_14647 = state_14487__$1;
(statearr_14489_14647[(2)] = null);

(statearr_14489_14647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14488 === (2))){
var state_14487__$1 = state_14487;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14487__$1,(4),jobs);
} else {
if((state_val_14488 === (3))){
var inst_14485 = (state_14487[(2)]);
var state_14487__$1 = state_14487;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14487__$1,inst_14485);
} else {
if((state_val_14488 === (4))){
var inst_14477 = (state_14487[(2)]);
var inst_14478 = process.call(null,inst_14477);
var state_14487__$1 = state_14487;
if(cljs.core.truth_(inst_14478)){
var statearr_14490_14648 = state_14487__$1;
(statearr_14490_14648[(1)] = (5));

} else {
var statearr_14491_14649 = state_14487__$1;
(statearr_14491_14649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14488 === (5))){
var state_14487__$1 = state_14487;
var statearr_14492_14650 = state_14487__$1;
(statearr_14492_14650[(2)] = null);

(statearr_14492_14650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14488 === (6))){
var state_14487__$1 = state_14487;
var statearr_14493_14651 = state_14487__$1;
(statearr_14493_14651[(2)] = null);

(statearr_14493_14651[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14488 === (7))){
var inst_14483 = (state_14487[(2)]);
var state_14487__$1 = state_14487;
var statearr_14494_14652 = state_14487__$1;
(statearr_14494_14652[(2)] = inst_14483);

(statearr_14494_14652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14643,c__7252__auto___14646,G__14474_14644,n__5557__auto___14642,jobs,results,process,async))
;
return ((function (__14643,switch__7187__auto__,c__7252__auto___14646,G__14474_14644,n__5557__auto___14642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0 = (function (){
var statearr_14498 = [null,null,null,null,null,null,null];
(statearr_14498[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__);

(statearr_14498[(1)] = (1));

return statearr_14498;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1 = (function (state_14487){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_14487);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e14499){if((e14499 instanceof Object)){
var ex__7191__auto__ = e14499;
var statearr_14500_14653 = state_14487;
(statearr_14500_14653[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14487);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14499;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14654 = state_14487;
state_14487 = G__14654;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = function(state_14487){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1.call(this,state_14487);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__;
})()
;})(__14643,switch__7187__auto__,c__7252__auto___14646,G__14474_14644,n__5557__auto___14642,jobs,results,process,async))
})();
var state__7254__auto__ = (function (){var statearr_14501 = f__7253__auto__.call(null);
(statearr_14501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___14646);

return statearr_14501;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(__14643,c__7252__auto___14646,G__14474_14644,n__5557__auto___14642,jobs,results,process,async))
);


break;
case "async":
var c__7252__auto___14655 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__14643,c__7252__auto___14655,G__14474_14644,n__5557__auto___14642,jobs,results,process,async){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (__14643,c__7252__auto___14655,G__14474_14644,n__5557__auto___14642,jobs,results,process,async){
return (function (state_14514){
var state_val_14515 = (state_14514[(1)]);
if((state_val_14515 === (1))){
var state_14514__$1 = state_14514;
var statearr_14516_14656 = state_14514__$1;
(statearr_14516_14656[(2)] = null);

(statearr_14516_14656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (2))){
var state_14514__$1 = state_14514;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14514__$1,(4),jobs);
} else {
if((state_val_14515 === (3))){
var inst_14512 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14514__$1,inst_14512);
} else {
if((state_val_14515 === (4))){
var inst_14504 = (state_14514[(2)]);
var inst_14505 = async.call(null,inst_14504);
var state_14514__$1 = state_14514;
if(cljs.core.truth_(inst_14505)){
var statearr_14517_14657 = state_14514__$1;
(statearr_14517_14657[(1)] = (5));

} else {
var statearr_14518_14658 = state_14514__$1;
(statearr_14518_14658[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (5))){
var state_14514__$1 = state_14514;
var statearr_14519_14659 = state_14514__$1;
(statearr_14519_14659[(2)] = null);

(statearr_14519_14659[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (6))){
var state_14514__$1 = state_14514;
var statearr_14520_14660 = state_14514__$1;
(statearr_14520_14660[(2)] = null);

(statearr_14520_14660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14515 === (7))){
var inst_14510 = (state_14514[(2)]);
var state_14514__$1 = state_14514;
var statearr_14521_14661 = state_14514__$1;
(statearr_14521_14661[(2)] = inst_14510);

(statearr_14521_14661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__14643,c__7252__auto___14655,G__14474_14644,n__5557__auto___14642,jobs,results,process,async))
;
return ((function (__14643,switch__7187__auto__,c__7252__auto___14655,G__14474_14644,n__5557__auto___14642,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0 = (function (){
var statearr_14525 = [null,null,null,null,null,null,null];
(statearr_14525[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__);

(statearr_14525[(1)] = (1));

return statearr_14525;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1 = (function (state_14514){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_14514);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e14526){if((e14526 instanceof Object)){
var ex__7191__auto__ = e14526;
var statearr_14527_14662 = state_14514;
(statearr_14527_14662[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14514);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14663 = state_14514;
state_14514 = G__14663;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = function(state_14514){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1.call(this,state_14514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__;
})()
;})(__14643,switch__7187__auto__,c__7252__auto___14655,G__14474_14644,n__5557__auto___14642,jobs,results,process,async))
})();
var state__7254__auto__ = (function (){var statearr_14528 = f__7253__auto__.call(null);
(statearr_14528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___14655);

return statearr_14528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(__14643,c__7252__auto___14655,G__14474_14644,n__5557__auto___14642,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__14664 = (__14643 + (1));
__14643 = G__14664;
continue;
} else {
}
break;
}

var c__7252__auto___14665 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___14665,jobs,results,process,async){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___14665,jobs,results,process,async){
return (function (state_14550){
var state_val_14551 = (state_14550[(1)]);
if((state_val_14551 === (1))){
var state_14550__$1 = state_14550;
var statearr_14552_14666 = state_14550__$1;
(statearr_14552_14666[(2)] = null);

(statearr_14552_14666[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (2))){
var state_14550__$1 = state_14550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14550__$1,(4),from);
} else {
if((state_val_14551 === (3))){
var inst_14548 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14550__$1,inst_14548);
} else {
if((state_val_14551 === (4))){
var inst_14531 = (state_14550[(7)]);
var inst_14531__$1 = (state_14550[(2)]);
var inst_14532 = (inst_14531__$1 == null);
var state_14550__$1 = (function (){var statearr_14553 = state_14550;
(statearr_14553[(7)] = inst_14531__$1);

return statearr_14553;
})();
if(cljs.core.truth_(inst_14532)){
var statearr_14554_14667 = state_14550__$1;
(statearr_14554_14667[(1)] = (5));

} else {
var statearr_14555_14668 = state_14550__$1;
(statearr_14555_14668[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (5))){
var inst_14534 = cljs.core.async.close_BANG_.call(null,jobs);
var state_14550__$1 = state_14550;
var statearr_14556_14669 = state_14550__$1;
(statearr_14556_14669[(2)] = inst_14534);

(statearr_14556_14669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (6))){
var inst_14531 = (state_14550[(7)]);
var inst_14536 = (state_14550[(8)]);
var inst_14536__$1 = cljs.core.async.chan.call(null,(1));
var inst_14537 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_14538 = [inst_14531,inst_14536__$1];
var inst_14539 = (new cljs.core.PersistentVector(null,2,(5),inst_14537,inst_14538,null));
var state_14550__$1 = (function (){var statearr_14557 = state_14550;
(statearr_14557[(8)] = inst_14536__$1);

return statearr_14557;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14550__$1,(8),jobs,inst_14539);
} else {
if((state_val_14551 === (7))){
var inst_14546 = (state_14550[(2)]);
var state_14550__$1 = state_14550;
var statearr_14558_14670 = state_14550__$1;
(statearr_14558_14670[(2)] = inst_14546);

(statearr_14558_14670[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14551 === (8))){
var inst_14536 = (state_14550[(8)]);
var inst_14541 = (state_14550[(2)]);
var state_14550__$1 = (function (){var statearr_14559 = state_14550;
(statearr_14559[(9)] = inst_14541);

return statearr_14559;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14550__$1,(9),results,inst_14536);
} else {
if((state_val_14551 === (9))){
var inst_14543 = (state_14550[(2)]);
var state_14550__$1 = (function (){var statearr_14560 = state_14550;
(statearr_14560[(10)] = inst_14543);

return statearr_14560;
})();
var statearr_14561_14671 = state_14550__$1;
(statearr_14561_14671[(2)] = null);

(statearr_14561_14671[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___14665,jobs,results,process,async))
;
return ((function (switch__7187__auto__,c__7252__auto___14665,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0 = (function (){
var statearr_14565 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_14565[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__);

(statearr_14565[(1)] = (1));

return statearr_14565;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1 = (function (state_14550){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_14550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e14566){if((e14566 instanceof Object)){
var ex__7191__auto__ = e14566;
var statearr_14567_14672 = state_14550;
(statearr_14567_14672[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14566;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14673 = state_14550;
state_14550 = G__14673;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = function(state_14550){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1.call(this,state_14550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___14665,jobs,results,process,async))
})();
var state__7254__auto__ = (function (){var statearr_14568 = f__7253__auto__.call(null);
(statearr_14568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___14665);

return statearr_14568;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___14665,jobs,results,process,async))
);


var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__,jobs,results,process,async){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__,jobs,results,process,async){
return (function (state_14606){
var state_val_14607 = (state_14606[(1)]);
if((state_val_14607 === (7))){
var inst_14602 = (state_14606[(2)]);
var state_14606__$1 = state_14606;
var statearr_14608_14674 = state_14606__$1;
(statearr_14608_14674[(2)] = inst_14602);

(statearr_14608_14674[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (20))){
var state_14606__$1 = state_14606;
var statearr_14609_14675 = state_14606__$1;
(statearr_14609_14675[(2)] = null);

(statearr_14609_14675[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (1))){
var state_14606__$1 = state_14606;
var statearr_14610_14676 = state_14606__$1;
(statearr_14610_14676[(2)] = null);

(statearr_14610_14676[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (4))){
var inst_14571 = (state_14606[(7)]);
var inst_14571__$1 = (state_14606[(2)]);
var inst_14572 = (inst_14571__$1 == null);
var state_14606__$1 = (function (){var statearr_14611 = state_14606;
(statearr_14611[(7)] = inst_14571__$1);

return statearr_14611;
})();
if(cljs.core.truth_(inst_14572)){
var statearr_14612_14677 = state_14606__$1;
(statearr_14612_14677[(1)] = (5));

} else {
var statearr_14613_14678 = state_14606__$1;
(statearr_14613_14678[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (15))){
var inst_14584 = (state_14606[(8)]);
var state_14606__$1 = state_14606;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14606__$1,(18),to,inst_14584);
} else {
if((state_val_14607 === (21))){
var inst_14597 = (state_14606[(2)]);
var state_14606__$1 = state_14606;
var statearr_14614_14679 = state_14606__$1;
(statearr_14614_14679[(2)] = inst_14597);

(statearr_14614_14679[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (13))){
var inst_14599 = (state_14606[(2)]);
var state_14606__$1 = (function (){var statearr_14615 = state_14606;
(statearr_14615[(9)] = inst_14599);

return statearr_14615;
})();
var statearr_14616_14680 = state_14606__$1;
(statearr_14616_14680[(2)] = null);

(statearr_14616_14680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (6))){
var inst_14571 = (state_14606[(7)]);
var state_14606__$1 = state_14606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14606__$1,(11),inst_14571);
} else {
if((state_val_14607 === (17))){
var inst_14592 = (state_14606[(2)]);
var state_14606__$1 = state_14606;
if(cljs.core.truth_(inst_14592)){
var statearr_14617_14681 = state_14606__$1;
(statearr_14617_14681[(1)] = (19));

} else {
var statearr_14618_14682 = state_14606__$1;
(statearr_14618_14682[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (3))){
var inst_14604 = (state_14606[(2)]);
var state_14606__$1 = state_14606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14606__$1,inst_14604);
} else {
if((state_val_14607 === (12))){
var inst_14581 = (state_14606[(10)]);
var state_14606__$1 = state_14606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14606__$1,(14),inst_14581);
} else {
if((state_val_14607 === (2))){
var state_14606__$1 = state_14606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14606__$1,(4),results);
} else {
if((state_val_14607 === (19))){
var state_14606__$1 = state_14606;
var statearr_14619_14683 = state_14606__$1;
(statearr_14619_14683[(2)] = null);

(statearr_14619_14683[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (11))){
var inst_14581 = (state_14606[(2)]);
var state_14606__$1 = (function (){var statearr_14620 = state_14606;
(statearr_14620[(10)] = inst_14581);

return statearr_14620;
})();
var statearr_14621_14684 = state_14606__$1;
(statearr_14621_14684[(2)] = null);

(statearr_14621_14684[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (9))){
var state_14606__$1 = state_14606;
var statearr_14622_14685 = state_14606__$1;
(statearr_14622_14685[(2)] = null);

(statearr_14622_14685[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (5))){
var state_14606__$1 = state_14606;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14623_14686 = state_14606__$1;
(statearr_14623_14686[(1)] = (8));

} else {
var statearr_14624_14687 = state_14606__$1;
(statearr_14624_14687[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (14))){
var inst_14584 = (state_14606[(8)]);
var inst_14586 = (state_14606[(11)]);
var inst_14584__$1 = (state_14606[(2)]);
var inst_14585 = (inst_14584__$1 == null);
var inst_14586__$1 = cljs.core.not.call(null,inst_14585);
var state_14606__$1 = (function (){var statearr_14625 = state_14606;
(statearr_14625[(8)] = inst_14584__$1);

(statearr_14625[(11)] = inst_14586__$1);

return statearr_14625;
})();
if(inst_14586__$1){
var statearr_14626_14688 = state_14606__$1;
(statearr_14626_14688[(1)] = (15));

} else {
var statearr_14627_14689 = state_14606__$1;
(statearr_14627_14689[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (16))){
var inst_14586 = (state_14606[(11)]);
var state_14606__$1 = state_14606;
var statearr_14628_14690 = state_14606__$1;
(statearr_14628_14690[(2)] = inst_14586);

(statearr_14628_14690[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (10))){
var inst_14578 = (state_14606[(2)]);
var state_14606__$1 = state_14606;
var statearr_14629_14691 = state_14606__$1;
(statearr_14629_14691[(2)] = inst_14578);

(statearr_14629_14691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (18))){
var inst_14589 = (state_14606[(2)]);
var state_14606__$1 = state_14606;
var statearr_14630_14692 = state_14606__$1;
(statearr_14630_14692[(2)] = inst_14589);

(statearr_14630_14692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14607 === (8))){
var inst_14575 = cljs.core.async.close_BANG_.call(null,to);
var state_14606__$1 = state_14606;
var statearr_14631_14693 = state_14606__$1;
(statearr_14631_14693[(2)] = inst_14575);

(statearr_14631_14693[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto__,jobs,results,process,async))
;
return ((function (switch__7187__auto__,c__7252__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0 = (function (){
var statearr_14635 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_14635[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__);

(statearr_14635[(1)] = (1));

return statearr_14635;
});
var cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1 = (function (state_14606){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_14606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e14636){if((e14636 instanceof Object)){
var ex__7191__auto__ = e14636;
var statearr_14637_14694 = state_14606;
(statearr_14637_14694[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14636;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14695 = state_14606;
state_14606 = G__14695;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__ = function(state_14606){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1.call(this,state_14606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__7188__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__,jobs,results,process,async))
})();
var state__7254__auto__ = (function (){var statearr_14638 = f__7253__auto__.call(null);
(statearr_14638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_14638;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__,jobs,results,process,async))
);

return c__7252__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args14696 = [];
var len__5712__auto___14699 = arguments.length;
var i__5713__auto___14700 = (0);
while(true){
if((i__5713__auto___14700 < len__5712__auto___14699)){
args14696.push((arguments[i__5713__auto___14700]));

var G__14701 = (i__5713__auto___14700 + (1));
i__5713__auto___14700 = G__14701;
continue;
} else {
}
break;
}

var G__14698 = args14696.length;
switch (G__14698) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14696.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args14703 = [];
var len__5712__auto___14706 = arguments.length;
var i__5713__auto___14707 = (0);
while(true){
if((i__5713__auto___14707 < len__5712__auto___14706)){
args14703.push((arguments[i__5713__auto___14707]));

var G__14708 = (i__5713__auto___14707 + (1));
i__5713__auto___14707 = G__14708;
continue;
} else {
}
break;
}

var G__14705 = args14703.length;
switch (G__14705) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14703.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args14710 = [];
var len__5712__auto___14763 = arguments.length;
var i__5713__auto___14764 = (0);
while(true){
if((i__5713__auto___14764 < len__5712__auto___14763)){
args14710.push((arguments[i__5713__auto___14764]));

var G__14765 = (i__5713__auto___14764 + (1));
i__5713__auto___14764 = G__14765;
continue;
} else {
}
break;
}

var G__14712 = args14710.length;
switch (G__14712) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14710.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__7252__auto___14767 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___14767,tc,fc){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___14767,tc,fc){
return (function (state_14738){
var state_val_14739 = (state_14738[(1)]);
if((state_val_14739 === (7))){
var inst_14734 = (state_14738[(2)]);
var state_14738__$1 = state_14738;
var statearr_14740_14768 = state_14738__$1;
(statearr_14740_14768[(2)] = inst_14734);

(statearr_14740_14768[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (1))){
var state_14738__$1 = state_14738;
var statearr_14741_14769 = state_14738__$1;
(statearr_14741_14769[(2)] = null);

(statearr_14741_14769[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (4))){
var inst_14715 = (state_14738[(7)]);
var inst_14715__$1 = (state_14738[(2)]);
var inst_14716 = (inst_14715__$1 == null);
var state_14738__$1 = (function (){var statearr_14742 = state_14738;
(statearr_14742[(7)] = inst_14715__$1);

return statearr_14742;
})();
if(cljs.core.truth_(inst_14716)){
var statearr_14743_14770 = state_14738__$1;
(statearr_14743_14770[(1)] = (5));

} else {
var statearr_14744_14771 = state_14738__$1;
(statearr_14744_14771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (13))){
var state_14738__$1 = state_14738;
var statearr_14745_14772 = state_14738__$1;
(statearr_14745_14772[(2)] = null);

(statearr_14745_14772[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (6))){
var inst_14715 = (state_14738[(7)]);
var inst_14721 = p.call(null,inst_14715);
var state_14738__$1 = state_14738;
if(cljs.core.truth_(inst_14721)){
var statearr_14746_14773 = state_14738__$1;
(statearr_14746_14773[(1)] = (9));

} else {
var statearr_14747_14774 = state_14738__$1;
(statearr_14747_14774[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (3))){
var inst_14736 = (state_14738[(2)]);
var state_14738__$1 = state_14738;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14738__$1,inst_14736);
} else {
if((state_val_14739 === (12))){
var state_14738__$1 = state_14738;
var statearr_14748_14775 = state_14738__$1;
(statearr_14748_14775[(2)] = null);

(statearr_14748_14775[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (2))){
var state_14738__$1 = state_14738;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14738__$1,(4),ch);
} else {
if((state_val_14739 === (11))){
var inst_14715 = (state_14738[(7)]);
var inst_14725 = (state_14738[(2)]);
var state_14738__$1 = state_14738;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14738__$1,(8),inst_14725,inst_14715);
} else {
if((state_val_14739 === (9))){
var state_14738__$1 = state_14738;
var statearr_14749_14776 = state_14738__$1;
(statearr_14749_14776[(2)] = tc);

(statearr_14749_14776[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (5))){
var inst_14718 = cljs.core.async.close_BANG_.call(null,tc);
var inst_14719 = cljs.core.async.close_BANG_.call(null,fc);
var state_14738__$1 = (function (){var statearr_14750 = state_14738;
(statearr_14750[(8)] = inst_14718);

return statearr_14750;
})();
var statearr_14751_14777 = state_14738__$1;
(statearr_14751_14777[(2)] = inst_14719);

(statearr_14751_14777[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (14))){
var inst_14732 = (state_14738[(2)]);
var state_14738__$1 = state_14738;
var statearr_14752_14778 = state_14738__$1;
(statearr_14752_14778[(2)] = inst_14732);

(statearr_14752_14778[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (10))){
var state_14738__$1 = state_14738;
var statearr_14753_14779 = state_14738__$1;
(statearr_14753_14779[(2)] = fc);

(statearr_14753_14779[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14739 === (8))){
var inst_14727 = (state_14738[(2)]);
var state_14738__$1 = state_14738;
if(cljs.core.truth_(inst_14727)){
var statearr_14754_14780 = state_14738__$1;
(statearr_14754_14780[(1)] = (12));

} else {
var statearr_14755_14781 = state_14738__$1;
(statearr_14755_14781[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___14767,tc,fc))
;
return ((function (switch__7187__auto__,c__7252__auto___14767,tc,fc){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_14759 = [null,null,null,null,null,null,null,null,null];
(statearr_14759[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_14759[(1)] = (1));

return statearr_14759;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_14738){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_14738);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e14760){if((e14760 instanceof Object)){
var ex__7191__auto__ = e14760;
var statearr_14761_14782 = state_14738;
(statearr_14761_14782[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14738);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14783 = state_14738;
state_14738 = G__14783;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_14738){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_14738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___14767,tc,fc))
})();
var state__7254__auto__ = (function (){var statearr_14762 = f__7253__auto__.call(null);
(statearr_14762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___14767);

return statearr_14762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___14767,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__){
return (function (state_14830){
var state_val_14831 = (state_14830[(1)]);
if((state_val_14831 === (1))){
var inst_14816 = init;
var state_14830__$1 = (function (){var statearr_14832 = state_14830;
(statearr_14832[(7)] = inst_14816);

return statearr_14832;
})();
var statearr_14833_14848 = state_14830__$1;
(statearr_14833_14848[(2)] = null);

(statearr_14833_14848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (2))){
var state_14830__$1 = state_14830;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14830__$1,(4),ch);
} else {
if((state_val_14831 === (3))){
var inst_14828 = (state_14830[(2)]);
var state_14830__$1 = state_14830;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14830__$1,inst_14828);
} else {
if((state_val_14831 === (4))){
var inst_14819 = (state_14830[(8)]);
var inst_14819__$1 = (state_14830[(2)]);
var inst_14820 = (inst_14819__$1 == null);
var state_14830__$1 = (function (){var statearr_14834 = state_14830;
(statearr_14834[(8)] = inst_14819__$1);

return statearr_14834;
})();
if(cljs.core.truth_(inst_14820)){
var statearr_14835_14849 = state_14830__$1;
(statearr_14835_14849[(1)] = (5));

} else {
var statearr_14836_14850 = state_14830__$1;
(statearr_14836_14850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (5))){
var inst_14816 = (state_14830[(7)]);
var state_14830__$1 = state_14830;
var statearr_14837_14851 = state_14830__$1;
(statearr_14837_14851[(2)] = inst_14816);

(statearr_14837_14851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (6))){
var inst_14819 = (state_14830[(8)]);
var inst_14816 = (state_14830[(7)]);
var inst_14823 = f.call(null,inst_14816,inst_14819);
var inst_14816__$1 = inst_14823;
var state_14830__$1 = (function (){var statearr_14838 = state_14830;
(statearr_14838[(7)] = inst_14816__$1);

return statearr_14838;
})();
var statearr_14839_14852 = state_14830__$1;
(statearr_14839_14852[(2)] = null);

(statearr_14839_14852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14831 === (7))){
var inst_14826 = (state_14830[(2)]);
var state_14830__$1 = state_14830;
var statearr_14840_14853 = state_14830__$1;
(statearr_14840_14853[(2)] = inst_14826);

(statearr_14840_14853[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__7252__auto__))
;
return ((function (switch__7187__auto__,c__7252__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__7188__auto__ = null;
var cljs$core$async$reduce_$_state_machine__7188__auto____0 = (function (){
var statearr_14844 = [null,null,null,null,null,null,null,null,null];
(statearr_14844[(0)] = cljs$core$async$reduce_$_state_machine__7188__auto__);

(statearr_14844[(1)] = (1));

return statearr_14844;
});
var cljs$core$async$reduce_$_state_machine__7188__auto____1 = (function (state_14830){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_14830);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e14845){if((e14845 instanceof Object)){
var ex__7191__auto__ = e14845;
var statearr_14846_14854 = state_14830;
(statearr_14846_14854[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14830);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14845;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14855 = state_14830;
state_14830 = G__14855;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__7188__auto__ = function(state_14830){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__7188__auto____1.call(this,state_14830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__7188__auto____0;
cljs$core$async$reduce_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__7188__auto____1;
return cljs$core$async$reduce_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__))
})();
var state__7254__auto__ = (function (){var statearr_14847 = f__7253__auto__.call(null);
(statearr_14847[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_14847;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__))
);

return c__7252__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args14856 = [];
var len__5712__auto___14908 = arguments.length;
var i__5713__auto___14909 = (0);
while(true){
if((i__5713__auto___14909 < len__5712__auto___14908)){
args14856.push((arguments[i__5713__auto___14909]));

var G__14910 = (i__5713__auto___14909 + (1));
i__5713__auto___14909 = G__14910;
continue;
} else {
}
break;
}

var G__14858 = args14856.length;
switch (G__14858) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args14856.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__){
return (function (state_14883){
var state_val_14884 = (state_14883[(1)]);
if((state_val_14884 === (7))){
var inst_14865 = (state_14883[(2)]);
var state_14883__$1 = state_14883;
var statearr_14885_14912 = state_14883__$1;
(statearr_14885_14912[(2)] = inst_14865);

(statearr_14885_14912[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (1))){
var inst_14859 = cljs.core.seq.call(null,coll);
var inst_14860 = inst_14859;
var state_14883__$1 = (function (){var statearr_14886 = state_14883;
(statearr_14886[(7)] = inst_14860);

return statearr_14886;
})();
var statearr_14887_14913 = state_14883__$1;
(statearr_14887_14913[(2)] = null);

(statearr_14887_14913[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (4))){
var inst_14860 = (state_14883[(7)]);
var inst_14863 = cljs.core.first.call(null,inst_14860);
var state_14883__$1 = state_14883;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14883__$1,(7),ch,inst_14863);
} else {
if((state_val_14884 === (13))){
var inst_14877 = (state_14883[(2)]);
var state_14883__$1 = state_14883;
var statearr_14888_14914 = state_14883__$1;
(statearr_14888_14914[(2)] = inst_14877);

(statearr_14888_14914[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (6))){
var inst_14868 = (state_14883[(2)]);
var state_14883__$1 = state_14883;
if(cljs.core.truth_(inst_14868)){
var statearr_14889_14915 = state_14883__$1;
(statearr_14889_14915[(1)] = (8));

} else {
var statearr_14890_14916 = state_14883__$1;
(statearr_14890_14916[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (3))){
var inst_14881 = (state_14883[(2)]);
var state_14883__$1 = state_14883;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14883__$1,inst_14881);
} else {
if((state_val_14884 === (12))){
var state_14883__$1 = state_14883;
var statearr_14891_14917 = state_14883__$1;
(statearr_14891_14917[(2)] = null);

(statearr_14891_14917[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (2))){
var inst_14860 = (state_14883[(7)]);
var state_14883__$1 = state_14883;
if(cljs.core.truth_(inst_14860)){
var statearr_14892_14918 = state_14883__$1;
(statearr_14892_14918[(1)] = (4));

} else {
var statearr_14893_14919 = state_14883__$1;
(statearr_14893_14919[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (11))){
var inst_14874 = cljs.core.async.close_BANG_.call(null,ch);
var state_14883__$1 = state_14883;
var statearr_14894_14920 = state_14883__$1;
(statearr_14894_14920[(2)] = inst_14874);

(statearr_14894_14920[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (9))){
var state_14883__$1 = state_14883;
if(cljs.core.truth_(close_QMARK_)){
var statearr_14895_14921 = state_14883__$1;
(statearr_14895_14921[(1)] = (11));

} else {
var statearr_14896_14922 = state_14883__$1;
(statearr_14896_14922[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (5))){
var inst_14860 = (state_14883[(7)]);
var state_14883__$1 = state_14883;
var statearr_14897_14923 = state_14883__$1;
(statearr_14897_14923[(2)] = inst_14860);

(statearr_14897_14923[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (10))){
var inst_14879 = (state_14883[(2)]);
var state_14883__$1 = state_14883;
var statearr_14898_14924 = state_14883__$1;
(statearr_14898_14924[(2)] = inst_14879);

(statearr_14898_14924[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_14884 === (8))){
var inst_14860 = (state_14883[(7)]);
var inst_14870 = cljs.core.next.call(null,inst_14860);
var inst_14860__$1 = inst_14870;
var state_14883__$1 = (function (){var statearr_14899 = state_14883;
(statearr_14899[(7)] = inst_14860__$1);

return statearr_14899;
})();
var statearr_14900_14925 = state_14883__$1;
(statearr_14900_14925[(2)] = null);

(statearr_14900_14925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto__))
;
return ((function (switch__7187__auto__,c__7252__auto__){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_14904 = [null,null,null,null,null,null,null,null];
(statearr_14904[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_14904[(1)] = (1));

return statearr_14904;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_14883){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_14883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e14905){if((e14905 instanceof Object)){
var ex__7191__auto__ = e14905;
var statearr_14906_14926 = state_14883;
(statearr_14906_14926[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e14905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__14927 = state_14883;
state_14883 = G__14927;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_14883){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_14883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__))
})();
var state__7254__auto__ = (function (){var statearr_14907 = f__7253__auto__.call(null);
(statearr_14907[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_14907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__))
);

return c__7252__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__5309__auto__ = (((_ == null))?null:_);
var m__5310__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,_);
} else {
var m__5310__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__5309__auto__ = (((m == null))?null:m);
var m__5310__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__5310__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__5309__auto__ = (((m == null))?null:m);
var m__5310__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,m,ch);
} else {
var m__5310__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__5309__auto__ = (((m == null))?null:m);
var m__5310__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,m);
} else {
var m__5310__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15149 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15149 = (function (mult,ch,cs,meta15150){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta15150 = meta15150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15151,meta15150__$1){
var self__ = this;
var _15151__$1 = this;
return (new cljs.core.async.t_cljs$core$async15149(self__.mult,self__.ch,self__.cs,meta15150__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async15149.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15151){
var self__ = this;
var _15151__$1 = this;
return self__.meta15150;
});})(cs))
;

cljs.core.async.t_cljs$core$async15149.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15149.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async15149.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async15149.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15149.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15149.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async15149.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta15150","meta15150",1275943534,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async15149.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15149.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15149";

cljs.core.async.t_cljs$core$async15149.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async15149");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async15149 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async15149(mult__$1,ch__$1,cs__$1,meta15150){
return (new cljs.core.async.t_cljs$core$async15149(mult__$1,ch__$1,cs__$1,meta15150));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async15149(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__7252__auto___15370 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___15370,cs,m,dchan,dctr,done){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___15370,cs,m,dchan,dctr,done){
return (function (state_15282){
var state_val_15283 = (state_15282[(1)]);
if((state_val_15283 === (7))){
var inst_15278 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15284_15371 = state_15282__$1;
(statearr_15284_15371[(2)] = inst_15278);

(statearr_15284_15371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (20))){
var inst_15183 = (state_15282[(7)]);
var inst_15193 = cljs.core.first.call(null,inst_15183);
var inst_15194 = cljs.core.nth.call(null,inst_15193,(0),null);
var inst_15195 = cljs.core.nth.call(null,inst_15193,(1),null);
var state_15282__$1 = (function (){var statearr_15285 = state_15282;
(statearr_15285[(8)] = inst_15194);

return statearr_15285;
})();
if(cljs.core.truth_(inst_15195)){
var statearr_15286_15372 = state_15282__$1;
(statearr_15286_15372[(1)] = (22));

} else {
var statearr_15287_15373 = state_15282__$1;
(statearr_15287_15373[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (27))){
var inst_15154 = (state_15282[(9)]);
var inst_15225 = (state_15282[(10)]);
var inst_15230 = (state_15282[(11)]);
var inst_15223 = (state_15282[(12)]);
var inst_15230__$1 = cljs.core._nth.call(null,inst_15223,inst_15225);
var inst_15231 = cljs.core.async.put_BANG_.call(null,inst_15230__$1,inst_15154,done);
var state_15282__$1 = (function (){var statearr_15288 = state_15282;
(statearr_15288[(11)] = inst_15230__$1);

return statearr_15288;
})();
if(cljs.core.truth_(inst_15231)){
var statearr_15289_15374 = state_15282__$1;
(statearr_15289_15374[(1)] = (30));

} else {
var statearr_15290_15375 = state_15282__$1;
(statearr_15290_15375[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (1))){
var state_15282__$1 = state_15282;
var statearr_15291_15376 = state_15282__$1;
(statearr_15291_15376[(2)] = null);

(statearr_15291_15376[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (24))){
var inst_15183 = (state_15282[(7)]);
var inst_15200 = (state_15282[(2)]);
var inst_15201 = cljs.core.next.call(null,inst_15183);
var inst_15163 = inst_15201;
var inst_15164 = null;
var inst_15165 = (0);
var inst_15166 = (0);
var state_15282__$1 = (function (){var statearr_15292 = state_15282;
(statearr_15292[(13)] = inst_15165);

(statearr_15292[(14)] = inst_15163);

(statearr_15292[(15)] = inst_15164);

(statearr_15292[(16)] = inst_15200);

(statearr_15292[(17)] = inst_15166);

return statearr_15292;
})();
var statearr_15293_15377 = state_15282__$1;
(statearr_15293_15377[(2)] = null);

(statearr_15293_15377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (39))){
var state_15282__$1 = state_15282;
var statearr_15297_15378 = state_15282__$1;
(statearr_15297_15378[(2)] = null);

(statearr_15297_15378[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (4))){
var inst_15154 = (state_15282[(9)]);
var inst_15154__$1 = (state_15282[(2)]);
var inst_15155 = (inst_15154__$1 == null);
var state_15282__$1 = (function (){var statearr_15298 = state_15282;
(statearr_15298[(9)] = inst_15154__$1);

return statearr_15298;
})();
if(cljs.core.truth_(inst_15155)){
var statearr_15299_15379 = state_15282__$1;
(statearr_15299_15379[(1)] = (5));

} else {
var statearr_15300_15380 = state_15282__$1;
(statearr_15300_15380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (15))){
var inst_15165 = (state_15282[(13)]);
var inst_15163 = (state_15282[(14)]);
var inst_15164 = (state_15282[(15)]);
var inst_15166 = (state_15282[(17)]);
var inst_15179 = (state_15282[(2)]);
var inst_15180 = (inst_15166 + (1));
var tmp15294 = inst_15165;
var tmp15295 = inst_15163;
var tmp15296 = inst_15164;
var inst_15163__$1 = tmp15295;
var inst_15164__$1 = tmp15296;
var inst_15165__$1 = tmp15294;
var inst_15166__$1 = inst_15180;
var state_15282__$1 = (function (){var statearr_15301 = state_15282;
(statearr_15301[(13)] = inst_15165__$1);

(statearr_15301[(14)] = inst_15163__$1);

(statearr_15301[(15)] = inst_15164__$1);

(statearr_15301[(17)] = inst_15166__$1);

(statearr_15301[(18)] = inst_15179);

return statearr_15301;
})();
var statearr_15302_15381 = state_15282__$1;
(statearr_15302_15381[(2)] = null);

(statearr_15302_15381[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (21))){
var inst_15204 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15306_15382 = state_15282__$1;
(statearr_15306_15382[(2)] = inst_15204);

(statearr_15306_15382[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (31))){
var inst_15230 = (state_15282[(11)]);
var inst_15234 = done.call(null,null);
var inst_15235 = cljs.core.async.untap_STAR_.call(null,m,inst_15230);
var state_15282__$1 = (function (){var statearr_15307 = state_15282;
(statearr_15307[(19)] = inst_15234);

return statearr_15307;
})();
var statearr_15308_15383 = state_15282__$1;
(statearr_15308_15383[(2)] = inst_15235);

(statearr_15308_15383[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (32))){
var inst_15224 = (state_15282[(20)]);
var inst_15225 = (state_15282[(10)]);
var inst_15222 = (state_15282[(21)]);
var inst_15223 = (state_15282[(12)]);
var inst_15237 = (state_15282[(2)]);
var inst_15238 = (inst_15225 + (1));
var tmp15303 = inst_15224;
var tmp15304 = inst_15222;
var tmp15305 = inst_15223;
var inst_15222__$1 = tmp15304;
var inst_15223__$1 = tmp15305;
var inst_15224__$1 = tmp15303;
var inst_15225__$1 = inst_15238;
var state_15282__$1 = (function (){var statearr_15309 = state_15282;
(statearr_15309[(20)] = inst_15224__$1);

(statearr_15309[(10)] = inst_15225__$1);

(statearr_15309[(22)] = inst_15237);

(statearr_15309[(21)] = inst_15222__$1);

(statearr_15309[(12)] = inst_15223__$1);

return statearr_15309;
})();
var statearr_15310_15384 = state_15282__$1;
(statearr_15310_15384[(2)] = null);

(statearr_15310_15384[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (40))){
var inst_15250 = (state_15282[(23)]);
var inst_15254 = done.call(null,null);
var inst_15255 = cljs.core.async.untap_STAR_.call(null,m,inst_15250);
var state_15282__$1 = (function (){var statearr_15311 = state_15282;
(statearr_15311[(24)] = inst_15254);

return statearr_15311;
})();
var statearr_15312_15385 = state_15282__$1;
(statearr_15312_15385[(2)] = inst_15255);

(statearr_15312_15385[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (33))){
var inst_15241 = (state_15282[(25)]);
var inst_15243 = cljs.core.chunked_seq_QMARK_.call(null,inst_15241);
var state_15282__$1 = state_15282;
if(inst_15243){
var statearr_15313_15386 = state_15282__$1;
(statearr_15313_15386[(1)] = (36));

} else {
var statearr_15314_15387 = state_15282__$1;
(statearr_15314_15387[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (13))){
var inst_15173 = (state_15282[(26)]);
var inst_15176 = cljs.core.async.close_BANG_.call(null,inst_15173);
var state_15282__$1 = state_15282;
var statearr_15315_15388 = state_15282__$1;
(statearr_15315_15388[(2)] = inst_15176);

(statearr_15315_15388[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (22))){
var inst_15194 = (state_15282[(8)]);
var inst_15197 = cljs.core.async.close_BANG_.call(null,inst_15194);
var state_15282__$1 = state_15282;
var statearr_15316_15389 = state_15282__$1;
(statearr_15316_15389[(2)] = inst_15197);

(statearr_15316_15389[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (36))){
var inst_15241 = (state_15282[(25)]);
var inst_15245 = cljs.core.chunk_first.call(null,inst_15241);
var inst_15246 = cljs.core.chunk_rest.call(null,inst_15241);
var inst_15247 = cljs.core.count.call(null,inst_15245);
var inst_15222 = inst_15246;
var inst_15223 = inst_15245;
var inst_15224 = inst_15247;
var inst_15225 = (0);
var state_15282__$1 = (function (){var statearr_15317 = state_15282;
(statearr_15317[(20)] = inst_15224);

(statearr_15317[(10)] = inst_15225);

(statearr_15317[(21)] = inst_15222);

(statearr_15317[(12)] = inst_15223);

return statearr_15317;
})();
var statearr_15318_15390 = state_15282__$1;
(statearr_15318_15390[(2)] = null);

(statearr_15318_15390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (41))){
var inst_15241 = (state_15282[(25)]);
var inst_15257 = (state_15282[(2)]);
var inst_15258 = cljs.core.next.call(null,inst_15241);
var inst_15222 = inst_15258;
var inst_15223 = null;
var inst_15224 = (0);
var inst_15225 = (0);
var state_15282__$1 = (function (){var statearr_15319 = state_15282;
(statearr_15319[(27)] = inst_15257);

(statearr_15319[(20)] = inst_15224);

(statearr_15319[(10)] = inst_15225);

(statearr_15319[(21)] = inst_15222);

(statearr_15319[(12)] = inst_15223);

return statearr_15319;
})();
var statearr_15320_15391 = state_15282__$1;
(statearr_15320_15391[(2)] = null);

(statearr_15320_15391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (43))){
var state_15282__$1 = state_15282;
var statearr_15321_15392 = state_15282__$1;
(statearr_15321_15392[(2)] = null);

(statearr_15321_15392[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (29))){
var inst_15266 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15322_15393 = state_15282__$1;
(statearr_15322_15393[(2)] = inst_15266);

(statearr_15322_15393[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (44))){
var inst_15275 = (state_15282[(2)]);
var state_15282__$1 = (function (){var statearr_15323 = state_15282;
(statearr_15323[(28)] = inst_15275);

return statearr_15323;
})();
var statearr_15324_15394 = state_15282__$1;
(statearr_15324_15394[(2)] = null);

(statearr_15324_15394[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (6))){
var inst_15214 = (state_15282[(29)]);
var inst_15213 = cljs.core.deref.call(null,cs);
var inst_15214__$1 = cljs.core.keys.call(null,inst_15213);
var inst_15215 = cljs.core.count.call(null,inst_15214__$1);
var inst_15216 = cljs.core.reset_BANG_.call(null,dctr,inst_15215);
var inst_15221 = cljs.core.seq.call(null,inst_15214__$1);
var inst_15222 = inst_15221;
var inst_15223 = null;
var inst_15224 = (0);
var inst_15225 = (0);
var state_15282__$1 = (function (){var statearr_15325 = state_15282;
(statearr_15325[(20)] = inst_15224);

(statearr_15325[(10)] = inst_15225);

(statearr_15325[(30)] = inst_15216);

(statearr_15325[(21)] = inst_15222);

(statearr_15325[(29)] = inst_15214__$1);

(statearr_15325[(12)] = inst_15223);

return statearr_15325;
})();
var statearr_15326_15395 = state_15282__$1;
(statearr_15326_15395[(2)] = null);

(statearr_15326_15395[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (28))){
var inst_15241 = (state_15282[(25)]);
var inst_15222 = (state_15282[(21)]);
var inst_15241__$1 = cljs.core.seq.call(null,inst_15222);
var state_15282__$1 = (function (){var statearr_15327 = state_15282;
(statearr_15327[(25)] = inst_15241__$1);

return statearr_15327;
})();
if(inst_15241__$1){
var statearr_15328_15396 = state_15282__$1;
(statearr_15328_15396[(1)] = (33));

} else {
var statearr_15329_15397 = state_15282__$1;
(statearr_15329_15397[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (25))){
var inst_15224 = (state_15282[(20)]);
var inst_15225 = (state_15282[(10)]);
var inst_15227 = (inst_15225 < inst_15224);
var inst_15228 = inst_15227;
var state_15282__$1 = state_15282;
if(cljs.core.truth_(inst_15228)){
var statearr_15330_15398 = state_15282__$1;
(statearr_15330_15398[(1)] = (27));

} else {
var statearr_15331_15399 = state_15282__$1;
(statearr_15331_15399[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (34))){
var state_15282__$1 = state_15282;
var statearr_15332_15400 = state_15282__$1;
(statearr_15332_15400[(2)] = null);

(statearr_15332_15400[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (17))){
var state_15282__$1 = state_15282;
var statearr_15333_15401 = state_15282__$1;
(statearr_15333_15401[(2)] = null);

(statearr_15333_15401[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (3))){
var inst_15280 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15282__$1,inst_15280);
} else {
if((state_val_15283 === (12))){
var inst_15209 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15334_15402 = state_15282__$1;
(statearr_15334_15402[(2)] = inst_15209);

(statearr_15334_15402[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (2))){
var state_15282__$1 = state_15282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15282__$1,(4),ch);
} else {
if((state_val_15283 === (23))){
var state_15282__$1 = state_15282;
var statearr_15335_15403 = state_15282__$1;
(statearr_15335_15403[(2)] = null);

(statearr_15335_15403[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (35))){
var inst_15264 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15336_15404 = state_15282__$1;
(statearr_15336_15404[(2)] = inst_15264);

(statearr_15336_15404[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (19))){
var inst_15183 = (state_15282[(7)]);
var inst_15187 = cljs.core.chunk_first.call(null,inst_15183);
var inst_15188 = cljs.core.chunk_rest.call(null,inst_15183);
var inst_15189 = cljs.core.count.call(null,inst_15187);
var inst_15163 = inst_15188;
var inst_15164 = inst_15187;
var inst_15165 = inst_15189;
var inst_15166 = (0);
var state_15282__$1 = (function (){var statearr_15337 = state_15282;
(statearr_15337[(13)] = inst_15165);

(statearr_15337[(14)] = inst_15163);

(statearr_15337[(15)] = inst_15164);

(statearr_15337[(17)] = inst_15166);

return statearr_15337;
})();
var statearr_15338_15405 = state_15282__$1;
(statearr_15338_15405[(2)] = null);

(statearr_15338_15405[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (11))){
var inst_15163 = (state_15282[(14)]);
var inst_15183 = (state_15282[(7)]);
var inst_15183__$1 = cljs.core.seq.call(null,inst_15163);
var state_15282__$1 = (function (){var statearr_15339 = state_15282;
(statearr_15339[(7)] = inst_15183__$1);

return statearr_15339;
})();
if(inst_15183__$1){
var statearr_15340_15406 = state_15282__$1;
(statearr_15340_15406[(1)] = (16));

} else {
var statearr_15341_15407 = state_15282__$1;
(statearr_15341_15407[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (9))){
var inst_15211 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15342_15408 = state_15282__$1;
(statearr_15342_15408[(2)] = inst_15211);

(statearr_15342_15408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (5))){
var inst_15161 = cljs.core.deref.call(null,cs);
var inst_15162 = cljs.core.seq.call(null,inst_15161);
var inst_15163 = inst_15162;
var inst_15164 = null;
var inst_15165 = (0);
var inst_15166 = (0);
var state_15282__$1 = (function (){var statearr_15343 = state_15282;
(statearr_15343[(13)] = inst_15165);

(statearr_15343[(14)] = inst_15163);

(statearr_15343[(15)] = inst_15164);

(statearr_15343[(17)] = inst_15166);

return statearr_15343;
})();
var statearr_15344_15409 = state_15282__$1;
(statearr_15344_15409[(2)] = null);

(statearr_15344_15409[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (14))){
var state_15282__$1 = state_15282;
var statearr_15345_15410 = state_15282__$1;
(statearr_15345_15410[(2)] = null);

(statearr_15345_15410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (45))){
var inst_15272 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15346_15411 = state_15282__$1;
(statearr_15346_15411[(2)] = inst_15272);

(statearr_15346_15411[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (26))){
var inst_15214 = (state_15282[(29)]);
var inst_15268 = (state_15282[(2)]);
var inst_15269 = cljs.core.seq.call(null,inst_15214);
var state_15282__$1 = (function (){var statearr_15347 = state_15282;
(statearr_15347[(31)] = inst_15268);

return statearr_15347;
})();
if(inst_15269){
var statearr_15348_15412 = state_15282__$1;
(statearr_15348_15412[(1)] = (42));

} else {
var statearr_15349_15413 = state_15282__$1;
(statearr_15349_15413[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (16))){
var inst_15183 = (state_15282[(7)]);
var inst_15185 = cljs.core.chunked_seq_QMARK_.call(null,inst_15183);
var state_15282__$1 = state_15282;
if(inst_15185){
var statearr_15350_15414 = state_15282__$1;
(statearr_15350_15414[(1)] = (19));

} else {
var statearr_15351_15415 = state_15282__$1;
(statearr_15351_15415[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (38))){
var inst_15261 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15352_15416 = state_15282__$1;
(statearr_15352_15416[(2)] = inst_15261);

(statearr_15352_15416[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (30))){
var state_15282__$1 = state_15282;
var statearr_15353_15417 = state_15282__$1;
(statearr_15353_15417[(2)] = null);

(statearr_15353_15417[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (10))){
var inst_15164 = (state_15282[(15)]);
var inst_15166 = (state_15282[(17)]);
var inst_15172 = cljs.core._nth.call(null,inst_15164,inst_15166);
var inst_15173 = cljs.core.nth.call(null,inst_15172,(0),null);
var inst_15174 = cljs.core.nth.call(null,inst_15172,(1),null);
var state_15282__$1 = (function (){var statearr_15354 = state_15282;
(statearr_15354[(26)] = inst_15173);

return statearr_15354;
})();
if(cljs.core.truth_(inst_15174)){
var statearr_15355_15418 = state_15282__$1;
(statearr_15355_15418[(1)] = (13));

} else {
var statearr_15356_15419 = state_15282__$1;
(statearr_15356_15419[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (18))){
var inst_15207 = (state_15282[(2)]);
var state_15282__$1 = state_15282;
var statearr_15357_15420 = state_15282__$1;
(statearr_15357_15420[(2)] = inst_15207);

(statearr_15357_15420[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (42))){
var state_15282__$1 = state_15282;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15282__$1,(45),dchan);
} else {
if((state_val_15283 === (37))){
var inst_15250 = (state_15282[(23)]);
var inst_15154 = (state_15282[(9)]);
var inst_15241 = (state_15282[(25)]);
var inst_15250__$1 = cljs.core.first.call(null,inst_15241);
var inst_15251 = cljs.core.async.put_BANG_.call(null,inst_15250__$1,inst_15154,done);
var state_15282__$1 = (function (){var statearr_15358 = state_15282;
(statearr_15358[(23)] = inst_15250__$1);

return statearr_15358;
})();
if(cljs.core.truth_(inst_15251)){
var statearr_15359_15421 = state_15282__$1;
(statearr_15359_15421[(1)] = (39));

} else {
var statearr_15360_15422 = state_15282__$1;
(statearr_15360_15422[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15283 === (8))){
var inst_15165 = (state_15282[(13)]);
var inst_15166 = (state_15282[(17)]);
var inst_15168 = (inst_15166 < inst_15165);
var inst_15169 = inst_15168;
var state_15282__$1 = state_15282;
if(cljs.core.truth_(inst_15169)){
var statearr_15361_15423 = state_15282__$1;
(statearr_15361_15423[(1)] = (10));

} else {
var statearr_15362_15424 = state_15282__$1;
(statearr_15362_15424[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___15370,cs,m,dchan,dctr,done))
;
return ((function (switch__7187__auto__,c__7252__auto___15370,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__7188__auto__ = null;
var cljs$core$async$mult_$_state_machine__7188__auto____0 = (function (){
var statearr_15366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15366[(0)] = cljs$core$async$mult_$_state_machine__7188__auto__);

(statearr_15366[(1)] = (1));

return statearr_15366;
});
var cljs$core$async$mult_$_state_machine__7188__auto____1 = (function (state_15282){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_15282);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e15367){if((e15367 instanceof Object)){
var ex__7191__auto__ = e15367;
var statearr_15368_15425 = state_15282;
(statearr_15368_15425[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15282);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15367;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15426 = state_15282;
state_15282 = G__15426;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__7188__auto__ = function(state_15282){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__7188__auto____1.call(this,state_15282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__7188__auto____0;
cljs$core$async$mult_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__7188__auto____1;
return cljs$core$async$mult_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___15370,cs,m,dchan,dctr,done))
})();
var state__7254__auto__ = (function (){var statearr_15369 = f__7253__auto__.call(null);
(statearr_15369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___15370);

return statearr_15369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___15370,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args15427 = [];
var len__5712__auto___15430 = arguments.length;
var i__5713__auto___15431 = (0);
while(true){
if((i__5713__auto___15431 < len__5712__auto___15430)){
args15427.push((arguments[i__5713__auto___15431]));

var G__15432 = (i__5713__auto___15431 + (1));
i__5713__auto___15431 = G__15432;
continue;
} else {
}
break;
}

var G__15429 = args15427.length;
switch (G__15429) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15427.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__5309__auto__ = (((m == null))?null:m);
var m__5310__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,m,ch);
} else {
var m__5310__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__5309__auto__ = (((m == null))?null:m);
var m__5310__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,m,ch);
} else {
var m__5310__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__5309__auto__ = (((m == null))?null:m);
var m__5310__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,m);
} else {
var m__5310__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__5309__auto__ = (((m == null))?null:m);
var m__5310__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,m,state_map);
} else {
var m__5310__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__5309__auto__ = (((m == null))?null:m);
var m__5310__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,m,mode);
} else {
var m__5310__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5719__auto__ = [];
var len__5712__auto___15444 = arguments.length;
var i__5713__auto___15445 = (0);
while(true){
if((i__5713__auto___15445 < len__5712__auto___15444)){
args__5719__auto__.push((arguments[i__5713__auto___15445]));

var G__15446 = (i__5713__auto___15445 + (1));
i__5713__auto___15445 = G__15446;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((3) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5720__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__15438){
var map__15439 = p__15438;
var map__15439__$1 = ((((!((map__15439 == null)))?((((map__15439.cljs$lang$protocol_mask$partition0$ & (64))) || (map__15439.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15439):map__15439);
var opts = map__15439__$1;
var statearr_15441_15447 = state;
(statearr_15441_15447[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__15439,map__15439__$1,opts){
return (function (val){
var statearr_15442_15448 = state;
(statearr_15442_15448[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__15439,map__15439__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_15443_15449 = state;
(statearr_15443_15449[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq15434){
var G__15435 = cljs.core.first.call(null,seq15434);
var seq15434__$1 = cljs.core.next.call(null,seq15434);
var G__15436 = cljs.core.first.call(null,seq15434__$1);
var seq15434__$2 = cljs.core.next.call(null,seq15434__$1);
var G__15437 = cljs.core.first.call(null,seq15434__$2);
var seq15434__$3 = cljs.core.next.call(null,seq15434__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__15435,G__15436,G__15437,seq15434__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async15613 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15613 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta15614){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta15614 = meta15614;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15615,meta15614__$1){
var self__ = this;
var _15615__$1 = this;
return (new cljs.core.async.t_cljs$core$async15613(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta15614__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15615){
var self__ = this;
var _15615__$1 = this;
return self__.meta15614;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15613.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15613.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta15614","meta15614",-1083776132,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async15613.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15613.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15613";

cljs.core.async.t_cljs$core$async15613.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async15613");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async15613 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async15613(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15614){
return (new cljs.core.async.t_cljs$core$async15613(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta15614));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async15613(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7252__auto___15776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___15776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___15776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_15713){
var state_val_15714 = (state_15713[(1)]);
if((state_val_15714 === (7))){
var inst_15631 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15715_15777 = state_15713__$1;
(statearr_15715_15777[(2)] = inst_15631);

(statearr_15715_15777[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (20))){
var inst_15643 = (state_15713[(7)]);
var state_15713__$1 = state_15713;
var statearr_15716_15778 = state_15713__$1;
(statearr_15716_15778[(2)] = inst_15643);

(statearr_15716_15778[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (27))){
var state_15713__$1 = state_15713;
var statearr_15717_15779 = state_15713__$1;
(statearr_15717_15779[(2)] = null);

(statearr_15717_15779[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (1))){
var inst_15619 = (state_15713[(8)]);
var inst_15619__$1 = calc_state.call(null);
var inst_15621 = (inst_15619__$1 == null);
var inst_15622 = cljs.core.not.call(null,inst_15621);
var state_15713__$1 = (function (){var statearr_15718 = state_15713;
(statearr_15718[(8)] = inst_15619__$1);

return statearr_15718;
})();
if(inst_15622){
var statearr_15719_15780 = state_15713__$1;
(statearr_15719_15780[(1)] = (2));

} else {
var statearr_15720_15781 = state_15713__$1;
(statearr_15720_15781[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (24))){
var inst_15673 = (state_15713[(9)]);
var inst_15666 = (state_15713[(10)]);
var inst_15687 = (state_15713[(11)]);
var inst_15687__$1 = inst_15666.call(null,inst_15673);
var state_15713__$1 = (function (){var statearr_15721 = state_15713;
(statearr_15721[(11)] = inst_15687__$1);

return statearr_15721;
})();
if(cljs.core.truth_(inst_15687__$1)){
var statearr_15722_15782 = state_15713__$1;
(statearr_15722_15782[(1)] = (29));

} else {
var statearr_15723_15783 = state_15713__$1;
(statearr_15723_15783[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (4))){
var inst_15634 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15634)){
var statearr_15724_15784 = state_15713__$1;
(statearr_15724_15784[(1)] = (8));

} else {
var statearr_15725_15785 = state_15713__$1;
(statearr_15725_15785[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (15))){
var inst_15660 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15660)){
var statearr_15726_15786 = state_15713__$1;
(statearr_15726_15786[(1)] = (19));

} else {
var statearr_15727_15787 = state_15713__$1;
(statearr_15727_15787[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (21))){
var inst_15665 = (state_15713[(12)]);
var inst_15665__$1 = (state_15713[(2)]);
var inst_15666 = cljs.core.get.call(null,inst_15665__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15667 = cljs.core.get.call(null,inst_15665__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15668 = cljs.core.get.call(null,inst_15665__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_15713__$1 = (function (){var statearr_15728 = state_15713;
(statearr_15728[(13)] = inst_15667);

(statearr_15728[(12)] = inst_15665__$1);

(statearr_15728[(10)] = inst_15666);

return statearr_15728;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_15713__$1,(22),inst_15668);
} else {
if((state_val_15714 === (31))){
var inst_15695 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15695)){
var statearr_15729_15788 = state_15713__$1;
(statearr_15729_15788[(1)] = (32));

} else {
var statearr_15730_15789 = state_15713__$1;
(statearr_15730_15789[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (32))){
var inst_15672 = (state_15713[(14)]);
var state_15713__$1 = state_15713;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15713__$1,(35),out,inst_15672);
} else {
if((state_val_15714 === (33))){
var inst_15665 = (state_15713[(12)]);
var inst_15643 = inst_15665;
var state_15713__$1 = (function (){var statearr_15731 = state_15713;
(statearr_15731[(7)] = inst_15643);

return statearr_15731;
})();
var statearr_15732_15790 = state_15713__$1;
(statearr_15732_15790[(2)] = null);

(statearr_15732_15790[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (13))){
var inst_15643 = (state_15713[(7)]);
var inst_15650 = inst_15643.cljs$lang$protocol_mask$partition0$;
var inst_15651 = (inst_15650 & (64));
var inst_15652 = inst_15643.cljs$core$ISeq$;
var inst_15653 = (inst_15651) || (inst_15652);
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15653)){
var statearr_15733_15791 = state_15713__$1;
(statearr_15733_15791[(1)] = (16));

} else {
var statearr_15734_15792 = state_15713__$1;
(statearr_15734_15792[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (22))){
var inst_15673 = (state_15713[(9)]);
var inst_15672 = (state_15713[(14)]);
var inst_15671 = (state_15713[(2)]);
var inst_15672__$1 = cljs.core.nth.call(null,inst_15671,(0),null);
var inst_15673__$1 = cljs.core.nth.call(null,inst_15671,(1),null);
var inst_15674 = (inst_15672__$1 == null);
var inst_15675 = cljs.core._EQ_.call(null,inst_15673__$1,change);
var inst_15676 = (inst_15674) || (inst_15675);
var state_15713__$1 = (function (){var statearr_15735 = state_15713;
(statearr_15735[(9)] = inst_15673__$1);

(statearr_15735[(14)] = inst_15672__$1);

return statearr_15735;
})();
if(cljs.core.truth_(inst_15676)){
var statearr_15736_15793 = state_15713__$1;
(statearr_15736_15793[(1)] = (23));

} else {
var statearr_15737_15794 = state_15713__$1;
(statearr_15737_15794[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (36))){
var inst_15665 = (state_15713[(12)]);
var inst_15643 = inst_15665;
var state_15713__$1 = (function (){var statearr_15738 = state_15713;
(statearr_15738[(7)] = inst_15643);

return statearr_15738;
})();
var statearr_15739_15795 = state_15713__$1;
(statearr_15739_15795[(2)] = null);

(statearr_15739_15795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (29))){
var inst_15687 = (state_15713[(11)]);
var state_15713__$1 = state_15713;
var statearr_15740_15796 = state_15713__$1;
(statearr_15740_15796[(2)] = inst_15687);

(statearr_15740_15796[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (6))){
var state_15713__$1 = state_15713;
var statearr_15741_15797 = state_15713__$1;
(statearr_15741_15797[(2)] = false);

(statearr_15741_15797[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (28))){
var inst_15683 = (state_15713[(2)]);
var inst_15684 = calc_state.call(null);
var inst_15643 = inst_15684;
var state_15713__$1 = (function (){var statearr_15742 = state_15713;
(statearr_15742[(15)] = inst_15683);

(statearr_15742[(7)] = inst_15643);

return statearr_15742;
})();
var statearr_15743_15798 = state_15713__$1;
(statearr_15743_15798[(2)] = null);

(statearr_15743_15798[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (25))){
var inst_15709 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15744_15799 = state_15713__$1;
(statearr_15744_15799[(2)] = inst_15709);

(statearr_15744_15799[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (34))){
var inst_15707 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15745_15800 = state_15713__$1;
(statearr_15745_15800[(2)] = inst_15707);

(statearr_15745_15800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (17))){
var state_15713__$1 = state_15713;
var statearr_15746_15801 = state_15713__$1;
(statearr_15746_15801[(2)] = false);

(statearr_15746_15801[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (3))){
var state_15713__$1 = state_15713;
var statearr_15747_15802 = state_15713__$1;
(statearr_15747_15802[(2)] = false);

(statearr_15747_15802[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (12))){
var inst_15711 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15713__$1,inst_15711);
} else {
if((state_val_15714 === (2))){
var inst_15619 = (state_15713[(8)]);
var inst_15624 = inst_15619.cljs$lang$protocol_mask$partition0$;
var inst_15625 = (inst_15624 & (64));
var inst_15626 = inst_15619.cljs$core$ISeq$;
var inst_15627 = (inst_15625) || (inst_15626);
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15627)){
var statearr_15748_15803 = state_15713__$1;
(statearr_15748_15803[(1)] = (5));

} else {
var statearr_15749_15804 = state_15713__$1;
(statearr_15749_15804[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (23))){
var inst_15672 = (state_15713[(14)]);
var inst_15678 = (inst_15672 == null);
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15678)){
var statearr_15750_15805 = state_15713__$1;
(statearr_15750_15805[(1)] = (26));

} else {
var statearr_15751_15806 = state_15713__$1;
(statearr_15751_15806[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (35))){
var inst_15698 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
if(cljs.core.truth_(inst_15698)){
var statearr_15752_15807 = state_15713__$1;
(statearr_15752_15807[(1)] = (36));

} else {
var statearr_15753_15808 = state_15713__$1;
(statearr_15753_15808[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (19))){
var inst_15643 = (state_15713[(7)]);
var inst_15662 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15643);
var state_15713__$1 = state_15713;
var statearr_15754_15809 = state_15713__$1;
(statearr_15754_15809[(2)] = inst_15662);

(statearr_15754_15809[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (11))){
var inst_15643 = (state_15713[(7)]);
var inst_15647 = (inst_15643 == null);
var inst_15648 = cljs.core.not.call(null,inst_15647);
var state_15713__$1 = state_15713;
if(inst_15648){
var statearr_15755_15810 = state_15713__$1;
(statearr_15755_15810[(1)] = (13));

} else {
var statearr_15756_15811 = state_15713__$1;
(statearr_15756_15811[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (9))){
var inst_15619 = (state_15713[(8)]);
var state_15713__$1 = state_15713;
var statearr_15757_15812 = state_15713__$1;
(statearr_15757_15812[(2)] = inst_15619);

(statearr_15757_15812[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (5))){
var state_15713__$1 = state_15713;
var statearr_15758_15813 = state_15713__$1;
(statearr_15758_15813[(2)] = true);

(statearr_15758_15813[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (14))){
var state_15713__$1 = state_15713;
var statearr_15759_15814 = state_15713__$1;
(statearr_15759_15814[(2)] = false);

(statearr_15759_15814[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (26))){
var inst_15673 = (state_15713[(9)]);
var inst_15680 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15673);
var state_15713__$1 = state_15713;
var statearr_15760_15815 = state_15713__$1;
(statearr_15760_15815[(2)] = inst_15680);

(statearr_15760_15815[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (16))){
var state_15713__$1 = state_15713;
var statearr_15761_15816 = state_15713__$1;
(statearr_15761_15816[(2)] = true);

(statearr_15761_15816[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (38))){
var inst_15703 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15762_15817 = state_15713__$1;
(statearr_15762_15817[(2)] = inst_15703);

(statearr_15762_15817[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (30))){
var inst_15673 = (state_15713[(9)]);
var inst_15667 = (state_15713[(13)]);
var inst_15666 = (state_15713[(10)]);
var inst_15690 = cljs.core.empty_QMARK_.call(null,inst_15666);
var inst_15691 = inst_15667.call(null,inst_15673);
var inst_15692 = cljs.core.not.call(null,inst_15691);
var inst_15693 = (inst_15690) && (inst_15692);
var state_15713__$1 = state_15713;
var statearr_15763_15818 = state_15713__$1;
(statearr_15763_15818[(2)] = inst_15693);

(statearr_15763_15818[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (10))){
var inst_15619 = (state_15713[(8)]);
var inst_15639 = (state_15713[(2)]);
var inst_15640 = cljs.core.get.call(null,inst_15639,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_15641 = cljs.core.get.call(null,inst_15639,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_15642 = cljs.core.get.call(null,inst_15639,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_15643 = inst_15619;
var state_15713__$1 = (function (){var statearr_15764 = state_15713;
(statearr_15764[(16)] = inst_15640);

(statearr_15764[(17)] = inst_15642);

(statearr_15764[(18)] = inst_15641);

(statearr_15764[(7)] = inst_15643);

return statearr_15764;
})();
var statearr_15765_15819 = state_15713__$1;
(statearr_15765_15819[(2)] = null);

(statearr_15765_15819[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (18))){
var inst_15657 = (state_15713[(2)]);
var state_15713__$1 = state_15713;
var statearr_15766_15820 = state_15713__$1;
(statearr_15766_15820[(2)] = inst_15657);

(statearr_15766_15820[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (37))){
var state_15713__$1 = state_15713;
var statearr_15767_15821 = state_15713__$1;
(statearr_15767_15821[(2)] = null);

(statearr_15767_15821[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15714 === (8))){
var inst_15619 = (state_15713[(8)]);
var inst_15636 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15619);
var state_15713__$1 = state_15713;
var statearr_15768_15822 = state_15713__$1;
(statearr_15768_15822[(2)] = inst_15636);

(statearr_15768_15822[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___15776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__7187__auto__,c__7252__auto___15776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__7188__auto__ = null;
var cljs$core$async$mix_$_state_machine__7188__auto____0 = (function (){
var statearr_15772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15772[(0)] = cljs$core$async$mix_$_state_machine__7188__auto__);

(statearr_15772[(1)] = (1));

return statearr_15772;
});
var cljs$core$async$mix_$_state_machine__7188__auto____1 = (function (state_15713){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_15713);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e15773){if((e15773 instanceof Object)){
var ex__7191__auto__ = e15773;
var statearr_15774_15823 = state_15713;
(statearr_15774_15823[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15713);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15773;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15824 = state_15713;
state_15713 = G__15824;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__7188__auto__ = function(state_15713){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__7188__auto____1.call(this,state_15713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__7188__auto____0;
cljs$core$async$mix_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__7188__auto____1;
return cljs$core$async$mix_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___15776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__7254__auto__ = (function (){var statearr_15775 = f__7253__auto__.call(null);
(statearr_15775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___15776);

return statearr_15775;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___15776,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__5309__auto__ = (((p == null))?null:p);
var m__5310__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__5310__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__5309__auto__ = (((p == null))?null:p);
var m__5310__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,p,v,ch);
} else {
var m__5310__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args15825 = [];
var len__5712__auto___15828 = arguments.length;
var i__5713__auto___15829 = (0);
while(true){
if((i__5713__auto___15829 < len__5712__auto___15828)){
args15825.push((arguments[i__5713__auto___15829]));

var G__15830 = (i__5713__auto___15829 + (1));
i__5713__auto___15829 = G__15830;
continue;
} else {
}
break;
}

var G__15827 = args15825.length;
switch (G__15827) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15825.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__5309__auto__ = (((p == null))?null:p);
var m__5310__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,p);
} else {
var m__5310__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__5309__auto__ = (((p == null))?null:p);
var m__5310__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5309__auto__)]);
if(!((m__5310__auto__ == null))){
return m__5310__auto__.call(null,p,v);
} else {
var m__5310__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__5310__auto____$1 == null))){
return m__5310__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args15833 = [];
var len__5712__auto___15958 = arguments.length;
var i__5713__auto___15959 = (0);
while(true){
if((i__5713__auto___15959 < len__5712__auto___15958)){
args15833.push((arguments[i__5713__auto___15959]));

var G__15960 = (i__5713__auto___15959 + (1));
i__5713__auto___15959 = G__15960;
continue;
} else {
}
break;
}

var G__15835 = args15833.length;
switch (G__15835) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15833.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__4654__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__4654__auto__,mults){
return (function (p1__15832_SHARP_){
if(cljs.core.truth_(p1__15832_SHARP_.call(null,topic))){
return p1__15832_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__15832_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__4654__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async15836 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async15836 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta15837){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta15837 = meta15837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15838,meta15837__$1){
var self__ = this;
var _15838__$1 = this;
return (new cljs.core.async.t_cljs$core$async15836(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta15837__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15838){
var self__ = this;
var _15838__$1 = this;
return self__.meta15837;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15836.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15836.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta15837","meta15837",1028450572,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async15836.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async15836.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async15836";

cljs.core.async.t_cljs$core$async15836.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async15836");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async15836 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async15836(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15837){
return (new cljs.core.async.t_cljs$core$async15836(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta15837));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async15836(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__7252__auto___15962 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___15962,mults,ensure_mult,p){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___15962,mults,ensure_mult,p){
return (function (state_15910){
var state_val_15911 = (state_15910[(1)]);
if((state_val_15911 === (7))){
var inst_15906 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15912_15963 = state_15910__$1;
(statearr_15912_15963[(2)] = inst_15906);

(statearr_15912_15963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (20))){
var state_15910__$1 = state_15910;
var statearr_15913_15964 = state_15910__$1;
(statearr_15913_15964[(2)] = null);

(statearr_15913_15964[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (1))){
var state_15910__$1 = state_15910;
var statearr_15914_15965 = state_15910__$1;
(statearr_15914_15965[(2)] = null);

(statearr_15914_15965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (24))){
var inst_15889 = (state_15910[(7)]);
var inst_15898 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15889);
var state_15910__$1 = state_15910;
var statearr_15915_15966 = state_15910__$1;
(statearr_15915_15966[(2)] = inst_15898);

(statearr_15915_15966[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (4))){
var inst_15841 = (state_15910[(8)]);
var inst_15841__$1 = (state_15910[(2)]);
var inst_15842 = (inst_15841__$1 == null);
var state_15910__$1 = (function (){var statearr_15916 = state_15910;
(statearr_15916[(8)] = inst_15841__$1);

return statearr_15916;
})();
if(cljs.core.truth_(inst_15842)){
var statearr_15917_15967 = state_15910__$1;
(statearr_15917_15967[(1)] = (5));

} else {
var statearr_15918_15968 = state_15910__$1;
(statearr_15918_15968[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (15))){
var inst_15883 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15919_15969 = state_15910__$1;
(statearr_15919_15969[(2)] = inst_15883);

(statearr_15919_15969[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (21))){
var inst_15903 = (state_15910[(2)]);
var state_15910__$1 = (function (){var statearr_15920 = state_15910;
(statearr_15920[(9)] = inst_15903);

return statearr_15920;
})();
var statearr_15921_15970 = state_15910__$1;
(statearr_15921_15970[(2)] = null);

(statearr_15921_15970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (13))){
var inst_15865 = (state_15910[(10)]);
var inst_15867 = cljs.core.chunked_seq_QMARK_.call(null,inst_15865);
var state_15910__$1 = state_15910;
if(inst_15867){
var statearr_15922_15971 = state_15910__$1;
(statearr_15922_15971[(1)] = (16));

} else {
var statearr_15923_15972 = state_15910__$1;
(statearr_15923_15972[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (22))){
var inst_15895 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
if(cljs.core.truth_(inst_15895)){
var statearr_15924_15973 = state_15910__$1;
(statearr_15924_15973[(1)] = (23));

} else {
var statearr_15925_15974 = state_15910__$1;
(statearr_15925_15974[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (6))){
var inst_15841 = (state_15910[(8)]);
var inst_15889 = (state_15910[(7)]);
var inst_15891 = (state_15910[(11)]);
var inst_15889__$1 = topic_fn.call(null,inst_15841);
var inst_15890 = cljs.core.deref.call(null,mults);
var inst_15891__$1 = cljs.core.get.call(null,inst_15890,inst_15889__$1);
var state_15910__$1 = (function (){var statearr_15926 = state_15910;
(statearr_15926[(7)] = inst_15889__$1);

(statearr_15926[(11)] = inst_15891__$1);

return statearr_15926;
})();
if(cljs.core.truth_(inst_15891__$1)){
var statearr_15927_15975 = state_15910__$1;
(statearr_15927_15975[(1)] = (19));

} else {
var statearr_15928_15976 = state_15910__$1;
(statearr_15928_15976[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (25))){
var inst_15900 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15929_15977 = state_15910__$1;
(statearr_15929_15977[(2)] = inst_15900);

(statearr_15929_15977[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (17))){
var inst_15865 = (state_15910[(10)]);
var inst_15874 = cljs.core.first.call(null,inst_15865);
var inst_15875 = cljs.core.async.muxch_STAR_.call(null,inst_15874);
var inst_15876 = cljs.core.async.close_BANG_.call(null,inst_15875);
var inst_15877 = cljs.core.next.call(null,inst_15865);
var inst_15851 = inst_15877;
var inst_15852 = null;
var inst_15853 = (0);
var inst_15854 = (0);
var state_15910__$1 = (function (){var statearr_15930 = state_15910;
(statearr_15930[(12)] = inst_15852);

(statearr_15930[(13)] = inst_15853);

(statearr_15930[(14)] = inst_15851);

(statearr_15930[(15)] = inst_15876);

(statearr_15930[(16)] = inst_15854);

return statearr_15930;
})();
var statearr_15931_15978 = state_15910__$1;
(statearr_15931_15978[(2)] = null);

(statearr_15931_15978[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (3))){
var inst_15908 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15910__$1,inst_15908);
} else {
if((state_val_15911 === (12))){
var inst_15885 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15932_15979 = state_15910__$1;
(statearr_15932_15979[(2)] = inst_15885);

(statearr_15932_15979[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (2))){
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15910__$1,(4),ch);
} else {
if((state_val_15911 === (23))){
var state_15910__$1 = state_15910;
var statearr_15933_15980 = state_15910__$1;
(statearr_15933_15980[(2)] = null);

(statearr_15933_15980[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (19))){
var inst_15841 = (state_15910[(8)]);
var inst_15891 = (state_15910[(11)]);
var inst_15893 = cljs.core.async.muxch_STAR_.call(null,inst_15891);
var state_15910__$1 = state_15910;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15910__$1,(22),inst_15893,inst_15841);
} else {
if((state_val_15911 === (11))){
var inst_15851 = (state_15910[(14)]);
var inst_15865 = (state_15910[(10)]);
var inst_15865__$1 = cljs.core.seq.call(null,inst_15851);
var state_15910__$1 = (function (){var statearr_15934 = state_15910;
(statearr_15934[(10)] = inst_15865__$1);

return statearr_15934;
})();
if(inst_15865__$1){
var statearr_15935_15981 = state_15910__$1;
(statearr_15935_15981[(1)] = (13));

} else {
var statearr_15936_15982 = state_15910__$1;
(statearr_15936_15982[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (9))){
var inst_15887 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15937_15983 = state_15910__$1;
(statearr_15937_15983[(2)] = inst_15887);

(statearr_15937_15983[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (5))){
var inst_15848 = cljs.core.deref.call(null,mults);
var inst_15849 = cljs.core.vals.call(null,inst_15848);
var inst_15850 = cljs.core.seq.call(null,inst_15849);
var inst_15851 = inst_15850;
var inst_15852 = null;
var inst_15853 = (0);
var inst_15854 = (0);
var state_15910__$1 = (function (){var statearr_15938 = state_15910;
(statearr_15938[(12)] = inst_15852);

(statearr_15938[(13)] = inst_15853);

(statearr_15938[(14)] = inst_15851);

(statearr_15938[(16)] = inst_15854);

return statearr_15938;
})();
var statearr_15939_15984 = state_15910__$1;
(statearr_15939_15984[(2)] = null);

(statearr_15939_15984[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (14))){
var state_15910__$1 = state_15910;
var statearr_15943_15985 = state_15910__$1;
(statearr_15943_15985[(2)] = null);

(statearr_15943_15985[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (16))){
var inst_15865 = (state_15910[(10)]);
var inst_15869 = cljs.core.chunk_first.call(null,inst_15865);
var inst_15870 = cljs.core.chunk_rest.call(null,inst_15865);
var inst_15871 = cljs.core.count.call(null,inst_15869);
var inst_15851 = inst_15870;
var inst_15852 = inst_15869;
var inst_15853 = inst_15871;
var inst_15854 = (0);
var state_15910__$1 = (function (){var statearr_15944 = state_15910;
(statearr_15944[(12)] = inst_15852);

(statearr_15944[(13)] = inst_15853);

(statearr_15944[(14)] = inst_15851);

(statearr_15944[(16)] = inst_15854);

return statearr_15944;
})();
var statearr_15945_15986 = state_15910__$1;
(statearr_15945_15986[(2)] = null);

(statearr_15945_15986[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (10))){
var inst_15852 = (state_15910[(12)]);
var inst_15853 = (state_15910[(13)]);
var inst_15851 = (state_15910[(14)]);
var inst_15854 = (state_15910[(16)]);
var inst_15859 = cljs.core._nth.call(null,inst_15852,inst_15854);
var inst_15860 = cljs.core.async.muxch_STAR_.call(null,inst_15859);
var inst_15861 = cljs.core.async.close_BANG_.call(null,inst_15860);
var inst_15862 = (inst_15854 + (1));
var tmp15940 = inst_15852;
var tmp15941 = inst_15853;
var tmp15942 = inst_15851;
var inst_15851__$1 = tmp15942;
var inst_15852__$1 = tmp15940;
var inst_15853__$1 = tmp15941;
var inst_15854__$1 = inst_15862;
var state_15910__$1 = (function (){var statearr_15946 = state_15910;
(statearr_15946[(12)] = inst_15852__$1);

(statearr_15946[(13)] = inst_15853__$1);

(statearr_15946[(14)] = inst_15851__$1);

(statearr_15946[(17)] = inst_15861);

(statearr_15946[(16)] = inst_15854__$1);

return statearr_15946;
})();
var statearr_15947_15987 = state_15910__$1;
(statearr_15947_15987[(2)] = null);

(statearr_15947_15987[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (18))){
var inst_15880 = (state_15910[(2)]);
var state_15910__$1 = state_15910;
var statearr_15948_15988 = state_15910__$1;
(statearr_15948_15988[(2)] = inst_15880);

(statearr_15948_15988[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_15911 === (8))){
var inst_15853 = (state_15910[(13)]);
var inst_15854 = (state_15910[(16)]);
var inst_15856 = (inst_15854 < inst_15853);
var inst_15857 = inst_15856;
var state_15910__$1 = state_15910;
if(cljs.core.truth_(inst_15857)){
var statearr_15949_15989 = state_15910__$1;
(statearr_15949_15989[(1)] = (10));

} else {
var statearr_15950_15990 = state_15910__$1;
(statearr_15950_15990[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___15962,mults,ensure_mult,p))
;
return ((function (switch__7187__auto__,c__7252__auto___15962,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_15954 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_15954[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_15954[(1)] = (1));

return statearr_15954;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_15910){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_15910);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e15955){if((e15955 instanceof Object)){
var ex__7191__auto__ = e15955;
var statearr_15956_15991 = state_15910;
(statearr_15956_15991[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15910);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e15955;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__15992 = state_15910;
state_15910 = G__15992;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_15910){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_15910);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___15962,mults,ensure_mult,p))
})();
var state__7254__auto__ = (function (){var statearr_15957 = f__7253__auto__.call(null);
(statearr_15957[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___15962);

return statearr_15957;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___15962,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args15993 = [];
var len__5712__auto___15996 = arguments.length;
var i__5713__auto___15997 = (0);
while(true){
if((i__5713__auto___15997 < len__5712__auto___15996)){
args15993.push((arguments[i__5713__auto___15997]));

var G__15998 = (i__5713__auto___15997 + (1));
i__5713__auto___15997 = G__15998;
continue;
} else {
}
break;
}

var G__15995 = args15993.length;
switch (G__15995) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args15993.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args16000 = [];
var len__5712__auto___16003 = arguments.length;
var i__5713__auto___16004 = (0);
while(true){
if((i__5713__auto___16004 < len__5712__auto___16003)){
args16000.push((arguments[i__5713__auto___16004]));

var G__16005 = (i__5713__auto___16004 + (1));
i__5713__auto___16004 = G__16005;
continue;
} else {
}
break;
}

var G__16002 = args16000.length;
switch (G__16002) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16000.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args16007 = [];
var len__5712__auto___16078 = arguments.length;
var i__5713__auto___16079 = (0);
while(true){
if((i__5713__auto___16079 < len__5712__auto___16078)){
args16007.push((arguments[i__5713__auto___16079]));

var G__16080 = (i__5713__auto___16079 + (1));
i__5713__auto___16079 = G__16080;
continue;
} else {
}
break;
}

var G__16009 = args16007.length;
switch (G__16009) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16007.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__7252__auto___16082 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___16082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___16082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16048){
var state_val_16049 = (state_16048[(1)]);
if((state_val_16049 === (7))){
var state_16048__$1 = state_16048;
var statearr_16050_16083 = state_16048__$1;
(statearr_16050_16083[(2)] = null);

(statearr_16050_16083[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (1))){
var state_16048__$1 = state_16048;
var statearr_16051_16084 = state_16048__$1;
(statearr_16051_16084[(2)] = null);

(statearr_16051_16084[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (4))){
var inst_16012 = (state_16048[(7)]);
var inst_16014 = (inst_16012 < cnt);
var state_16048__$1 = state_16048;
if(cljs.core.truth_(inst_16014)){
var statearr_16052_16085 = state_16048__$1;
(statearr_16052_16085[(1)] = (6));

} else {
var statearr_16053_16086 = state_16048__$1;
(statearr_16053_16086[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (15))){
var inst_16044 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
var statearr_16054_16087 = state_16048__$1;
(statearr_16054_16087[(2)] = inst_16044);

(statearr_16054_16087[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (13))){
var inst_16037 = cljs.core.async.close_BANG_.call(null,out);
var state_16048__$1 = state_16048;
var statearr_16055_16088 = state_16048__$1;
(statearr_16055_16088[(2)] = inst_16037);

(statearr_16055_16088[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (6))){
var state_16048__$1 = state_16048;
var statearr_16056_16089 = state_16048__$1;
(statearr_16056_16089[(2)] = null);

(statearr_16056_16089[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (3))){
var inst_16046 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16048__$1,inst_16046);
} else {
if((state_val_16049 === (12))){
var inst_16034 = (state_16048[(8)]);
var inst_16034__$1 = (state_16048[(2)]);
var inst_16035 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16034__$1);
var state_16048__$1 = (function (){var statearr_16057 = state_16048;
(statearr_16057[(8)] = inst_16034__$1);

return statearr_16057;
})();
if(cljs.core.truth_(inst_16035)){
var statearr_16058_16090 = state_16048__$1;
(statearr_16058_16090[(1)] = (13));

} else {
var statearr_16059_16091 = state_16048__$1;
(statearr_16059_16091[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (2))){
var inst_16011 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_16012 = (0);
var state_16048__$1 = (function (){var statearr_16060 = state_16048;
(statearr_16060[(9)] = inst_16011);

(statearr_16060[(7)] = inst_16012);

return statearr_16060;
})();
var statearr_16061_16092 = state_16048__$1;
(statearr_16061_16092[(2)] = null);

(statearr_16061_16092[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (11))){
var inst_16012 = (state_16048[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16048,(10),Object,null,(9));
var inst_16021 = chs__$1.call(null,inst_16012);
var inst_16022 = done.call(null,inst_16012);
var inst_16023 = cljs.core.async.take_BANG_.call(null,inst_16021,inst_16022);
var state_16048__$1 = state_16048;
var statearr_16062_16093 = state_16048__$1;
(statearr_16062_16093[(2)] = inst_16023);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (9))){
var inst_16012 = (state_16048[(7)]);
var inst_16025 = (state_16048[(2)]);
var inst_16026 = (inst_16012 + (1));
var inst_16012__$1 = inst_16026;
var state_16048__$1 = (function (){var statearr_16063 = state_16048;
(statearr_16063[(10)] = inst_16025);

(statearr_16063[(7)] = inst_16012__$1);

return statearr_16063;
})();
var statearr_16064_16094 = state_16048__$1;
(statearr_16064_16094[(2)] = null);

(statearr_16064_16094[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (5))){
var inst_16032 = (state_16048[(2)]);
var state_16048__$1 = (function (){var statearr_16065 = state_16048;
(statearr_16065[(11)] = inst_16032);

return statearr_16065;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16048__$1,(12),dchan);
} else {
if((state_val_16049 === (14))){
var inst_16034 = (state_16048[(8)]);
var inst_16039 = cljs.core.apply.call(null,f,inst_16034);
var state_16048__$1 = state_16048;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16048__$1,(16),out,inst_16039);
} else {
if((state_val_16049 === (16))){
var inst_16041 = (state_16048[(2)]);
var state_16048__$1 = (function (){var statearr_16066 = state_16048;
(statearr_16066[(12)] = inst_16041);

return statearr_16066;
})();
var statearr_16067_16095 = state_16048__$1;
(statearr_16067_16095[(2)] = null);

(statearr_16067_16095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (10))){
var inst_16016 = (state_16048[(2)]);
var inst_16017 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_16048__$1 = (function (){var statearr_16068 = state_16048;
(statearr_16068[(13)] = inst_16016);

return statearr_16068;
})();
var statearr_16069_16096 = state_16048__$1;
(statearr_16069_16096[(2)] = inst_16017);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16048__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16049 === (8))){
var inst_16030 = (state_16048[(2)]);
var state_16048__$1 = state_16048;
var statearr_16070_16097 = state_16048__$1;
(statearr_16070_16097[(2)] = inst_16030);

(statearr_16070_16097[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___16082,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__7187__auto__,c__7252__auto___16082,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_16074 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16074[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_16074[(1)] = (1));

return statearr_16074;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_16048){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_16048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e16075){if((e16075 instanceof Object)){
var ex__7191__auto__ = e16075;
var statearr_16076_16098 = state_16048;
(statearr_16076_16098[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16075;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16099 = state_16048;
state_16048 = G__16099;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_16048){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_16048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___16082,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__7254__auto__ = (function (){var statearr_16077 = f__7253__auto__.call(null);
(statearr_16077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___16082);

return statearr_16077;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___16082,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args16101 = [];
var len__5712__auto___16157 = arguments.length;
var i__5713__auto___16158 = (0);
while(true){
if((i__5713__auto___16158 < len__5712__auto___16157)){
args16101.push((arguments[i__5713__auto___16158]));

var G__16159 = (i__5713__auto___16158 + (1));
i__5713__auto___16158 = G__16159;
continue;
} else {
}
break;
}

var G__16103 = args16101.length;
switch (G__16103) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16101.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7252__auto___16161 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___16161,out){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___16161,out){
return (function (state_16133){
var state_val_16134 = (state_16133[(1)]);
if((state_val_16134 === (7))){
var inst_16112 = (state_16133[(7)]);
var inst_16113 = (state_16133[(8)]);
var inst_16112__$1 = (state_16133[(2)]);
var inst_16113__$1 = cljs.core.nth.call(null,inst_16112__$1,(0),null);
var inst_16114 = cljs.core.nth.call(null,inst_16112__$1,(1),null);
var inst_16115 = (inst_16113__$1 == null);
var state_16133__$1 = (function (){var statearr_16135 = state_16133;
(statearr_16135[(7)] = inst_16112__$1);

(statearr_16135[(8)] = inst_16113__$1);

(statearr_16135[(9)] = inst_16114);

return statearr_16135;
})();
if(cljs.core.truth_(inst_16115)){
var statearr_16136_16162 = state_16133__$1;
(statearr_16136_16162[(1)] = (8));

} else {
var statearr_16137_16163 = state_16133__$1;
(statearr_16137_16163[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (1))){
var inst_16104 = cljs.core.vec.call(null,chs);
var inst_16105 = inst_16104;
var state_16133__$1 = (function (){var statearr_16138 = state_16133;
(statearr_16138[(10)] = inst_16105);

return statearr_16138;
})();
var statearr_16139_16164 = state_16133__$1;
(statearr_16139_16164[(2)] = null);

(statearr_16139_16164[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (4))){
var inst_16105 = (state_16133[(10)]);
var state_16133__$1 = state_16133;
return cljs.core.async.ioc_alts_BANG_.call(null,state_16133__$1,(7),inst_16105);
} else {
if((state_val_16134 === (6))){
var inst_16129 = (state_16133[(2)]);
var state_16133__$1 = state_16133;
var statearr_16140_16165 = state_16133__$1;
(statearr_16140_16165[(2)] = inst_16129);

(statearr_16140_16165[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (3))){
var inst_16131 = (state_16133[(2)]);
var state_16133__$1 = state_16133;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16133__$1,inst_16131);
} else {
if((state_val_16134 === (2))){
var inst_16105 = (state_16133[(10)]);
var inst_16107 = cljs.core.count.call(null,inst_16105);
var inst_16108 = (inst_16107 > (0));
var state_16133__$1 = state_16133;
if(cljs.core.truth_(inst_16108)){
var statearr_16142_16166 = state_16133__$1;
(statearr_16142_16166[(1)] = (4));

} else {
var statearr_16143_16167 = state_16133__$1;
(statearr_16143_16167[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (11))){
var inst_16105 = (state_16133[(10)]);
var inst_16122 = (state_16133[(2)]);
var tmp16141 = inst_16105;
var inst_16105__$1 = tmp16141;
var state_16133__$1 = (function (){var statearr_16144 = state_16133;
(statearr_16144[(11)] = inst_16122);

(statearr_16144[(10)] = inst_16105__$1);

return statearr_16144;
})();
var statearr_16145_16168 = state_16133__$1;
(statearr_16145_16168[(2)] = null);

(statearr_16145_16168[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (9))){
var inst_16113 = (state_16133[(8)]);
var state_16133__$1 = state_16133;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16133__$1,(11),out,inst_16113);
} else {
if((state_val_16134 === (5))){
var inst_16127 = cljs.core.async.close_BANG_.call(null,out);
var state_16133__$1 = state_16133;
var statearr_16146_16169 = state_16133__$1;
(statearr_16146_16169[(2)] = inst_16127);

(statearr_16146_16169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (10))){
var inst_16125 = (state_16133[(2)]);
var state_16133__$1 = state_16133;
var statearr_16147_16170 = state_16133__$1;
(statearr_16147_16170[(2)] = inst_16125);

(statearr_16147_16170[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16134 === (8))){
var inst_16112 = (state_16133[(7)]);
var inst_16113 = (state_16133[(8)]);
var inst_16105 = (state_16133[(10)]);
var inst_16114 = (state_16133[(9)]);
var inst_16117 = (function (){var cs = inst_16105;
var vec__16110 = inst_16112;
var v = inst_16113;
var c = inst_16114;
return ((function (cs,vec__16110,v,c,inst_16112,inst_16113,inst_16105,inst_16114,state_val_16134,c__7252__auto___16161,out){
return (function (p1__16100_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__16100_SHARP_);
});
;})(cs,vec__16110,v,c,inst_16112,inst_16113,inst_16105,inst_16114,state_val_16134,c__7252__auto___16161,out))
})();
var inst_16118 = cljs.core.filterv.call(null,inst_16117,inst_16105);
var inst_16105__$1 = inst_16118;
var state_16133__$1 = (function (){var statearr_16148 = state_16133;
(statearr_16148[(10)] = inst_16105__$1);

return statearr_16148;
})();
var statearr_16149_16171 = state_16133__$1;
(statearr_16149_16171[(2)] = null);

(statearr_16149_16171[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___16161,out))
;
return ((function (switch__7187__auto__,c__7252__auto___16161,out){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_16153 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16153[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_16153[(1)] = (1));

return statearr_16153;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_16133){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_16133);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e16154){if((e16154 instanceof Object)){
var ex__7191__auto__ = e16154;
var statearr_16155_16172 = state_16133;
(statearr_16155_16172[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16133);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16154;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16173 = state_16133;
state_16133 = G__16173;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_16133){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_16133);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___16161,out))
})();
var state__7254__auto__ = (function (){var statearr_16156 = f__7253__auto__.call(null);
(statearr_16156[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___16161);

return statearr_16156;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___16161,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args16174 = [];
var len__5712__auto___16223 = arguments.length;
var i__5713__auto___16224 = (0);
while(true){
if((i__5713__auto___16224 < len__5712__auto___16223)){
args16174.push((arguments[i__5713__auto___16224]));

var G__16225 = (i__5713__auto___16224 + (1));
i__5713__auto___16224 = G__16225;
continue;
} else {
}
break;
}

var G__16176 = args16174.length;
switch (G__16176) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16174.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7252__auto___16227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___16227,out){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___16227,out){
return (function (state_16200){
var state_val_16201 = (state_16200[(1)]);
if((state_val_16201 === (7))){
var inst_16182 = (state_16200[(7)]);
var inst_16182__$1 = (state_16200[(2)]);
var inst_16183 = (inst_16182__$1 == null);
var inst_16184 = cljs.core.not.call(null,inst_16183);
var state_16200__$1 = (function (){var statearr_16202 = state_16200;
(statearr_16202[(7)] = inst_16182__$1);

return statearr_16202;
})();
if(inst_16184){
var statearr_16203_16228 = state_16200__$1;
(statearr_16203_16228[(1)] = (8));

} else {
var statearr_16204_16229 = state_16200__$1;
(statearr_16204_16229[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (1))){
var inst_16177 = (0);
var state_16200__$1 = (function (){var statearr_16205 = state_16200;
(statearr_16205[(8)] = inst_16177);

return statearr_16205;
})();
var statearr_16206_16230 = state_16200__$1;
(statearr_16206_16230[(2)] = null);

(statearr_16206_16230[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (4))){
var state_16200__$1 = state_16200;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16200__$1,(7),ch);
} else {
if((state_val_16201 === (6))){
var inst_16195 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
var statearr_16207_16231 = state_16200__$1;
(statearr_16207_16231[(2)] = inst_16195);

(statearr_16207_16231[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (3))){
var inst_16197 = (state_16200[(2)]);
var inst_16198 = cljs.core.async.close_BANG_.call(null,out);
var state_16200__$1 = (function (){var statearr_16208 = state_16200;
(statearr_16208[(9)] = inst_16197);

return statearr_16208;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16200__$1,inst_16198);
} else {
if((state_val_16201 === (2))){
var inst_16177 = (state_16200[(8)]);
var inst_16179 = (inst_16177 < n);
var state_16200__$1 = state_16200;
if(cljs.core.truth_(inst_16179)){
var statearr_16209_16232 = state_16200__$1;
(statearr_16209_16232[(1)] = (4));

} else {
var statearr_16210_16233 = state_16200__$1;
(statearr_16210_16233[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (11))){
var inst_16177 = (state_16200[(8)]);
var inst_16187 = (state_16200[(2)]);
var inst_16188 = (inst_16177 + (1));
var inst_16177__$1 = inst_16188;
var state_16200__$1 = (function (){var statearr_16211 = state_16200;
(statearr_16211[(10)] = inst_16187);

(statearr_16211[(8)] = inst_16177__$1);

return statearr_16211;
})();
var statearr_16212_16234 = state_16200__$1;
(statearr_16212_16234[(2)] = null);

(statearr_16212_16234[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (9))){
var state_16200__$1 = state_16200;
var statearr_16213_16235 = state_16200__$1;
(statearr_16213_16235[(2)] = null);

(statearr_16213_16235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (5))){
var state_16200__$1 = state_16200;
var statearr_16214_16236 = state_16200__$1;
(statearr_16214_16236[(2)] = null);

(statearr_16214_16236[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (10))){
var inst_16192 = (state_16200[(2)]);
var state_16200__$1 = state_16200;
var statearr_16215_16237 = state_16200__$1;
(statearr_16215_16237[(2)] = inst_16192);

(statearr_16215_16237[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16201 === (8))){
var inst_16182 = (state_16200[(7)]);
var state_16200__$1 = state_16200;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16200__$1,(11),out,inst_16182);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___16227,out))
;
return ((function (switch__7187__auto__,c__7252__auto___16227,out){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_16219 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16219[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_16219[(1)] = (1));

return statearr_16219;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_16200){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_16200);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e16220){if((e16220 instanceof Object)){
var ex__7191__auto__ = e16220;
var statearr_16221_16238 = state_16200;
(statearr_16221_16238[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16200);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16239 = state_16200;
state_16200 = G__16239;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_16200){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_16200);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___16227,out))
})();
var state__7254__auto__ = (function (){var statearr_16222 = f__7253__auto__.call(null);
(statearr_16222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___16227);

return statearr_16222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___16227,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16247 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16247 = (function (map_LT_,f,ch,meta16248){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16248 = meta16248;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16249,meta16248__$1){
var self__ = this;
var _16249__$1 = this;
return (new cljs.core.async.t_cljs$core$async16247(self__.map_LT_,self__.f,self__.ch,meta16248__$1));
});

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16249){
var self__ = this;
var _16249__$1 = this;
return self__.meta16248;
});

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async16250 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16250 = (function (map_LT_,f,ch,meta16248,_,fn1,meta16251){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta16248 = meta16248;
this._ = _;
this.fn1 = fn1;
this.meta16251 = meta16251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16252,meta16251__$1){
var self__ = this;
var _16252__$1 = this;
return (new cljs.core.async.t_cljs$core$async16250(self__.map_LT_,self__.f,self__.ch,self__.meta16248,self__._,self__.fn1,meta16251__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async16250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16252){
var self__ = this;
var _16252__$1 = this;
return self__.meta16251;
});})(___$1))
;

cljs.core.async.t_cljs$core$async16250.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async16250.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16250.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__16240_SHARP_){
return f1.call(null,(((p1__16240_SHARP_ == null))?null:self__.f.call(null,p1__16240_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async16250.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16248","meta16248",671805351,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async16247","cljs.core.async/t_cljs$core$async16247",1407317147,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta16251","meta16251",-2144310745,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async16250.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16250.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16250";

cljs.core.async.t_cljs$core$async16250.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async16250");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async16250 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16250(map_LT___$1,f__$1,ch__$1,meta16248__$1,___$2,fn1__$1,meta16251){
return (new cljs.core.async.t_cljs$core$async16250(map_LT___$1,f__$1,ch__$1,meta16248__$1,___$2,fn1__$1,meta16251));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async16250(self__.map_LT_,self__.f,self__.ch,self__.meta16248,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4642__auto__ = ret;
if(cljs.core.truth_(and__4642__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__4642__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16247.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async16247.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16248","meta16248",671805351,null)], null);
});

cljs.core.async.t_cljs$core$async16247.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16247.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16247";

cljs.core.async.t_cljs$core$async16247.cljs$lang$ctorPrWriter = (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async16247");
});

cljs.core.async.__GT_t_cljs$core$async16247 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async16247(map_LT___$1,f__$1,ch__$1,meta16248){
return (new cljs.core.async.t_cljs$core$async16247(map_LT___$1,f__$1,ch__$1,meta16248));
});

}

return (new cljs.core.async.t_cljs$core$async16247(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async16256 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16256 = (function (map_GT_,f,ch,meta16257){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta16257 = meta16257;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16258,meta16257__$1){
var self__ = this;
var _16258__$1 = this;
return (new cljs.core.async.t_cljs$core$async16256(self__.map_GT_,self__.f,self__.ch,meta16257__$1));
});

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16258){
var self__ = this;
var _16258__$1 = this;
return self__.meta16257;
});

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16256.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async16256.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16257","meta16257",696547021,null)], null);
});

cljs.core.async.t_cljs$core$async16256.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16256.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16256";

cljs.core.async.t_cljs$core$async16256.cljs$lang$ctorPrWriter = (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async16256");
});

cljs.core.async.__GT_t_cljs$core$async16256 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async16256(map_GT___$1,f__$1,ch__$1,meta16257){
return (new cljs.core.async.t_cljs$core$async16256(map_GT___$1,f__$1,ch__$1,meta16257));
});

}

return (new cljs.core.async.t_cljs$core$async16256(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async16262 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async16262 = (function (filter_GT_,p,ch,meta16263){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta16263 = meta16263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16264,meta16263__$1){
var self__ = this;
var _16264__$1 = this;
return (new cljs.core.async.t_cljs$core$async16262(self__.filter_GT_,self__.p,self__.ch,meta16263__$1));
});

cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16264){
var self__ = this;
var _16264__$1 = this;
return self__.meta16263;
});

cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async16262.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async16262.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta16263","meta16263",-903947025,null)], null);
});

cljs.core.async.t_cljs$core$async16262.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async16262.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async16262";

cljs.core.async.t_cljs$core$async16262.cljs$lang$ctorPrWriter = (function (this__5252__auto__,writer__5253__auto__,opt__5254__auto__){
return cljs.core._write.call(null,writer__5253__auto__,"cljs.core.async/t_cljs$core$async16262");
});

cljs.core.async.__GT_t_cljs$core$async16262 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async16262(filter_GT___$1,p__$1,ch__$1,meta16263){
return (new cljs.core.async.t_cljs$core$async16262(filter_GT___$1,p__$1,ch__$1,meta16263));
});

}

return (new cljs.core.async.t_cljs$core$async16262(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args16265 = [];
var len__5712__auto___16309 = arguments.length;
var i__5713__auto___16310 = (0);
while(true){
if((i__5713__auto___16310 < len__5712__auto___16309)){
args16265.push((arguments[i__5713__auto___16310]));

var G__16311 = (i__5713__auto___16310 + (1));
i__5713__auto___16310 = G__16311;
continue;
} else {
}
break;
}

var G__16267 = args16265.length;
switch (G__16267) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16265.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7252__auto___16313 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___16313,out){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___16313,out){
return (function (state_16288){
var state_val_16289 = (state_16288[(1)]);
if((state_val_16289 === (7))){
var inst_16284 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
var statearr_16290_16314 = state_16288__$1;
(statearr_16290_16314[(2)] = inst_16284);

(statearr_16290_16314[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (1))){
var state_16288__$1 = state_16288;
var statearr_16291_16315 = state_16288__$1;
(statearr_16291_16315[(2)] = null);

(statearr_16291_16315[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (4))){
var inst_16270 = (state_16288[(7)]);
var inst_16270__$1 = (state_16288[(2)]);
var inst_16271 = (inst_16270__$1 == null);
var state_16288__$1 = (function (){var statearr_16292 = state_16288;
(statearr_16292[(7)] = inst_16270__$1);

return statearr_16292;
})();
if(cljs.core.truth_(inst_16271)){
var statearr_16293_16316 = state_16288__$1;
(statearr_16293_16316[(1)] = (5));

} else {
var statearr_16294_16317 = state_16288__$1;
(statearr_16294_16317[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (6))){
var inst_16270 = (state_16288[(7)]);
var inst_16275 = p.call(null,inst_16270);
var state_16288__$1 = state_16288;
if(cljs.core.truth_(inst_16275)){
var statearr_16295_16318 = state_16288__$1;
(statearr_16295_16318[(1)] = (8));

} else {
var statearr_16296_16319 = state_16288__$1;
(statearr_16296_16319[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (3))){
var inst_16286 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16288__$1,inst_16286);
} else {
if((state_val_16289 === (2))){
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16288__$1,(4),ch);
} else {
if((state_val_16289 === (11))){
var inst_16278 = (state_16288[(2)]);
var state_16288__$1 = state_16288;
var statearr_16297_16320 = state_16288__$1;
(statearr_16297_16320[(2)] = inst_16278);

(statearr_16297_16320[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (9))){
var state_16288__$1 = state_16288;
var statearr_16298_16321 = state_16288__$1;
(statearr_16298_16321[(2)] = null);

(statearr_16298_16321[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (5))){
var inst_16273 = cljs.core.async.close_BANG_.call(null,out);
var state_16288__$1 = state_16288;
var statearr_16299_16322 = state_16288__$1;
(statearr_16299_16322[(2)] = inst_16273);

(statearr_16299_16322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (10))){
var inst_16281 = (state_16288[(2)]);
var state_16288__$1 = (function (){var statearr_16300 = state_16288;
(statearr_16300[(8)] = inst_16281);

return statearr_16300;
})();
var statearr_16301_16323 = state_16288__$1;
(statearr_16301_16323[(2)] = null);

(statearr_16301_16323[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16289 === (8))){
var inst_16270 = (state_16288[(7)]);
var state_16288__$1 = state_16288;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16288__$1,(11),out,inst_16270);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___16313,out))
;
return ((function (switch__7187__auto__,c__7252__auto___16313,out){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_16305 = [null,null,null,null,null,null,null,null,null];
(statearr_16305[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_16305[(1)] = (1));

return statearr_16305;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_16288){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_16288);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e16306){if((e16306 instanceof Object)){
var ex__7191__auto__ = e16306;
var statearr_16307_16324 = state_16288;
(statearr_16307_16324[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16288);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16306;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16325 = state_16288;
state_16288 = G__16325;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_16288){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_16288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___16313,out))
})();
var state__7254__auto__ = (function (){var statearr_16308 = f__7253__auto__.call(null);
(statearr_16308[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___16313);

return statearr_16308;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___16313,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args16326 = [];
var len__5712__auto___16329 = arguments.length;
var i__5713__auto___16330 = (0);
while(true){
if((i__5713__auto___16330 < len__5712__auto___16329)){
args16326.push((arguments[i__5713__auto___16330]));

var G__16331 = (i__5713__auto___16330 + (1));
i__5713__auto___16330 = G__16331;
continue;
} else {
}
break;
}

var G__16328 = args16326.length;
switch (G__16328) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16326.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__){
return (function (state_16498){
var state_val_16499 = (state_16498[(1)]);
if((state_val_16499 === (7))){
var inst_16494 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16500_16541 = state_16498__$1;
(statearr_16500_16541[(2)] = inst_16494);

(statearr_16500_16541[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (20))){
var inst_16464 = (state_16498[(7)]);
var inst_16475 = (state_16498[(2)]);
var inst_16476 = cljs.core.next.call(null,inst_16464);
var inst_16450 = inst_16476;
var inst_16451 = null;
var inst_16452 = (0);
var inst_16453 = (0);
var state_16498__$1 = (function (){var statearr_16501 = state_16498;
(statearr_16501[(8)] = inst_16452);

(statearr_16501[(9)] = inst_16450);

(statearr_16501[(10)] = inst_16453);

(statearr_16501[(11)] = inst_16451);

(statearr_16501[(12)] = inst_16475);

return statearr_16501;
})();
var statearr_16502_16542 = state_16498__$1;
(statearr_16502_16542[(2)] = null);

(statearr_16502_16542[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (1))){
var state_16498__$1 = state_16498;
var statearr_16503_16543 = state_16498__$1;
(statearr_16503_16543[(2)] = null);

(statearr_16503_16543[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (4))){
var inst_16439 = (state_16498[(13)]);
var inst_16439__$1 = (state_16498[(2)]);
var inst_16440 = (inst_16439__$1 == null);
var state_16498__$1 = (function (){var statearr_16504 = state_16498;
(statearr_16504[(13)] = inst_16439__$1);

return statearr_16504;
})();
if(cljs.core.truth_(inst_16440)){
var statearr_16505_16544 = state_16498__$1;
(statearr_16505_16544[(1)] = (5));

} else {
var statearr_16506_16545 = state_16498__$1;
(statearr_16506_16545[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (15))){
var state_16498__$1 = state_16498;
var statearr_16510_16546 = state_16498__$1;
(statearr_16510_16546[(2)] = null);

(statearr_16510_16546[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (21))){
var state_16498__$1 = state_16498;
var statearr_16511_16547 = state_16498__$1;
(statearr_16511_16547[(2)] = null);

(statearr_16511_16547[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (13))){
var inst_16452 = (state_16498[(8)]);
var inst_16450 = (state_16498[(9)]);
var inst_16453 = (state_16498[(10)]);
var inst_16451 = (state_16498[(11)]);
var inst_16460 = (state_16498[(2)]);
var inst_16461 = (inst_16453 + (1));
var tmp16507 = inst_16452;
var tmp16508 = inst_16450;
var tmp16509 = inst_16451;
var inst_16450__$1 = tmp16508;
var inst_16451__$1 = tmp16509;
var inst_16452__$1 = tmp16507;
var inst_16453__$1 = inst_16461;
var state_16498__$1 = (function (){var statearr_16512 = state_16498;
(statearr_16512[(8)] = inst_16452__$1);

(statearr_16512[(9)] = inst_16450__$1);

(statearr_16512[(10)] = inst_16453__$1);

(statearr_16512[(11)] = inst_16451__$1);

(statearr_16512[(14)] = inst_16460);

return statearr_16512;
})();
var statearr_16513_16548 = state_16498__$1;
(statearr_16513_16548[(2)] = null);

(statearr_16513_16548[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (22))){
var state_16498__$1 = state_16498;
var statearr_16514_16549 = state_16498__$1;
(statearr_16514_16549[(2)] = null);

(statearr_16514_16549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (6))){
var inst_16439 = (state_16498[(13)]);
var inst_16448 = f.call(null,inst_16439);
var inst_16449 = cljs.core.seq.call(null,inst_16448);
var inst_16450 = inst_16449;
var inst_16451 = null;
var inst_16452 = (0);
var inst_16453 = (0);
var state_16498__$1 = (function (){var statearr_16515 = state_16498;
(statearr_16515[(8)] = inst_16452);

(statearr_16515[(9)] = inst_16450);

(statearr_16515[(10)] = inst_16453);

(statearr_16515[(11)] = inst_16451);

return statearr_16515;
})();
var statearr_16516_16550 = state_16498__$1;
(statearr_16516_16550[(2)] = null);

(statearr_16516_16550[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (17))){
var inst_16464 = (state_16498[(7)]);
var inst_16468 = cljs.core.chunk_first.call(null,inst_16464);
var inst_16469 = cljs.core.chunk_rest.call(null,inst_16464);
var inst_16470 = cljs.core.count.call(null,inst_16468);
var inst_16450 = inst_16469;
var inst_16451 = inst_16468;
var inst_16452 = inst_16470;
var inst_16453 = (0);
var state_16498__$1 = (function (){var statearr_16517 = state_16498;
(statearr_16517[(8)] = inst_16452);

(statearr_16517[(9)] = inst_16450);

(statearr_16517[(10)] = inst_16453);

(statearr_16517[(11)] = inst_16451);

return statearr_16517;
})();
var statearr_16518_16551 = state_16498__$1;
(statearr_16518_16551[(2)] = null);

(statearr_16518_16551[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (3))){
var inst_16496 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16498__$1,inst_16496);
} else {
if((state_val_16499 === (12))){
var inst_16484 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16519_16552 = state_16498__$1;
(statearr_16519_16552[(2)] = inst_16484);

(statearr_16519_16552[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (2))){
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16498__$1,(4),in$);
} else {
if((state_val_16499 === (23))){
var inst_16492 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16520_16553 = state_16498__$1;
(statearr_16520_16553[(2)] = inst_16492);

(statearr_16520_16553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (19))){
var inst_16479 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16521_16554 = state_16498__$1;
(statearr_16521_16554[(2)] = inst_16479);

(statearr_16521_16554[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (11))){
var inst_16450 = (state_16498[(9)]);
var inst_16464 = (state_16498[(7)]);
var inst_16464__$1 = cljs.core.seq.call(null,inst_16450);
var state_16498__$1 = (function (){var statearr_16522 = state_16498;
(statearr_16522[(7)] = inst_16464__$1);

return statearr_16522;
})();
if(inst_16464__$1){
var statearr_16523_16555 = state_16498__$1;
(statearr_16523_16555[(1)] = (14));

} else {
var statearr_16524_16556 = state_16498__$1;
(statearr_16524_16556[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (9))){
var inst_16486 = (state_16498[(2)]);
var inst_16487 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_16498__$1 = (function (){var statearr_16525 = state_16498;
(statearr_16525[(15)] = inst_16486);

return statearr_16525;
})();
if(cljs.core.truth_(inst_16487)){
var statearr_16526_16557 = state_16498__$1;
(statearr_16526_16557[(1)] = (21));

} else {
var statearr_16527_16558 = state_16498__$1;
(statearr_16527_16558[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (5))){
var inst_16442 = cljs.core.async.close_BANG_.call(null,out);
var state_16498__$1 = state_16498;
var statearr_16528_16559 = state_16498__$1;
(statearr_16528_16559[(2)] = inst_16442);

(statearr_16528_16559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (14))){
var inst_16464 = (state_16498[(7)]);
var inst_16466 = cljs.core.chunked_seq_QMARK_.call(null,inst_16464);
var state_16498__$1 = state_16498;
if(inst_16466){
var statearr_16529_16560 = state_16498__$1;
(statearr_16529_16560[(1)] = (17));

} else {
var statearr_16530_16561 = state_16498__$1;
(statearr_16530_16561[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (16))){
var inst_16482 = (state_16498[(2)]);
var state_16498__$1 = state_16498;
var statearr_16531_16562 = state_16498__$1;
(statearr_16531_16562[(2)] = inst_16482);

(statearr_16531_16562[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16499 === (10))){
var inst_16453 = (state_16498[(10)]);
var inst_16451 = (state_16498[(11)]);
var inst_16458 = cljs.core._nth.call(null,inst_16451,inst_16453);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16498__$1,(13),out,inst_16458);
} else {
if((state_val_16499 === (18))){
var inst_16464 = (state_16498[(7)]);
var inst_16473 = cljs.core.first.call(null,inst_16464);
var state_16498__$1 = state_16498;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16498__$1,(20),out,inst_16473);
} else {
if((state_val_16499 === (8))){
var inst_16452 = (state_16498[(8)]);
var inst_16453 = (state_16498[(10)]);
var inst_16455 = (inst_16453 < inst_16452);
var inst_16456 = inst_16455;
var state_16498__$1 = state_16498;
if(cljs.core.truth_(inst_16456)){
var statearr_16532_16563 = state_16498__$1;
(statearr_16532_16563[(1)] = (10));

} else {
var statearr_16533_16564 = state_16498__$1;
(statearr_16533_16564[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto__))
;
return ((function (switch__7187__auto__,c__7252__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__7188__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__7188__auto____0 = (function (){
var statearr_16537 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16537[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__7188__auto__);

(statearr_16537[(1)] = (1));

return statearr_16537;
});
var cljs$core$async$mapcat_STAR__$_state_machine__7188__auto____1 = (function (state_16498){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_16498);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e16538){if((e16538 instanceof Object)){
var ex__7191__auto__ = e16538;
var statearr_16539_16565 = state_16498;
(statearr_16539_16565[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16498);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16538;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16566 = state_16498;
state_16498 = G__16566;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__7188__auto__ = function(state_16498){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__7188__auto____1.call(this,state_16498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__7188__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__7188__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__))
})();
var state__7254__auto__ = (function (){var statearr_16540 = f__7253__auto__.call(null);
(statearr_16540[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_16540;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__))
);

return c__7252__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args16567 = [];
var len__5712__auto___16570 = arguments.length;
var i__5713__auto___16571 = (0);
while(true){
if((i__5713__auto___16571 < len__5712__auto___16570)){
args16567.push((arguments[i__5713__auto___16571]));

var G__16572 = (i__5713__auto___16571 + (1));
i__5713__auto___16571 = G__16572;
continue;
} else {
}
break;
}

var G__16569 = args16567.length;
switch (G__16569) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16567.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args16574 = [];
var len__5712__auto___16577 = arguments.length;
var i__5713__auto___16578 = (0);
while(true){
if((i__5713__auto___16578 < len__5712__auto___16577)){
args16574.push((arguments[i__5713__auto___16578]));

var G__16579 = (i__5713__auto___16578 + (1));
i__5713__auto___16578 = G__16579;
continue;
} else {
}
break;
}

var G__16576 = args16574.length;
switch (G__16576) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16574.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args16581 = [];
var len__5712__auto___16632 = arguments.length;
var i__5713__auto___16633 = (0);
while(true){
if((i__5713__auto___16633 < len__5712__auto___16632)){
args16581.push((arguments[i__5713__auto___16633]));

var G__16634 = (i__5713__auto___16633 + (1));
i__5713__auto___16633 = G__16634;
continue;
} else {
}
break;
}

var G__16583 = args16581.length;
switch (G__16583) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16581.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7252__auto___16636 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___16636,out){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___16636,out){
return (function (state_16607){
var state_val_16608 = (state_16607[(1)]);
if((state_val_16608 === (7))){
var inst_16602 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
var statearr_16609_16637 = state_16607__$1;
(statearr_16609_16637[(2)] = inst_16602);

(statearr_16609_16637[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (1))){
var inst_16584 = null;
var state_16607__$1 = (function (){var statearr_16610 = state_16607;
(statearr_16610[(7)] = inst_16584);

return statearr_16610;
})();
var statearr_16611_16638 = state_16607__$1;
(statearr_16611_16638[(2)] = null);

(statearr_16611_16638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (4))){
var inst_16587 = (state_16607[(8)]);
var inst_16587__$1 = (state_16607[(2)]);
var inst_16588 = (inst_16587__$1 == null);
var inst_16589 = cljs.core.not.call(null,inst_16588);
var state_16607__$1 = (function (){var statearr_16612 = state_16607;
(statearr_16612[(8)] = inst_16587__$1);

return statearr_16612;
})();
if(inst_16589){
var statearr_16613_16639 = state_16607__$1;
(statearr_16613_16639[(1)] = (5));

} else {
var statearr_16614_16640 = state_16607__$1;
(statearr_16614_16640[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (6))){
var state_16607__$1 = state_16607;
var statearr_16615_16641 = state_16607__$1;
(statearr_16615_16641[(2)] = null);

(statearr_16615_16641[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (3))){
var inst_16604 = (state_16607[(2)]);
var inst_16605 = cljs.core.async.close_BANG_.call(null,out);
var state_16607__$1 = (function (){var statearr_16616 = state_16607;
(statearr_16616[(9)] = inst_16604);

return statearr_16616;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16607__$1,inst_16605);
} else {
if((state_val_16608 === (2))){
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16607__$1,(4),ch);
} else {
if((state_val_16608 === (11))){
var inst_16587 = (state_16607[(8)]);
var inst_16596 = (state_16607[(2)]);
var inst_16584 = inst_16587;
var state_16607__$1 = (function (){var statearr_16617 = state_16607;
(statearr_16617[(7)] = inst_16584);

(statearr_16617[(10)] = inst_16596);

return statearr_16617;
})();
var statearr_16618_16642 = state_16607__$1;
(statearr_16618_16642[(2)] = null);

(statearr_16618_16642[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (9))){
var inst_16587 = (state_16607[(8)]);
var state_16607__$1 = state_16607;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16607__$1,(11),out,inst_16587);
} else {
if((state_val_16608 === (5))){
var inst_16584 = (state_16607[(7)]);
var inst_16587 = (state_16607[(8)]);
var inst_16591 = cljs.core._EQ_.call(null,inst_16587,inst_16584);
var state_16607__$1 = state_16607;
if(inst_16591){
var statearr_16620_16643 = state_16607__$1;
(statearr_16620_16643[(1)] = (8));

} else {
var statearr_16621_16644 = state_16607__$1;
(statearr_16621_16644[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (10))){
var inst_16599 = (state_16607[(2)]);
var state_16607__$1 = state_16607;
var statearr_16622_16645 = state_16607__$1;
(statearr_16622_16645[(2)] = inst_16599);

(statearr_16622_16645[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16608 === (8))){
var inst_16584 = (state_16607[(7)]);
var tmp16619 = inst_16584;
var inst_16584__$1 = tmp16619;
var state_16607__$1 = (function (){var statearr_16623 = state_16607;
(statearr_16623[(7)] = inst_16584__$1);

return statearr_16623;
})();
var statearr_16624_16646 = state_16607__$1;
(statearr_16624_16646[(2)] = null);

(statearr_16624_16646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___16636,out))
;
return ((function (switch__7187__auto__,c__7252__auto___16636,out){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_16628 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_16628[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_16628[(1)] = (1));

return statearr_16628;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_16607){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_16607);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e16629){if((e16629 instanceof Object)){
var ex__7191__auto__ = e16629;
var statearr_16630_16647 = state_16607;
(statearr_16630_16647[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16607);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16629;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16648 = state_16607;
state_16607 = G__16648;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_16607){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_16607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___16636,out))
})();
var state__7254__auto__ = (function (){var statearr_16631 = f__7253__auto__.call(null);
(statearr_16631[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___16636);

return statearr_16631;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___16636,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args16649 = [];
var len__5712__auto___16719 = arguments.length;
var i__5713__auto___16720 = (0);
while(true){
if((i__5713__auto___16720 < len__5712__auto___16719)){
args16649.push((arguments[i__5713__auto___16720]));

var G__16721 = (i__5713__auto___16720 + (1));
i__5713__auto___16720 = G__16721;
continue;
} else {
}
break;
}

var G__16651 = args16649.length;
switch (G__16651) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16649.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7252__auto___16723 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___16723,out){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___16723,out){
return (function (state_16689){
var state_val_16690 = (state_16689[(1)]);
if((state_val_16690 === (7))){
var inst_16685 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16691_16724 = state_16689__$1;
(statearr_16691_16724[(2)] = inst_16685);

(statearr_16691_16724[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (1))){
var inst_16652 = (new Array(n));
var inst_16653 = inst_16652;
var inst_16654 = (0);
var state_16689__$1 = (function (){var statearr_16692 = state_16689;
(statearr_16692[(7)] = inst_16653);

(statearr_16692[(8)] = inst_16654);

return statearr_16692;
})();
var statearr_16693_16725 = state_16689__$1;
(statearr_16693_16725[(2)] = null);

(statearr_16693_16725[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (4))){
var inst_16657 = (state_16689[(9)]);
var inst_16657__$1 = (state_16689[(2)]);
var inst_16658 = (inst_16657__$1 == null);
var inst_16659 = cljs.core.not.call(null,inst_16658);
var state_16689__$1 = (function (){var statearr_16694 = state_16689;
(statearr_16694[(9)] = inst_16657__$1);

return statearr_16694;
})();
if(inst_16659){
var statearr_16695_16726 = state_16689__$1;
(statearr_16695_16726[(1)] = (5));

} else {
var statearr_16696_16727 = state_16689__$1;
(statearr_16696_16727[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (15))){
var inst_16679 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16697_16728 = state_16689__$1;
(statearr_16697_16728[(2)] = inst_16679);

(statearr_16697_16728[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (13))){
var state_16689__$1 = state_16689;
var statearr_16698_16729 = state_16689__$1;
(statearr_16698_16729[(2)] = null);

(statearr_16698_16729[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (6))){
var inst_16654 = (state_16689[(8)]);
var inst_16675 = (inst_16654 > (0));
var state_16689__$1 = state_16689;
if(cljs.core.truth_(inst_16675)){
var statearr_16699_16730 = state_16689__$1;
(statearr_16699_16730[(1)] = (12));

} else {
var statearr_16700_16731 = state_16689__$1;
(statearr_16700_16731[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (3))){
var inst_16687 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16689__$1,inst_16687);
} else {
if((state_val_16690 === (12))){
var inst_16653 = (state_16689[(7)]);
var inst_16677 = cljs.core.vec.call(null,inst_16653);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16689__$1,(15),out,inst_16677);
} else {
if((state_val_16690 === (2))){
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16689__$1,(4),ch);
} else {
if((state_val_16690 === (11))){
var inst_16669 = (state_16689[(2)]);
var inst_16670 = (new Array(n));
var inst_16653 = inst_16670;
var inst_16654 = (0);
var state_16689__$1 = (function (){var statearr_16701 = state_16689;
(statearr_16701[(7)] = inst_16653);

(statearr_16701[(10)] = inst_16669);

(statearr_16701[(8)] = inst_16654);

return statearr_16701;
})();
var statearr_16702_16732 = state_16689__$1;
(statearr_16702_16732[(2)] = null);

(statearr_16702_16732[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (9))){
var inst_16653 = (state_16689[(7)]);
var inst_16667 = cljs.core.vec.call(null,inst_16653);
var state_16689__$1 = state_16689;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16689__$1,(11),out,inst_16667);
} else {
if((state_val_16690 === (5))){
var inst_16653 = (state_16689[(7)]);
var inst_16654 = (state_16689[(8)]);
var inst_16657 = (state_16689[(9)]);
var inst_16662 = (state_16689[(11)]);
var inst_16661 = (inst_16653[inst_16654] = inst_16657);
var inst_16662__$1 = (inst_16654 + (1));
var inst_16663 = (inst_16662__$1 < n);
var state_16689__$1 = (function (){var statearr_16703 = state_16689;
(statearr_16703[(12)] = inst_16661);

(statearr_16703[(11)] = inst_16662__$1);

return statearr_16703;
})();
if(cljs.core.truth_(inst_16663)){
var statearr_16704_16733 = state_16689__$1;
(statearr_16704_16733[(1)] = (8));

} else {
var statearr_16705_16734 = state_16689__$1;
(statearr_16705_16734[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (14))){
var inst_16682 = (state_16689[(2)]);
var inst_16683 = cljs.core.async.close_BANG_.call(null,out);
var state_16689__$1 = (function (){var statearr_16707 = state_16689;
(statearr_16707[(13)] = inst_16682);

return statearr_16707;
})();
var statearr_16708_16735 = state_16689__$1;
(statearr_16708_16735[(2)] = inst_16683);

(statearr_16708_16735[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (10))){
var inst_16673 = (state_16689[(2)]);
var state_16689__$1 = state_16689;
var statearr_16709_16736 = state_16689__$1;
(statearr_16709_16736[(2)] = inst_16673);

(statearr_16709_16736[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16690 === (8))){
var inst_16653 = (state_16689[(7)]);
var inst_16662 = (state_16689[(11)]);
var tmp16706 = inst_16653;
var inst_16653__$1 = tmp16706;
var inst_16654 = inst_16662;
var state_16689__$1 = (function (){var statearr_16710 = state_16689;
(statearr_16710[(7)] = inst_16653__$1);

(statearr_16710[(8)] = inst_16654);

return statearr_16710;
})();
var statearr_16711_16737 = state_16689__$1;
(statearr_16711_16737[(2)] = null);

(statearr_16711_16737[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___16723,out))
;
return ((function (switch__7187__auto__,c__7252__auto___16723,out){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_16715 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16715[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_16715[(1)] = (1));

return statearr_16715;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_16689){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_16689);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e16716){if((e16716 instanceof Object)){
var ex__7191__auto__ = e16716;
var statearr_16717_16738 = state_16689;
(statearr_16717_16738[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16689);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16716;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16739 = state_16689;
state_16689 = G__16739;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_16689){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_16689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___16723,out))
})();
var state__7254__auto__ = (function (){var statearr_16718 = f__7253__auto__.call(null);
(statearr_16718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___16723);

return statearr_16718;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___16723,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args16740 = [];
var len__5712__auto___16814 = arguments.length;
var i__5713__auto___16815 = (0);
while(true){
if((i__5713__auto___16815 < len__5712__auto___16814)){
args16740.push((arguments[i__5713__auto___16815]));

var G__16816 = (i__5713__auto___16815 + (1));
i__5713__auto___16815 = G__16816;
continue;
} else {
}
break;
}

var G__16742 = args16740.length;
switch (G__16742) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args16740.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__7252__auto___16818 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___16818,out){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___16818,out){
return (function (state_16784){
var state_val_16785 = (state_16784[(1)]);
if((state_val_16785 === (7))){
var inst_16780 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16786_16819 = state_16784__$1;
(statearr_16786_16819[(2)] = inst_16780);

(statearr_16786_16819[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (1))){
var inst_16743 = [];
var inst_16744 = inst_16743;
var inst_16745 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_16784__$1 = (function (){var statearr_16787 = state_16784;
(statearr_16787[(7)] = inst_16744);

(statearr_16787[(8)] = inst_16745);

return statearr_16787;
})();
var statearr_16788_16820 = state_16784__$1;
(statearr_16788_16820[(2)] = null);

(statearr_16788_16820[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (4))){
var inst_16748 = (state_16784[(9)]);
var inst_16748__$1 = (state_16784[(2)]);
var inst_16749 = (inst_16748__$1 == null);
var inst_16750 = cljs.core.not.call(null,inst_16749);
var state_16784__$1 = (function (){var statearr_16789 = state_16784;
(statearr_16789[(9)] = inst_16748__$1);

return statearr_16789;
})();
if(inst_16750){
var statearr_16790_16821 = state_16784__$1;
(statearr_16790_16821[(1)] = (5));

} else {
var statearr_16791_16822 = state_16784__$1;
(statearr_16791_16822[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (15))){
var inst_16774 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16792_16823 = state_16784__$1;
(statearr_16792_16823[(2)] = inst_16774);

(statearr_16792_16823[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (13))){
var state_16784__$1 = state_16784;
var statearr_16793_16824 = state_16784__$1;
(statearr_16793_16824[(2)] = null);

(statearr_16793_16824[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (6))){
var inst_16744 = (state_16784[(7)]);
var inst_16769 = inst_16744.length;
var inst_16770 = (inst_16769 > (0));
var state_16784__$1 = state_16784;
if(cljs.core.truth_(inst_16770)){
var statearr_16794_16825 = state_16784__$1;
(statearr_16794_16825[(1)] = (12));

} else {
var statearr_16795_16826 = state_16784__$1;
(statearr_16795_16826[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (3))){
var inst_16782 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16784__$1,inst_16782);
} else {
if((state_val_16785 === (12))){
var inst_16744 = (state_16784[(7)]);
var inst_16772 = cljs.core.vec.call(null,inst_16744);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16784__$1,(15),out,inst_16772);
} else {
if((state_val_16785 === (2))){
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16784__$1,(4),ch);
} else {
if((state_val_16785 === (11))){
var inst_16752 = (state_16784[(10)]);
var inst_16748 = (state_16784[(9)]);
var inst_16762 = (state_16784[(2)]);
var inst_16763 = [];
var inst_16764 = inst_16763.push(inst_16748);
var inst_16744 = inst_16763;
var inst_16745 = inst_16752;
var state_16784__$1 = (function (){var statearr_16796 = state_16784;
(statearr_16796[(7)] = inst_16744);

(statearr_16796[(11)] = inst_16762);

(statearr_16796[(8)] = inst_16745);

(statearr_16796[(12)] = inst_16764);

return statearr_16796;
})();
var statearr_16797_16827 = state_16784__$1;
(statearr_16797_16827[(2)] = null);

(statearr_16797_16827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (9))){
var inst_16744 = (state_16784[(7)]);
var inst_16760 = cljs.core.vec.call(null,inst_16744);
var state_16784__$1 = state_16784;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16784__$1,(11),out,inst_16760);
} else {
if((state_val_16785 === (5))){
var inst_16745 = (state_16784[(8)]);
var inst_16752 = (state_16784[(10)]);
var inst_16748 = (state_16784[(9)]);
var inst_16752__$1 = f.call(null,inst_16748);
var inst_16753 = cljs.core._EQ_.call(null,inst_16752__$1,inst_16745);
var inst_16754 = cljs.core.keyword_identical_QMARK_.call(null,inst_16745,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_16755 = (inst_16753) || (inst_16754);
var state_16784__$1 = (function (){var statearr_16798 = state_16784;
(statearr_16798[(10)] = inst_16752__$1);

return statearr_16798;
})();
if(cljs.core.truth_(inst_16755)){
var statearr_16799_16828 = state_16784__$1;
(statearr_16799_16828[(1)] = (8));

} else {
var statearr_16800_16829 = state_16784__$1;
(statearr_16800_16829[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (14))){
var inst_16777 = (state_16784[(2)]);
var inst_16778 = cljs.core.async.close_BANG_.call(null,out);
var state_16784__$1 = (function (){var statearr_16802 = state_16784;
(statearr_16802[(13)] = inst_16777);

return statearr_16802;
})();
var statearr_16803_16830 = state_16784__$1;
(statearr_16803_16830[(2)] = inst_16778);

(statearr_16803_16830[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (10))){
var inst_16767 = (state_16784[(2)]);
var state_16784__$1 = state_16784;
var statearr_16804_16831 = state_16784__$1;
(statearr_16804_16831[(2)] = inst_16767);

(statearr_16804_16831[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_16785 === (8))){
var inst_16744 = (state_16784[(7)]);
var inst_16752 = (state_16784[(10)]);
var inst_16748 = (state_16784[(9)]);
var inst_16757 = inst_16744.push(inst_16748);
var tmp16801 = inst_16744;
var inst_16744__$1 = tmp16801;
var inst_16745 = inst_16752;
var state_16784__$1 = (function (){var statearr_16805 = state_16784;
(statearr_16805[(7)] = inst_16744__$1);

(statearr_16805[(8)] = inst_16745);

(statearr_16805[(14)] = inst_16757);

return statearr_16805;
})();
var statearr_16806_16832 = state_16784__$1;
(statearr_16806_16832[(2)] = null);

(statearr_16806_16832[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7252__auto___16818,out))
;
return ((function (switch__7187__auto__,c__7252__auto___16818,out){
return (function() {
var cljs$core$async$state_machine__7188__auto__ = null;
var cljs$core$async$state_machine__7188__auto____0 = (function (){
var statearr_16810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_16810[(0)] = cljs$core$async$state_machine__7188__auto__);

(statearr_16810[(1)] = (1));

return statearr_16810;
});
var cljs$core$async$state_machine__7188__auto____1 = (function (state_16784){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_16784);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e16811){if((e16811 instanceof Object)){
var ex__7191__auto__ = e16811;
var statearr_16812_16833 = state_16784;
(statearr_16812_16833[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16784);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e16811;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__16834 = state_16784;
state_16784 = G__16834;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
cljs$core$async$state_machine__7188__auto__ = function(state_16784){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__7188__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__7188__auto____1.call(this,state_16784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__7188__auto____0;
cljs$core$async$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__7188__auto____1;
return cljs$core$async$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___16818,out))
})();
var state__7254__auto__ = (function (){var statearr_16813 = f__7253__auto__.call(null);
(statearr_16813[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___16818);

return statearr_16813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___16818,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map