// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('cljs.core.async');
goog.require('goog.string');
figwheel.client.heads_up.clear;

figwheel.client.heads_up.cljs_logo_svg;
figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__5719__auto__ = [];
var len__5712__auto___17709 = arguments.length;
var i__5713__auto___17710 = (0);
while(true){
if((i__5713__auto___17710 < len__5712__auto___17709)){
args__5719__auto__.push((arguments[i__5713__auto___17710]));

var G__17711 = (i__5713__auto___17710 + (1));
i__5713__auto___17710 = G__17711;
continue;
} else {
}
break;
}

var argseq__5720__auto__ = ((((2) < args__5719__auto__.length))?(new cljs.core.IndexedSeq(args__5719__auto__.slice((2)),(0))):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5720__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__17701_17712 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__17702_17713 = null;
var count__17703_17714 = (0);
var i__17704_17715 = (0);
while(true){
if((i__17704_17715 < count__17703_17714)){
var k_17716 = cljs.core._nth.call(null,chunk__17702_17713,i__17704_17715);
e.setAttribute(cljs.core.name.call(null,k_17716),cljs.core.get.call(null,attrs,k_17716));

var G__17717 = seq__17701_17712;
var G__17718 = chunk__17702_17713;
var G__17719 = count__17703_17714;
var G__17720 = (i__17704_17715 + (1));
seq__17701_17712 = G__17717;
chunk__17702_17713 = G__17718;
count__17703_17714 = G__17719;
i__17704_17715 = G__17720;
continue;
} else {
var temp__4425__auto___17721 = cljs.core.seq.call(null,seq__17701_17712);
if(temp__4425__auto___17721){
var seq__17701_17722__$1 = temp__4425__auto___17721;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17701_17722__$1)){
var c__5457__auto___17723 = cljs.core.chunk_first.call(null,seq__17701_17722__$1);
var G__17724 = cljs.core.chunk_rest.call(null,seq__17701_17722__$1);
var G__17725 = c__5457__auto___17723;
var G__17726 = cljs.core.count.call(null,c__5457__auto___17723);
var G__17727 = (0);
seq__17701_17712 = G__17724;
chunk__17702_17713 = G__17725;
count__17703_17714 = G__17726;
i__17704_17715 = G__17727;
continue;
} else {
var k_17728 = cljs.core.first.call(null,seq__17701_17722__$1);
e.setAttribute(cljs.core.name.call(null,k_17728),cljs.core.get.call(null,attrs,k_17728));

var G__17729 = cljs.core.next.call(null,seq__17701_17722__$1);
var G__17730 = null;
var G__17731 = (0);
var G__17732 = (0);
seq__17701_17712 = G__17729;
chunk__17702_17713 = G__17730;
count__17703_17714 = G__17731;
i__17704_17715 = G__17732;
continue;
}
} else {
}
}
break;
}

var seq__17705_17733 = cljs.core.seq.call(null,children);
var chunk__17706_17734 = null;
var count__17707_17735 = (0);
var i__17708_17736 = (0);
while(true){
if((i__17708_17736 < count__17707_17735)){
var ch_17737 = cljs.core._nth.call(null,chunk__17706_17734,i__17708_17736);
e.appendChild(ch_17737);

var G__17738 = seq__17705_17733;
var G__17739 = chunk__17706_17734;
var G__17740 = count__17707_17735;
var G__17741 = (i__17708_17736 + (1));
seq__17705_17733 = G__17738;
chunk__17706_17734 = G__17739;
count__17707_17735 = G__17740;
i__17708_17736 = G__17741;
continue;
} else {
var temp__4425__auto___17742 = cljs.core.seq.call(null,seq__17705_17733);
if(temp__4425__auto___17742){
var seq__17705_17743__$1 = temp__4425__auto___17742;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17705_17743__$1)){
var c__5457__auto___17744 = cljs.core.chunk_first.call(null,seq__17705_17743__$1);
var G__17745 = cljs.core.chunk_rest.call(null,seq__17705_17743__$1);
var G__17746 = c__5457__auto___17744;
var G__17747 = cljs.core.count.call(null,c__5457__auto___17744);
var G__17748 = (0);
seq__17705_17733 = G__17745;
chunk__17706_17734 = G__17746;
count__17707_17735 = G__17747;
i__17708_17736 = G__17748;
continue;
} else {
var ch_17749 = cljs.core.first.call(null,seq__17705_17743__$1);
e.appendChild(ch_17749);

var G__17750 = cljs.core.next.call(null,seq__17705_17743__$1);
var G__17751 = null;
var G__17752 = (0);
var G__17753 = (0);
seq__17705_17733 = G__17750;
chunk__17706_17734 = G__17751;
count__17707_17735 = G__17752;
i__17708_17736 = G__17753;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq17698){
var G__17699 = cljs.core.first.call(null,seq17698);
var seq17698__$1 = cljs.core.next.call(null,seq17698);
var G__17700 = cljs.core.first.call(null,seq17698__$1);
var seq17698__$2 = cljs.core.next.call(null,seq17698__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__17699,G__17700,seq17698__$2);
});
if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__5567__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5568__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5569__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5570__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5571__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__5567__auto__,prefer_table__5568__auto__,method_cache__5569__auto__,cached_hierarchy__5570__auto__,hierarchy__5571__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__5567__auto__,prefer_table__5568__auto__,method_cache__5569__auto__,cached_hierarchy__5570__auto__,hierarchy__5571__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5571__auto__,method_table__5567__auto__,prefer_table__5568__auto__,method_cache__5569__auto__,cached_hierarchy__5570__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str("#"),cljs.core.str(cont_id)].join('')))){
var el_17754 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str("-o-transition: all 0.2s ease-in-out;"),cljs.core.str("transition: all 0.2s ease-in-out;"),cljs.core.str("font-size: 13px;"),cljs.core.str("border-top: 1px solid #f5f5f5;"),cljs.core.str("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str("line-height: 18px;"),cljs.core.str("color: #333;"),cljs.core.str("font-family: monospace;"),cljs.core.str("padding: 0px 10px 0px 70px;"),cljs.core.str("position: fixed;"),cljs.core.str("bottom: 0px;"),cljs.core.str("left: 0px;"),cljs.core.str("height: 0px;"),cljs.core.str("opacity: 0.0;"),cljs.core.str("box-sizing: border-box;"),cljs.core.str("z-index: 10000;")].join('')], null));
el_17754.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_17754.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_17754.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_17754);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__17755,st_map){
var map__17760 = p__17755;
var map__17760__$1 = ((((!((map__17760 == null)))?((((map__17760.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17760.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17760):map__17760);
var container_el = cljs.core.get.call(null,map__17760__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__17760,map__17760__$1,container_el){
return (function (p__17762){
var vec__17763 = p__17762;
var k = cljs.core.nth.call(null,vec__17763,(0),null);
var v = cljs.core.nth.call(null,vec__17763,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__17760,map__17760__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__17764,dom_str){
var map__17767 = p__17764;
var map__17767__$1 = ((((!((map__17767 == null)))?((((map__17767.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17767.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17767):map__17767);
var c = map__17767__$1;
var content_area_el = cljs.core.get.call(null,map__17767__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__17769){
var map__17772 = p__17769;
var map__17772__$1 = ((((!((map__17772 == null)))?((((map__17772.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17772.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17772):map__17772);
var content_area_el = cljs.core.get.call(null,map__17772__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str("<a style=\""),cljs.core.str("float: right;"),cljs.core.str("font-size: 18px;"),cljs.core.str("text-decoration: none;"),cljs.core.str("text-align: right;"),cljs.core.str("width: 30px;"),cljs.core.str("height: 30px;"),cljs.core.str("color: rgba(84,84,84, 0.5);"),cljs.core.str("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str("x"),cljs.core.str("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__){
return (function (state_17815){
var state_val_17816 = (state_17815[(1)]);
if((state_val_17816 === (1))){
var inst_17800 = (state_17815[(7)]);
var inst_17800__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_17801 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_17802 = ["10px","10px","100%","68px","1.0"];
var inst_17803 = cljs.core.PersistentHashMap.fromArrays(inst_17801,inst_17802);
var inst_17804 = cljs.core.merge.call(null,inst_17803,style);
var inst_17805 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17800__$1,inst_17804);
var inst_17806 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_17800__$1,msg);
var inst_17807 = cljs.core.async.timeout.call(null,(300));
var state_17815__$1 = (function (){var statearr_17817 = state_17815;
(statearr_17817[(8)] = inst_17806);

(statearr_17817[(7)] = inst_17800__$1);

(statearr_17817[(9)] = inst_17805);

return statearr_17817;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17815__$1,(2),inst_17807);
} else {
if((state_val_17816 === (2))){
var inst_17800 = (state_17815[(7)]);
var inst_17809 = (state_17815[(2)]);
var inst_17810 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_17811 = ["auto"];
var inst_17812 = cljs.core.PersistentHashMap.fromArrays(inst_17810,inst_17811);
var inst_17813 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17800,inst_17812);
var state_17815__$1 = (function (){var statearr_17818 = state_17815;
(statearr_17818[(10)] = inst_17809);

return statearr_17818;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17815__$1,inst_17813);
} else {
return null;
}
}
});})(c__7252__auto__))
;
return ((function (switch__7187__auto__,c__7252__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto____0 = (function (){
var statearr_17822 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_17822[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto__);

(statearr_17822[(1)] = (1));

return statearr_17822;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto____1 = (function (state_17815){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_17815);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e17823){if((e17823 instanceof Object)){
var ex__7191__auto__ = e17823;
var statearr_17824_17826 = state_17815;
(statearr_17824_17826[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17815);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17827 = state_17815;
state_17815 = G__17827;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto__ = function(state_17815){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto____1.call(this,state_17815);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__))
})();
var state__7254__auto__ = (function (){var statearr_17825 = f__7253__auto__.call(null);
(statearr_17825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_17825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__))
);

return c__7252__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(s){
return [cljs.core.str("<div style=\""),cljs.core.str("font-size: 26px;"),cljs.core.str("line-height: 26px;"),cljs.core.str("margin-bottom: 2px;"),cljs.core.str("padding-top: 1px;"),cljs.core.str("\">"),cljs.core.str(s),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.file_and_line_number = (function figwheel$client$heads_up$file_and_line_number(msg){
if(cljs.core.truth_(cljs.core.re_matches.call(null,/.*at\sline.*/,msg))){
return cljs.core.take.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,msg," ")));
} else {
return null;
}
});
figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,msg){
return [cljs.core.str("<div data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str(file_name),cljs.core.str("\" data-file-line=\""),cljs.core.str(line_number),cljs.core.str("\">"),cljs.core.str(msg),cljs.core.str("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg){
var msg__$1 = goog.string.htmlEscape(msg);
var temp__4423__auto__ = figwheel.client.heads_up.file_and_line_number.call(null,msg__$1);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__17829 = temp__4423__auto__;
var f = cljs.core.nth.call(null,vec__17829,(0),null);
var ln = cljs.core.nth.call(null,vec__17829,(1),null);
return figwheel.client.heads_up.file_selector_div.call(null,f,ln,msg__$1);
} else {
return [cljs.core.str("<div>"),cljs.core.str(msg__$1),cljs.core.str("</div>")].join('');
}
});
figwheel.client.heads_up.display_error = (function figwheel$client$heads_up$display_error(formatted_messages,cause){
var vec__17832 = (cljs.core.truth_(cause)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause)], null):cljs.core.first.call(null,cljs.core.keep.call(null,figwheel.client.heads_up.file_and_line_number,formatted_messages)));
var file_name = cljs.core.nth.call(null,vec__17832,(0),null);
var file_line = cljs.core.nth.call(null,vec__17832,(1),null);
var file_column = cljs.core.nth.call(null,vec__17832,(2),null);
var msg = cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,((function (vec__17832,file_name,file_line,file_column){
return (function (p1__17830_SHARP_){
return [cljs.core.str("<div>"),cljs.core.str(goog.string.htmlEscape(p1__17830_SHARP_)),cljs.core.str("</div>")].join('');
});})(vec__17832,file_name,file_line,file_column))
,formatted_messages));
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,"Compile Error")),cljs.core.str(figwheel.client.heads_up.file_selector_div.call(null,file_name,(function (){var or__4654__auto__ = file_line;
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
var and__4642__auto__ = cause;
if(cljs.core.truth_(and__4642__auto__)){
return new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause);
} else {
return and__4642__auto__;
}
}
})(),[cljs.core.str(msg),cljs.core.str((cljs.core.truth_(cause)?[cljs.core.str("Error on file "),cljs.core.str(goog.string.htmlEscape(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause))),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''):""))].join('')))].join(''));
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str(figwheel.client.heads_up.close_link.call(null)),cljs.core.str(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str(figwheel.client.heads_up.format_line.call(null,msg))].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(msg){
return figwheel.client.heads_up.display_system_warning.call(null,"Compile Warning",msg);
});
figwheel.client.heads_up.append_message = (function figwheel$client$heads_up$append_message(message){
var map__17835 = figwheel.client.heads_up.ensure_container.call(null);
var map__17835__$1 = ((((!((map__17835 == null)))?((((map__17835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__17835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17835):map__17835);
var content_area_el = cljs.core.get.call(null,map__17835__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = document.createElement("div");
el.innerHTML = figwheel.client.heads_up.format_line.call(null,message);

return content_area_el.appendChild(el);
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__){
return (function (state_17883){
var state_val_17884 = (state_17883[(1)]);
if((state_val_17884 === (1))){
var inst_17866 = (state_17883[(7)]);
var inst_17866__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_17867 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_17868 = ["0.0"];
var inst_17869 = cljs.core.PersistentHashMap.fromArrays(inst_17867,inst_17868);
var inst_17870 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17866__$1,inst_17869);
var inst_17871 = cljs.core.async.timeout.call(null,(300));
var state_17883__$1 = (function (){var statearr_17885 = state_17883;
(statearr_17885[(8)] = inst_17870);

(statearr_17885[(7)] = inst_17866__$1);

return statearr_17885;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17883__$1,(2),inst_17871);
} else {
if((state_val_17884 === (2))){
var inst_17866 = (state_17883[(7)]);
var inst_17873 = (state_17883[(2)]);
var inst_17874 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_17875 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_17876 = cljs.core.PersistentHashMap.fromArrays(inst_17874,inst_17875);
var inst_17877 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_17866,inst_17876);
var inst_17878 = cljs.core.async.timeout.call(null,(200));
var state_17883__$1 = (function (){var statearr_17886 = state_17883;
(statearr_17886[(9)] = inst_17877);

(statearr_17886[(10)] = inst_17873);

return statearr_17886;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17883__$1,(3),inst_17878);
} else {
if((state_val_17884 === (3))){
var inst_17866 = (state_17883[(7)]);
var inst_17880 = (state_17883[(2)]);
var inst_17881 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_17866,"");
var state_17883__$1 = (function (){var statearr_17887 = state_17883;
(statearr_17887[(11)] = inst_17880);

return statearr_17887;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17883__$1,inst_17881);
} else {
return null;
}
}
}
});})(c__7252__auto__))
;
return ((function (switch__7187__auto__,c__7252__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__7188__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__7188__auto____0 = (function (){
var statearr_17891 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_17891[(0)] = figwheel$client$heads_up$clear_$_state_machine__7188__auto__);

(statearr_17891[(1)] = (1));

return statearr_17891;
});
var figwheel$client$heads_up$clear_$_state_machine__7188__auto____1 = (function (state_17883){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_17883);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e17892){if((e17892 instanceof Object)){
var ex__7191__auto__ = e17892;
var statearr_17893_17895 = state_17883;
(statearr_17893_17895[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17883);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17892;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17896 = state_17883;
state_17883 = G__17896;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__7188__auto__ = function(state_17883){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__7188__auto____1.call(this,state_17883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$clear_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__7188__auto____0;
figwheel$client$heads_up$clear_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__7188__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__))
})();
var state__7254__auto__ = (function (){var statearr_17894 = f__7253__auto__.call(null);
(statearr_17894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_17894;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__))
);

return c__7252__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__){
return (function (state_17928){
var state_val_17929 = (state_17928[(1)]);
if((state_val_17929 === (1))){
var inst_17918 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_17928__$1 = state_17928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17928__$1,(2),inst_17918);
} else {
if((state_val_17929 === (2))){
var inst_17920 = (state_17928[(2)]);
var inst_17921 = cljs.core.async.timeout.call(null,(400));
var state_17928__$1 = (function (){var statearr_17930 = state_17928;
(statearr_17930[(7)] = inst_17920);

return statearr_17930;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17928__$1,(3),inst_17921);
} else {
if((state_val_17929 === (3))){
var inst_17923 = (state_17928[(2)]);
var inst_17924 = figwheel.client.heads_up.clear.call(null);
var state_17928__$1 = (function (){var statearr_17931 = state_17928;
(statearr_17931[(8)] = inst_17923);

return statearr_17931;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17928__$1,(4),inst_17924);
} else {
if((state_val_17929 === (4))){
var inst_17926 = (state_17928[(2)]);
var state_17928__$1 = state_17928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17928__$1,inst_17926);
} else {
return null;
}
}
}
}
});})(c__7252__auto__))
;
return ((function (switch__7187__auto__,c__7252__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto____0 = (function (){
var statearr_17935 = [null,null,null,null,null,null,null,null,null];
(statearr_17935[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto__);

(statearr_17935[(1)] = (1));

return statearr_17935;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto____1 = (function (state_17928){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_17928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e17936){if((e17936 instanceof Object)){
var ex__7191__auto__ = e17936;
var statearr_17937_17939 = state_17928;
(statearr_17937_17939[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e17936;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__17940 = state_17928;
state_17928 = G__17940;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto__ = function(state_17928){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto____1.call(this,state_17928);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__))
})();
var state__7254__auto__ = (function (){var statearr_17938 = f__7253__auto__.call(null);
(statearr_17938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_17938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__))
);

return c__7252__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";

//# sourceMappingURL=heads_up.js.map