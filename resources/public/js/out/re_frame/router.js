// Compiled by ClojureScript 1.7.122 {}
goog.provide('re_frame.router');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.handlers');
goog.require('re_frame.utils');
goog.require('cljs.core.async');
re_frame.router.event_chan = cljs.core.async.chan.call(null);
/**
 * read all pending events from the channel and drop them on the floor
 */
re_frame.router.purge_chan = (function re_frame$router$purge_chan(){
return null;
});
re_frame.router.router_loop = (function re_frame$router$router_loop(){
var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__){
return (function (state_13361){
var state_val_13362 = (state_13361[(1)]);
if((state_val_13362 === (7))){
var inst_13346 = (state_13361[(2)]);
var state_13361__$1 = (function (){var statearr_13363 = state_13361;
(statearr_13363[(7)] = inst_13346);

return statearr_13363;
})();
var statearr_13364_13384 = state_13361__$1;
(statearr_13364_13384[(2)] = null);

(statearr_13364_13384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13362 === (1))){
var state_13361__$1 = state_13361;
var statearr_13365_13385 = state_13361__$1;
(statearr_13365_13385[(2)] = null);

(statearr_13365_13385[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13362 === (4))){
var inst_13333 = (state_13361[(8)]);
var inst_13333__$1 = (state_13361[(2)]);
var inst_13334 = cljs.core.meta.call(null,inst_13333__$1);
var inst_13335 = new cljs.core.Keyword(null,"flush-dom","flush-dom",-933676816).cljs$core$IFn$_invoke$arity$1(inst_13334);
var state_13361__$1 = (function (){var statearr_13366 = state_13361;
(statearr_13366[(8)] = inst_13333__$1);

return statearr_13366;
})();
if(cljs.core.truth_(inst_13335)){
var statearr_13367_13386 = state_13361__$1;
(statearr_13367_13386[(1)] = (5));

} else {
var statearr_13368_13387 = state_13361__$1;
(statearr_13368_13387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13362 === (6))){
var inst_13342 = cljs.core.async.timeout.call(null,(0));
var state_13361__$1 = state_13361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13361__$1,(9),inst_13342);
} else {
if((state_val_13362 === (3))){
var inst_13359 = (state_13361[(2)]);
var state_13361__$1 = state_13361;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13361__$1,inst_13359);
} else {
if((state_val_13362 === (12))){
var inst_13333 = (state_13361[(8)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13361,(11),Object,null,(10));
var inst_13354 = re_frame.handlers.handle.call(null,inst_13333);
var state_13361__$1 = state_13361;
var statearr_13369_13388 = state_13361__$1;
(statearr_13369_13388[(2)] = inst_13354);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13361__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13362 === (2))){
var state_13361__$1 = state_13361;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13361__$1,(4),re_frame.router.event_chan);
} else {
if((state_val_13362 === (11))){
var inst_13347 = (state_13361[(2)]);
var inst_13348 = re_frame.router.purge_chan.call(null);
var inst_13349 = re_frame$router$router_loop.call(null);
var inst_13350 = (function(){throw inst_13347})();
var state_13361__$1 = (function (){var statearr_13370 = state_13361;
(statearr_13370[(9)] = inst_13348);

(statearr_13370[(10)] = inst_13349);

return statearr_13370;
})();
var statearr_13371_13389 = state_13361__$1;
(statearr_13371_13389[(2)] = inst_13350);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13361__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13362 === (9))){
var inst_13344 = (state_13361[(2)]);
var state_13361__$1 = state_13361;
var statearr_13372_13390 = state_13361__$1;
(statearr_13372_13390[(2)] = inst_13344);

(statearr_13372_13390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13362 === (5))){
var inst_13337 = reagent.core.flush.call(null);
var inst_13338 = cljs.core.async.timeout.call(null,(20));
var state_13361__$1 = (function (){var statearr_13373 = state_13361;
(statearr_13373[(11)] = inst_13337);

return statearr_13373;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13361__$1,(8),inst_13338);
} else {
if((state_val_13362 === (10))){
var inst_13356 = (state_13361[(2)]);
var state_13361__$1 = (function (){var statearr_13374 = state_13361;
(statearr_13374[(12)] = inst_13356);

return statearr_13374;
})();
var statearr_13375_13391 = state_13361__$1;
(statearr_13375_13391[(2)] = null);

(statearr_13375_13391[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_13362 === (8))){
var inst_13340 = (state_13361[(2)]);
var state_13361__$1 = state_13361;
var statearr_13376_13392 = state_13361__$1;
(statearr_13376_13392[(2)] = inst_13340);

(statearr_13376_13392[(1)] = (7));


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
});})(c__7252__auto__))
;
return ((function (switch__7187__auto__,c__7252__auto__){
return (function() {
var re_frame$router$router_loop_$_state_machine__7188__auto__ = null;
var re_frame$router$router_loop_$_state_machine__7188__auto____0 = (function (){
var statearr_13380 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_13380[(0)] = re_frame$router$router_loop_$_state_machine__7188__auto__);

(statearr_13380[(1)] = (1));

return statearr_13380;
});
var re_frame$router$router_loop_$_state_machine__7188__auto____1 = (function (state_13361){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_13361);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e13381){if((e13381 instanceof Object)){
var ex__7191__auto__ = e13381;
var statearr_13382_13393 = state_13361;
(statearr_13382_13393[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13361);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e13381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__13394 = state_13361;
state_13361 = G__13394;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
re_frame$router$router_loop_$_state_machine__7188__auto__ = function(state_13361){
switch(arguments.length){
case 0:
return re_frame$router$router_loop_$_state_machine__7188__auto____0.call(this);
case 1:
return re_frame$router$router_loop_$_state_machine__7188__auto____1.call(this,state_13361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
re_frame$router$router_loop_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = re_frame$router$router_loop_$_state_machine__7188__auto____0;
re_frame$router$router_loop_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = re_frame$router$router_loop_$_state_machine__7188__auto____1;
return re_frame$router$router_loop_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__))
})();
var state__7254__auto__ = (function (){var statearr_13383 = f__7253__auto__.call(null);
(statearr_13383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_13383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__))
);

return c__7252__auto__;
});
re_frame.router.router_loop.call(null);
/**
 * Send an event to be processed by the registered handler.
 * 
 *   Usage example:
 *   (dispatch [:delete-item 42])
 *   
 */
re_frame.router.dispatch = (function re_frame$router$dispatch(event_v){
if((event_v == null)){
re_frame.utils.error.call(null,"re-frame: \"dispatch\" is ignoring a nil event.");
} else {
cljs.core.async.put_BANG_.call(null,re_frame.router.event_chan,event_v);
}

return null;
});
/**
 * Send an event to be processed by the registered handler, but avoid the async-inducing
 *   use of core.async/chan.
 * 
 *   Usage example:
 *   (dispatch-sync [:delete-item 42])
 */
re_frame.router.dispatch_sync = (function re_frame$router$dispatch_sync(event_v){
re_frame.handlers.handle.call(null,event_v);

return null;
});

//# sourceMappingURL=router.js.map