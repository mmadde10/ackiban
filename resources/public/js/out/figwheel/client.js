// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__16979__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__16979 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__16980__i = 0, G__16980__a = new Array(arguments.length -  0);
while (G__16980__i < G__16980__a.length) {G__16980__a[G__16980__i] = arguments[G__16980__i + 0]; ++G__16980__i;}
  args = new cljs.core.IndexedSeq(G__16980__a,0);
} 
return G__16979__delegate.call(this,args);};
G__16979.cljs$lang$maxFixedArity = 0;
G__16979.cljs$lang$applyTo = (function (arglist__16981){
var args = cljs.core.seq(arglist__16981);
return G__16979__delegate(args);
});
G__16979.cljs$core$IFn$_invoke$arity$variadic = G__16979__delegate;
return G__16979;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__16982){
var map__16985 = p__16982;
var map__16985__$1 = ((((!((map__16985 == null)))?((((map__16985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__16985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__16985):map__16985);
var message = cljs.core.get.call(null,map__16985__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__16985__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__4654__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__4642__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__4642__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__4642__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__7252__auto___17133 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___17133,ch){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___17133,ch){
return (function (state_17103){
var state_val_17104 = (state_17103[(1)]);
if((state_val_17104 === (7))){
var inst_17099 = (state_17103[(2)]);
var state_17103__$1 = state_17103;
var statearr_17105_17134 = state_17103__$1;
(statearr_17105_17134[(2)] = inst_17099);

(statearr_17105_17134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (1))){
var state_17103__$1 = state_17103;
var statearr_17106_17135 = state_17103__$1;
(statearr_17106_17135[(2)] = null);

(statearr_17106_17135[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (4))){
var inst_17062 = (state_17103[(7)]);
var inst_17062__$1 = (state_17103[(2)]);
var state_17103__$1 = (function (){var statearr_17107 = state_17103;
(statearr_17107[(7)] = inst_17062__$1);

return statearr_17107;
})();
if(cljs.core.truth_(inst_17062__$1)){
var statearr_17108_17136 = state_17103__$1;
(statearr_17108_17136[(1)] = (5));

} else {
var statearr_17109_17137 = state_17103__$1;
(statearr_17109_17137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (15))){
var inst_17069 = (state_17103[(8)]);
var inst_17084 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_17069);
var inst_17085 = cljs.core.first.call(null,inst_17084);
var inst_17086 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_17085);
var inst_17087 = console.warn("Figwheel: Not loading code with warnings - ",inst_17086);
var state_17103__$1 = state_17103;
var statearr_17110_17138 = state_17103__$1;
(statearr_17110_17138[(2)] = inst_17087);

(statearr_17110_17138[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (13))){
var inst_17092 = (state_17103[(2)]);
var state_17103__$1 = state_17103;
var statearr_17111_17139 = state_17103__$1;
(statearr_17111_17139[(2)] = inst_17092);

(statearr_17111_17139[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (6))){
var state_17103__$1 = state_17103;
var statearr_17112_17140 = state_17103__$1;
(statearr_17112_17140[(2)] = null);

(statearr_17112_17140[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (17))){
var inst_17090 = (state_17103[(2)]);
var state_17103__$1 = state_17103;
var statearr_17113_17141 = state_17103__$1;
(statearr_17113_17141[(2)] = inst_17090);

(statearr_17113_17141[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (3))){
var inst_17101 = (state_17103[(2)]);
var state_17103__$1 = state_17103;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17103__$1,inst_17101);
} else {
if((state_val_17104 === (12))){
var inst_17068 = (state_17103[(9)]);
var inst_17082 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_17068,opts);
var state_17103__$1 = state_17103;
if(cljs.core.truth_(inst_17082)){
var statearr_17114_17142 = state_17103__$1;
(statearr_17114_17142[(1)] = (15));

} else {
var statearr_17115_17143 = state_17103__$1;
(statearr_17115_17143[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (2))){
var state_17103__$1 = state_17103;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17103__$1,(4),ch);
} else {
if((state_val_17104 === (11))){
var inst_17069 = (state_17103[(8)]);
var inst_17074 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_17075 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_17069);
var inst_17076 = cljs.core.async.timeout.call(null,(1000));
var inst_17077 = [inst_17075,inst_17076];
var inst_17078 = (new cljs.core.PersistentVector(null,2,(5),inst_17074,inst_17077,null));
var state_17103__$1 = state_17103;
return cljs.core.async.ioc_alts_BANG_.call(null,state_17103__$1,(14),inst_17078);
} else {
if((state_val_17104 === (9))){
var state_17103__$1 = state_17103;
var statearr_17116_17144 = state_17103__$1;
(statearr_17116_17144[(2)] = null);

(statearr_17116_17144[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (5))){
var inst_17062 = (state_17103[(7)]);
var inst_17064 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_17065 = (new cljs.core.PersistentArrayMap(null,2,inst_17064,null));
var inst_17066 = (new cljs.core.PersistentHashSet(null,inst_17065,null));
var inst_17067 = figwheel.client.focus_msgs.call(null,inst_17066,inst_17062);
var inst_17068 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_17067);
var inst_17069 = cljs.core.first.call(null,inst_17067);
var inst_17070 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_17103__$1 = (function (){var statearr_17117 = state_17103;
(statearr_17117[(9)] = inst_17068);

(statearr_17117[(8)] = inst_17069);

return statearr_17117;
})();
if(cljs.core.truth_(inst_17070)){
var statearr_17118_17145 = state_17103__$1;
(statearr_17118_17145[(1)] = (8));

} else {
var statearr_17119_17146 = state_17103__$1;
(statearr_17119_17146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (14))){
var inst_17080 = (state_17103[(2)]);
var state_17103__$1 = state_17103;
var statearr_17120_17147 = state_17103__$1;
(statearr_17120_17147[(2)] = inst_17080);

(statearr_17120_17147[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (16))){
var state_17103__$1 = state_17103;
var statearr_17121_17148 = state_17103__$1;
(statearr_17121_17148[(2)] = null);

(statearr_17121_17148[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (10))){
var inst_17095 = (state_17103[(2)]);
var state_17103__$1 = (function (){var statearr_17122 = state_17103;
(statearr_17122[(10)] = inst_17095);

return statearr_17122;
})();
var statearr_17123_17149 = state_17103__$1;
(statearr_17123_17149[(2)] = null);

(statearr_17123_17149[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17104 === (8))){
var inst_17068 = (state_17103[(9)]);
var inst_17072 = figwheel.client.reload_file_state_QMARK_.call(null,inst_17068,opts);
var state_17103__$1 = state_17103;
if(cljs.core.truth_(inst_17072)){
var statearr_17124_17150 = state_17103__$1;
(statearr_17124_17150[(1)] = (11));

} else {
var statearr_17125_17151 = state_17103__$1;
(statearr_17125_17151[(1)] = (12));

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
});})(c__7252__auto___17133,ch))
;
return ((function (switch__7187__auto__,c__7252__auto___17133,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__7188__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__7188__auto____0 = (function (){
var statearr_17129 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17129[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__7188__auto__);

(statearr_17129[(1)] = (1));

return statearr_17129;
});
var figwheel$client$file_reloader_plugin_$_state_machine__7188__auto____1 = (function (state_17103){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_17103);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e17130){if((e17130 instanceof Object)){
var ex__7191__auto__ = e17130;
var statearr_17131_17152 = state_17103;
(statearr_17131_17152[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17103);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17130;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17153 = state_17103;
state_17103 = G__17153;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__7188__auto__ = function(state_17103){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__7188__auto____1.call(this,state_17103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__7188__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__7188__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___17133,ch))
})();
var state__7254__auto__ = (function (){var statearr_17132 = f__7253__auto__.call(null);
(statearr_17132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___17133);

return statearr_17132;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___17133,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__17154_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__17154_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_17161 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_17161){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_17159 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_17160 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_17159,_STAR_print_newline_STAR_17160,base_path_17161){
return (function() { 
var G__17162__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__17162 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__17163__i = 0, G__17163__a = new Array(arguments.length -  0);
while (G__17163__i < G__17163__a.length) {G__17163__a[G__17163__i] = arguments[G__17163__i + 0]; ++G__17163__i;}
  args = new cljs.core.IndexedSeq(G__17163__a,0);
} 
return G__17162__delegate.call(this,args);};
G__17162.cljs$lang$maxFixedArity = 0;
G__17162.cljs$lang$applyTo = (function (arglist__17164){
var args = cljs.core.seq(arglist__17164);
return G__17162__delegate(args);
});
G__17162.cljs$core$IFn$_invoke$arity$variadic = G__17162__delegate;
return G__17162;
})()
;})(_STAR_print_fn_STAR_17159,_STAR_print_newline_STAR_17160,base_path_17161))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_17160;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_17159;
}}catch (e17158){if((e17158 instanceof Error)){
var e = e17158;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_17161], null));
} else {
var e = e17158;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_17161))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__17165){
var map__17172 = p__17165;
var map__17172__$1 = ((((!((map__17172 == null)))?((((map__17172.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17172.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17172):map__17172);
var opts = map__17172__$1;
var build_id = cljs.core.get.call(null,map__17172__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__17172,map__17172__$1,opts,build_id){
return (function (p__17174){
var vec__17175 = p__17174;
var map__17176 = cljs.core.nth.call(null,vec__17175,(0),null);
var map__17176__$1 = ((((!((map__17176 == null)))?((((map__17176.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17176.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17176):map__17176);
var msg = map__17176__$1;
var msg_name = cljs.core.get.call(null,map__17176__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17175,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__17175,map__17176,map__17176__$1,msg,msg_name,_,map__17172,map__17172__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__17175,map__17176,map__17176__$1,msg,msg_name,_,map__17172,map__17172__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__17172,map__17172__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__17182){
var vec__17183 = p__17182;
var map__17184 = cljs.core.nth.call(null,vec__17183,(0),null);
var map__17184__$1 = ((((!((map__17184 == null)))?((((map__17184.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17184.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17184):map__17184);
var msg = map__17184__$1;
var msg_name = cljs.core.get.call(null,map__17184__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17183,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__17186){
var map__17196 = p__17186;
var map__17196__$1 = ((((!((map__17196 == null)))?((((map__17196.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17196.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17196):map__17196);
var on_compile_warning = cljs.core.get.call(null,map__17196__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__17196__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__17196,map__17196__$1,on_compile_warning,on_compile_fail){
return (function (p__17198){
var vec__17199 = p__17198;
var map__17200 = cljs.core.nth.call(null,vec__17199,(0),null);
var map__17200__$1 = ((((!((map__17200 == null)))?((((map__17200.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17200.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17200):map__17200);
var msg = map__17200__$1;
var msg_name = cljs.core.get.call(null,map__17200__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__17199,(1));
var pred__17202 = cljs.core._EQ_;
var expr__17203 = msg_name;
if(cljs.core.truth_(pred__17202.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__17203))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__17202.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__17203))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__17196,map__17196__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__,msg_hist,msg_names,msg){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__,msg_hist,msg_names,msg){
return (function (state_17419){
var state_val_17420 = (state_17419[(1)]);
if((state_val_17420 === (7))){
var inst_17343 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17343)){
var statearr_17421_17467 = state_17419__$1;
(statearr_17421_17467[(1)] = (8));

} else {
var statearr_17422_17468 = state_17419__$1;
(statearr_17422_17468[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (20))){
var inst_17413 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17423_17469 = state_17419__$1;
(statearr_17423_17469[(2)] = inst_17413);

(statearr_17423_17469[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (27))){
var inst_17409 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17424_17470 = state_17419__$1;
(statearr_17424_17470[(2)] = inst_17409);

(statearr_17424_17470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (1))){
var inst_17336 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17336)){
var statearr_17425_17471 = state_17419__$1;
(statearr_17425_17471[(1)] = (2));

} else {
var statearr_17426_17472 = state_17419__$1;
(statearr_17426_17472[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (24))){
var inst_17411 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17427_17473 = state_17419__$1;
(statearr_17427_17473[(2)] = inst_17411);

(statearr_17427_17473[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (4))){
var inst_17417 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17419__$1,inst_17417);
} else {
if((state_val_17420 === (15))){
var inst_17415 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17428_17474 = state_17419__$1;
(statearr_17428_17474[(2)] = inst_17415);

(statearr_17428_17474[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (21))){
var inst_17374 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17429_17475 = state_17419__$1;
(statearr_17429_17475[(2)] = inst_17374);

(statearr_17429_17475[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (31))){
var inst_17398 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17398)){
var statearr_17430_17476 = state_17419__$1;
(statearr_17430_17476[(1)] = (34));

} else {
var statearr_17431_17477 = state_17419__$1;
(statearr_17431_17477[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (32))){
var inst_17407 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17432_17478 = state_17419__$1;
(statearr_17432_17478[(2)] = inst_17407);

(statearr_17432_17478[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (33))){
var inst_17396 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17433_17479 = state_17419__$1;
(statearr_17433_17479[(2)] = inst_17396);

(statearr_17433_17479[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (13))){
var inst_17357 = figwheel.client.heads_up.clear.call(null);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(16),inst_17357);
} else {
if((state_val_17420 === (22))){
var inst_17378 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17379 = figwheel.client.heads_up.append_message.call(null,inst_17378);
var state_17419__$1 = state_17419;
var statearr_17434_17480 = state_17419__$1;
(statearr_17434_17480[(2)] = inst_17379);

(statearr_17434_17480[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (36))){
var inst_17405 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17435_17481 = state_17419__$1;
(statearr_17435_17481[(2)] = inst_17405);

(statearr_17435_17481[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (29))){
var inst_17389 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17436_17482 = state_17419__$1;
(statearr_17436_17482[(2)] = inst_17389);

(statearr_17436_17482[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (6))){
var inst_17338 = (state_17419[(7)]);
var state_17419__$1 = state_17419;
var statearr_17437_17483 = state_17419__$1;
(statearr_17437_17483[(2)] = inst_17338);

(statearr_17437_17483[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (28))){
var inst_17385 = (state_17419[(2)]);
var inst_17386 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17387 = figwheel.client.heads_up.display_warning.call(null,inst_17386);
var state_17419__$1 = (function (){var statearr_17438 = state_17419;
(statearr_17438[(8)] = inst_17385);

return statearr_17438;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(29),inst_17387);
} else {
if((state_val_17420 === (25))){
var inst_17383 = figwheel.client.heads_up.clear.call(null);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(28),inst_17383);
} else {
if((state_val_17420 === (34))){
var inst_17400 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(37),inst_17400);
} else {
if((state_val_17420 === (17))){
var inst_17365 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17439_17484 = state_17419__$1;
(statearr_17439_17484[(2)] = inst_17365);

(statearr_17439_17484[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (3))){
var inst_17355 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17355)){
var statearr_17440_17485 = state_17419__$1;
(statearr_17440_17485[(1)] = (13));

} else {
var statearr_17441_17486 = state_17419__$1;
(statearr_17441_17486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (12))){
var inst_17351 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17442_17487 = state_17419__$1;
(statearr_17442_17487[(2)] = inst_17351);

(statearr_17442_17487[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (2))){
var inst_17338 = (state_17419[(7)]);
var inst_17338__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_17419__$1 = (function (){var statearr_17443 = state_17419;
(statearr_17443[(7)] = inst_17338__$1);

return statearr_17443;
})();
if(cljs.core.truth_(inst_17338__$1)){
var statearr_17444_17488 = state_17419__$1;
(statearr_17444_17488[(1)] = (5));

} else {
var statearr_17445_17489 = state_17419__$1;
(statearr_17445_17489[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (23))){
var inst_17381 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17381)){
var statearr_17446_17490 = state_17419__$1;
(statearr_17446_17490[(1)] = (25));

} else {
var statearr_17447_17491 = state_17419__$1;
(statearr_17447_17491[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (35))){
var state_17419__$1 = state_17419;
var statearr_17448_17492 = state_17419__$1;
(statearr_17448_17492[(2)] = null);

(statearr_17448_17492[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (19))){
var inst_17376 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17376)){
var statearr_17449_17493 = state_17419__$1;
(statearr_17449_17493[(1)] = (22));

} else {
var statearr_17450_17494 = state_17419__$1;
(statearr_17450_17494[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (11))){
var inst_17347 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17451_17495 = state_17419__$1;
(statearr_17451_17495[(2)] = inst_17347);

(statearr_17451_17495[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (9))){
var inst_17349 = figwheel.client.heads_up.clear.call(null);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(12),inst_17349);
} else {
if((state_val_17420 === (5))){
var inst_17340 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_17419__$1 = state_17419;
var statearr_17452_17496 = state_17419__$1;
(statearr_17452_17496[(2)] = inst_17340);

(statearr_17452_17496[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (14))){
var inst_17367 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17367)){
var statearr_17453_17497 = state_17419__$1;
(statearr_17453_17497[(1)] = (18));

} else {
var statearr_17454_17498 = state_17419__$1;
(statearr_17454_17498[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (26))){
var inst_17391 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_17419__$1 = state_17419;
if(cljs.core.truth_(inst_17391)){
var statearr_17455_17499 = state_17419__$1;
(statearr_17455_17499[(1)] = (30));

} else {
var statearr_17456_17500 = state_17419__$1;
(statearr_17456_17500[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (16))){
var inst_17359 = (state_17419[(2)]);
var inst_17360 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17361 = figwheel.client.format_messages.call(null,inst_17360);
var inst_17362 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17363 = figwheel.client.heads_up.display_error.call(null,inst_17361,inst_17362);
var state_17419__$1 = (function (){var statearr_17457 = state_17419;
(statearr_17457[(9)] = inst_17359);

return statearr_17457;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(17),inst_17363);
} else {
if((state_val_17420 === (30))){
var inst_17393 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17394 = figwheel.client.heads_up.display_warning.call(null,inst_17393);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(33),inst_17394);
} else {
if((state_val_17420 === (10))){
var inst_17353 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17458_17501 = state_17419__$1;
(statearr_17458_17501[(2)] = inst_17353);

(statearr_17458_17501[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (18))){
var inst_17369 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17370 = figwheel.client.format_messages.call(null,inst_17369);
var inst_17371 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_17372 = figwheel.client.heads_up.display_error.call(null,inst_17370,inst_17371);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(21),inst_17372);
} else {
if((state_val_17420 === (37))){
var inst_17402 = (state_17419[(2)]);
var state_17419__$1 = state_17419;
var statearr_17459_17502 = state_17419__$1;
(statearr_17459_17502[(2)] = inst_17402);

(statearr_17459_17502[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17420 === (8))){
var inst_17345 = figwheel.client.heads_up.flash_loaded.call(null);
var state_17419__$1 = state_17419;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17419__$1,(11),inst_17345);
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
});})(c__7252__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__7187__auto__,c__7252__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto____0 = (function (){
var statearr_17463 = [null,null,null,null,null,null,null,null,null,null];
(statearr_17463[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto__);

(statearr_17463[(1)] = (1));

return statearr_17463;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto____1 = (function (state_17419){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_17419);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e17464){if((e17464 instanceof Object)){
var ex__7191__auto__ = e17464;
var statearr_17465_17503 = state_17419;
(statearr_17465_17503[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17419);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17464;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17504 = state_17419;
state_17419 = G__17504;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto__ = function(state_17419){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto____1.call(this,state_17419);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__,msg_hist,msg_names,msg))
})();
var state__7254__auto__ = (function (){var statearr_17466 = f__7253__auto__.call(null);
(statearr_17466[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_17466;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__,msg_hist,msg_names,msg))
);

return c__7252__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__7252__auto___17567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___17567,ch){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___17567,ch){
return (function (state_17550){
var state_val_17551 = (state_17550[(1)]);
if((state_val_17551 === (1))){
var state_17550__$1 = state_17550;
var statearr_17552_17568 = state_17550__$1;
(statearr_17552_17568[(2)] = null);

(statearr_17552_17568[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17551 === (2))){
var state_17550__$1 = state_17550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17550__$1,(4),ch);
} else {
if((state_val_17551 === (3))){
var inst_17548 = (state_17550[(2)]);
var state_17550__$1 = state_17550;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17550__$1,inst_17548);
} else {
if((state_val_17551 === (4))){
var inst_17538 = (state_17550[(7)]);
var inst_17538__$1 = (state_17550[(2)]);
var state_17550__$1 = (function (){var statearr_17553 = state_17550;
(statearr_17553[(7)] = inst_17538__$1);

return statearr_17553;
})();
if(cljs.core.truth_(inst_17538__$1)){
var statearr_17554_17569 = state_17550__$1;
(statearr_17554_17569[(1)] = (5));

} else {
var statearr_17555_17570 = state_17550__$1;
(statearr_17555_17570[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17551 === (5))){
var inst_17538 = (state_17550[(7)]);
var inst_17540 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_17538);
var state_17550__$1 = state_17550;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17550__$1,(8),inst_17540);
} else {
if((state_val_17551 === (6))){
var state_17550__$1 = state_17550;
var statearr_17556_17571 = state_17550__$1;
(statearr_17556_17571[(2)] = null);

(statearr_17556_17571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17551 === (7))){
var inst_17546 = (state_17550[(2)]);
var state_17550__$1 = state_17550;
var statearr_17557_17572 = state_17550__$1;
(statearr_17557_17572[(2)] = inst_17546);

(statearr_17557_17572[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_17551 === (8))){
var inst_17542 = (state_17550[(2)]);
var state_17550__$1 = (function (){var statearr_17558 = state_17550;
(statearr_17558[(8)] = inst_17542);

return statearr_17558;
})();
var statearr_17559_17573 = state_17550__$1;
(statearr_17559_17573[(2)] = null);

(statearr_17559_17573[(1)] = (2));


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
});})(c__7252__auto___17567,ch))
;
return ((function (switch__7187__auto__,c__7252__auto___17567,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__7188__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__7188__auto____0 = (function (){
var statearr_17563 = [null,null,null,null,null,null,null,null,null];
(statearr_17563[(0)] = figwheel$client$heads_up_plugin_$_state_machine__7188__auto__);

(statearr_17563[(1)] = (1));

return statearr_17563;
});
var figwheel$client$heads_up_plugin_$_state_machine__7188__auto____1 = (function (state_17550){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_17550);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e17564){if((e17564 instanceof Object)){
var ex__7191__auto__ = e17564;
var statearr_17565_17574 = state_17550;
(statearr_17565_17574[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17550);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17575 = state_17550;
state_17550 = G__17575;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__7188__auto__ = function(state_17550){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__7188__auto____1.call(this,state_17550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__7188__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__7188__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___17567,ch))
})();
var state__7254__auto__ = (function (){var statearr_17566 = f__7253__auto__.call(null);
(statearr_17566[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___17567);

return statearr_17566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___17567,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__){
return (function (state_17596){
var state_val_17597 = (state_17596[(1)]);
if((state_val_17597 === (1))){
var inst_17591 = cljs.core.async.timeout.call(null,(3000));
var state_17596__$1 = state_17596;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17596__$1,(2),inst_17591);
} else {
if((state_val_17597 === (2))){
var inst_17593 = (state_17596[(2)]);
var inst_17594 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_17596__$1 = (function (){var statearr_17598 = state_17596;
(statearr_17598[(7)] = inst_17593);

return statearr_17598;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17596__$1,inst_17594);
} else {
return null;
}
}
});})(c__7252__auto__))
;
return ((function (switch__7187__auto__,c__7252__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__7188__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__7188__auto____0 = (function (){
var statearr_17602 = [null,null,null,null,null,null,null,null];
(statearr_17602[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__7188__auto__);

(statearr_17602[(1)] = (1));

return statearr_17602;
});
var figwheel$client$enforce_project_plugin_$_state_machine__7188__auto____1 = (function (state_17596){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_17596);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e17603){if((e17603 instanceof Object)){
var ex__7191__auto__ = e17603;
var statearr_17604_17606 = state_17596;
(statearr_17604_17606[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17596);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17603;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17607 = state_17596;
state_17596 = G__17607;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__7188__auto__ = function(state_17596){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__7188__auto____1.call(this,state_17596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__7188__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__7188__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__))
})();
var state__7254__auto__ = (function (){var statearr_17605 = f__7253__auto__.call(null);
(statearr_17605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_17605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__))
);

return c__7252__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__17608){
var map__17615 = p__17608;
var map__17615__$1 = ((((!((map__17615 == null)))?((((map__17615.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17615.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17615):map__17615);
var ed = map__17615__$1;
var formatted_exception = cljs.core.get.call(null,map__17615__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__17615__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__17615__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__17617_17621 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__17618_17622 = null;
var count__17619_17623 = (0);
var i__17620_17624 = (0);
while(true){
if((i__17620_17624 < count__17619_17623)){
var msg_17625 = cljs.core._nth.call(null,chunk__17618_17622,i__17620_17624);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17625);

var G__17626 = seq__17617_17621;
var G__17627 = chunk__17618_17622;
var G__17628 = count__17619_17623;
var G__17629 = (i__17620_17624 + (1));
seq__17617_17621 = G__17626;
chunk__17618_17622 = G__17627;
count__17619_17623 = G__17628;
i__17620_17624 = G__17629;
continue;
} else {
var temp__4425__auto___17630 = cljs.core.seq.call(null,seq__17617_17621);
if(temp__4425__auto___17630){
var seq__17617_17631__$1 = temp__4425__auto___17630;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17617_17631__$1)){
var c__5457__auto___17632 = cljs.core.chunk_first.call(null,seq__17617_17631__$1);
var G__17633 = cljs.core.chunk_rest.call(null,seq__17617_17631__$1);
var G__17634 = c__5457__auto___17632;
var G__17635 = cljs.core.count.call(null,c__5457__auto___17632);
var G__17636 = (0);
seq__17617_17621 = G__17633;
chunk__17618_17622 = G__17634;
count__17619_17623 = G__17635;
i__17620_17624 = G__17636;
continue;
} else {
var msg_17637 = cljs.core.first.call(null,seq__17617_17631__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_17637);

var G__17638 = cljs.core.next.call(null,seq__17617_17631__$1);
var G__17639 = null;
var G__17640 = (0);
var G__17641 = (0);
seq__17617_17621 = G__17638;
chunk__17618_17622 = G__17639;
count__17619_17623 = G__17640;
i__17620_17624 = G__17641;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__17642){
var map__17645 = p__17642;
var map__17645__$1 = ((((!((map__17645 == null)))?((((map__17645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17645):map__17645);
var w = map__17645__$1;
var message = cljs.core.get.call(null,map__17645__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__4642__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__4642__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__4642__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__17653 = cljs.core.seq.call(null,plugins);
var chunk__17654 = null;
var count__17655 = (0);
var i__17656 = (0);
while(true){
if((i__17656 < count__17655)){
var vec__17657 = cljs.core._nth.call(null,chunk__17654,i__17656);
var k = cljs.core.nth.call(null,vec__17657,(0),null);
var plugin = cljs.core.nth.call(null,vec__17657,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17659 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17653,chunk__17654,count__17655,i__17656,pl_17659,vec__17657,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_17659.call(null,msg_hist);
});})(seq__17653,chunk__17654,count__17655,i__17656,pl_17659,vec__17657,k,plugin))
);
} else {
}

var G__17660 = seq__17653;
var G__17661 = chunk__17654;
var G__17662 = count__17655;
var G__17663 = (i__17656 + (1));
seq__17653 = G__17660;
chunk__17654 = G__17661;
count__17655 = G__17662;
i__17656 = G__17663;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17653);
if(temp__4425__auto__){
var seq__17653__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17653__$1)){
var c__5457__auto__ = cljs.core.chunk_first.call(null,seq__17653__$1);
var G__17664 = cljs.core.chunk_rest.call(null,seq__17653__$1);
var G__17665 = c__5457__auto__;
var G__17666 = cljs.core.count.call(null,c__5457__auto__);
var G__17667 = (0);
seq__17653 = G__17664;
chunk__17654 = G__17665;
count__17655 = G__17666;
i__17656 = G__17667;
continue;
} else {
var vec__17658 = cljs.core.first.call(null,seq__17653__$1);
var k = cljs.core.nth.call(null,vec__17658,(0),null);
var plugin = cljs.core.nth.call(null,vec__17658,(1),null);
if(cljs.core.truth_(plugin)){
var pl_17668 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__17653,chunk__17654,count__17655,i__17656,pl_17668,vec__17658,k,plugin,seq__17653__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_17668.call(null,msg_hist);
});})(seq__17653,chunk__17654,count__17655,i__17656,pl_17668,vec__17658,k,plugin,seq__17653__$1,temp__4425__auto__))
);
} else {
}

var G__17669 = cljs.core.next.call(null,seq__17653__$1);
var G__17670 = null;
var G__17671 = (0);
var G__17672 = (0);
seq__17653 = G__17669;
chunk__17654 = G__17670;
count__17655 = G__17671;
i__17656 = G__17672;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args17673 = [];
var len__5712__auto___17676 = arguments.length;
var i__5713__auto___17677 = (0);
while(true){
if((i__5713__auto___17677 < len__5712__auto___17676)){
args17673.push((arguments[i__5713__auto___17677]));

var G__17678 = (i__5713__auto___17677 + (1));
i__5713__auto___17677 = G__17678;
continue;
} else {
}
break;
}

var G__17675 = args17673.length;
switch (G__17675) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args17673.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__5719__auto__ = [];
var len__5712__auto___17684 = arguments.length;
var i__5713__auto___17685 = (0);
while(true){
if((i__5713__auto___17685 < len__5712__auto___17684)){
args__5719__auto__.push((arguments[i__5713__auto___17685]));

var G__17686 = (i__5713__auto___17685 + (1));
i__5713__auto___17685 = G__17686;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((0) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__5720__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__17681){
var map__17682 = p__17681;
var map__17682__$1 = ((((!((map__17682 == null)))?((((map__17682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17682):map__17682);
var opts = map__17682__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq17680){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq17680));
});

//# sourceMappingURL=client.js.map