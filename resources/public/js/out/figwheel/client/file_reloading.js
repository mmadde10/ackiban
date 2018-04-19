// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__4654__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__4654__auto__){
return or__4654__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__4654__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__17970_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__17970_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__17975 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__17976 = null;
var count__17977 = (0);
var i__17978 = (0);
while(true){
if((i__17978 < count__17977)){
var n = cljs.core._nth.call(null,chunk__17976,i__17978);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__17979 = seq__17975;
var G__17980 = chunk__17976;
var G__17981 = count__17977;
var G__17982 = (i__17978 + (1));
seq__17975 = G__17979;
chunk__17976 = G__17980;
count__17977 = G__17981;
i__17978 = G__17982;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__17975);
if(temp__4425__auto__){
var seq__17975__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17975__$1)){
var c__5457__auto__ = cljs.core.chunk_first.call(null,seq__17975__$1);
var G__17983 = cljs.core.chunk_rest.call(null,seq__17975__$1);
var G__17984 = c__5457__auto__;
var G__17985 = cljs.core.count.call(null,c__5457__auto__);
var G__17986 = (0);
seq__17975 = G__17983;
chunk__17976 = G__17984;
count__17977 = G__17985;
i__17978 = G__17986;
continue;
} else {
var n = cljs.core.first.call(null,seq__17975__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__17987 = cljs.core.next.call(null,seq__17975__$1);
var G__17988 = null;
var G__17989 = (0);
var G__17990 = (0);
seq__17975 = G__17987;
chunk__17976 = G__17988;
count__17977 = G__17989;
i__17978 = G__17990;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__18029_18036 = cljs.core.seq.call(null,deps);
var chunk__18030_18037 = null;
var count__18031_18038 = (0);
var i__18032_18039 = (0);
while(true){
if((i__18032_18039 < count__18031_18038)){
var dep_18040 = cljs.core._nth.call(null,chunk__18030_18037,i__18032_18039);
topo_sort_helper_STAR_.call(null,dep_18040,(depth + (1)),state);

var G__18041 = seq__18029_18036;
var G__18042 = chunk__18030_18037;
var G__18043 = count__18031_18038;
var G__18044 = (i__18032_18039 + (1));
seq__18029_18036 = G__18041;
chunk__18030_18037 = G__18042;
count__18031_18038 = G__18043;
i__18032_18039 = G__18044;
continue;
} else {
var temp__4425__auto___18045 = cljs.core.seq.call(null,seq__18029_18036);
if(temp__4425__auto___18045){
var seq__18029_18046__$1 = temp__4425__auto___18045;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18029_18046__$1)){
var c__5457__auto___18047 = cljs.core.chunk_first.call(null,seq__18029_18046__$1);
var G__18048 = cljs.core.chunk_rest.call(null,seq__18029_18046__$1);
var G__18049 = c__5457__auto___18047;
var G__18050 = cljs.core.count.call(null,c__5457__auto___18047);
var G__18051 = (0);
seq__18029_18036 = G__18048;
chunk__18030_18037 = G__18049;
count__18031_18038 = G__18050;
i__18032_18039 = G__18051;
continue;
} else {
var dep_18052 = cljs.core.first.call(null,seq__18029_18046__$1);
topo_sort_helper_STAR_.call(null,dep_18052,(depth + (1)),state);

var G__18053 = cljs.core.next.call(null,seq__18029_18046__$1);
var G__18054 = null;
var G__18055 = (0);
var G__18056 = (0);
seq__18029_18036 = G__18053;
chunk__18030_18037 = G__18054;
count__18031_18038 = G__18055;
i__18032_18039 = G__18056;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__18033){
var vec__18035 = p__18033;
var x = cljs.core.nth.call(null,vec__18035,(0),null);
var xs = cljs.core.nthnext.call(null,vec__18035,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__18035,x,xs,get_deps__$1){
return (function (p1__17991_SHARP_){
return clojure.set.difference.call(null,p1__17991_SHARP_,x);
});})(vec__18035,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__18069 = cljs.core.seq.call(null,provides);
var chunk__18070 = null;
var count__18071 = (0);
var i__18072 = (0);
while(true){
if((i__18072 < count__18071)){
var prov = cljs.core._nth.call(null,chunk__18070,i__18072);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__18073_18081 = cljs.core.seq.call(null,requires);
var chunk__18074_18082 = null;
var count__18075_18083 = (0);
var i__18076_18084 = (0);
while(true){
if((i__18076_18084 < count__18075_18083)){
var req_18085 = cljs.core._nth.call(null,chunk__18074_18082,i__18076_18084);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_18085,prov);

var G__18086 = seq__18073_18081;
var G__18087 = chunk__18074_18082;
var G__18088 = count__18075_18083;
var G__18089 = (i__18076_18084 + (1));
seq__18073_18081 = G__18086;
chunk__18074_18082 = G__18087;
count__18075_18083 = G__18088;
i__18076_18084 = G__18089;
continue;
} else {
var temp__4425__auto___18090 = cljs.core.seq.call(null,seq__18073_18081);
if(temp__4425__auto___18090){
var seq__18073_18091__$1 = temp__4425__auto___18090;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18073_18091__$1)){
var c__5457__auto___18092 = cljs.core.chunk_first.call(null,seq__18073_18091__$1);
var G__18093 = cljs.core.chunk_rest.call(null,seq__18073_18091__$1);
var G__18094 = c__5457__auto___18092;
var G__18095 = cljs.core.count.call(null,c__5457__auto___18092);
var G__18096 = (0);
seq__18073_18081 = G__18093;
chunk__18074_18082 = G__18094;
count__18075_18083 = G__18095;
i__18076_18084 = G__18096;
continue;
} else {
var req_18097 = cljs.core.first.call(null,seq__18073_18091__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_18097,prov);

var G__18098 = cljs.core.next.call(null,seq__18073_18091__$1);
var G__18099 = null;
var G__18100 = (0);
var G__18101 = (0);
seq__18073_18081 = G__18098;
chunk__18074_18082 = G__18099;
count__18075_18083 = G__18100;
i__18076_18084 = G__18101;
continue;
}
} else {
}
}
break;
}

var G__18102 = seq__18069;
var G__18103 = chunk__18070;
var G__18104 = count__18071;
var G__18105 = (i__18072 + (1));
seq__18069 = G__18102;
chunk__18070 = G__18103;
count__18071 = G__18104;
i__18072 = G__18105;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__18069);
if(temp__4425__auto__){
var seq__18069__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18069__$1)){
var c__5457__auto__ = cljs.core.chunk_first.call(null,seq__18069__$1);
var G__18106 = cljs.core.chunk_rest.call(null,seq__18069__$1);
var G__18107 = c__5457__auto__;
var G__18108 = cljs.core.count.call(null,c__5457__auto__);
var G__18109 = (0);
seq__18069 = G__18106;
chunk__18070 = G__18107;
count__18071 = G__18108;
i__18072 = G__18109;
continue;
} else {
var prov = cljs.core.first.call(null,seq__18069__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__18077_18110 = cljs.core.seq.call(null,requires);
var chunk__18078_18111 = null;
var count__18079_18112 = (0);
var i__18080_18113 = (0);
while(true){
if((i__18080_18113 < count__18079_18112)){
var req_18114 = cljs.core._nth.call(null,chunk__18078_18111,i__18080_18113);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_18114,prov);

var G__18115 = seq__18077_18110;
var G__18116 = chunk__18078_18111;
var G__18117 = count__18079_18112;
var G__18118 = (i__18080_18113 + (1));
seq__18077_18110 = G__18115;
chunk__18078_18111 = G__18116;
count__18079_18112 = G__18117;
i__18080_18113 = G__18118;
continue;
} else {
var temp__4425__auto___18119__$1 = cljs.core.seq.call(null,seq__18077_18110);
if(temp__4425__auto___18119__$1){
var seq__18077_18120__$1 = temp__4425__auto___18119__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18077_18120__$1)){
var c__5457__auto___18121 = cljs.core.chunk_first.call(null,seq__18077_18120__$1);
var G__18122 = cljs.core.chunk_rest.call(null,seq__18077_18120__$1);
var G__18123 = c__5457__auto___18121;
var G__18124 = cljs.core.count.call(null,c__5457__auto___18121);
var G__18125 = (0);
seq__18077_18110 = G__18122;
chunk__18078_18111 = G__18123;
count__18079_18112 = G__18124;
i__18080_18113 = G__18125;
continue;
} else {
var req_18126 = cljs.core.first.call(null,seq__18077_18120__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_18126,prov);

var G__18127 = cljs.core.next.call(null,seq__18077_18120__$1);
var G__18128 = null;
var G__18129 = (0);
var G__18130 = (0);
seq__18077_18110 = G__18127;
chunk__18078_18111 = G__18128;
count__18079_18112 = G__18129;
i__18080_18113 = G__18130;
continue;
}
} else {
}
}
break;
}

var G__18131 = cljs.core.next.call(null,seq__18069__$1);
var G__18132 = null;
var G__18133 = (0);
var G__18134 = (0);
seq__18069 = G__18131;
chunk__18070 = G__18132;
count__18071 = G__18133;
i__18072 = G__18134;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__18139_18143 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__18140_18144 = null;
var count__18141_18145 = (0);
var i__18142_18146 = (0);
while(true){
if((i__18142_18146 < count__18141_18145)){
var ns_18147 = cljs.core._nth.call(null,chunk__18140_18144,i__18142_18146);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_18147);

var G__18148 = seq__18139_18143;
var G__18149 = chunk__18140_18144;
var G__18150 = count__18141_18145;
var G__18151 = (i__18142_18146 + (1));
seq__18139_18143 = G__18148;
chunk__18140_18144 = G__18149;
count__18141_18145 = G__18150;
i__18142_18146 = G__18151;
continue;
} else {
var temp__4425__auto___18152 = cljs.core.seq.call(null,seq__18139_18143);
if(temp__4425__auto___18152){
var seq__18139_18153__$1 = temp__4425__auto___18152;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18139_18153__$1)){
var c__5457__auto___18154 = cljs.core.chunk_first.call(null,seq__18139_18153__$1);
var G__18155 = cljs.core.chunk_rest.call(null,seq__18139_18153__$1);
var G__18156 = c__5457__auto___18154;
var G__18157 = cljs.core.count.call(null,c__5457__auto___18154);
var G__18158 = (0);
seq__18139_18143 = G__18155;
chunk__18140_18144 = G__18156;
count__18141_18145 = G__18157;
i__18142_18146 = G__18158;
continue;
} else {
var ns_18159 = cljs.core.first.call(null,seq__18139_18153__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_18159);

var G__18160 = cljs.core.next.call(null,seq__18139_18153__$1);
var G__18161 = null;
var G__18162 = (0);
var G__18163 = (0);
seq__18139_18143 = G__18160;
chunk__18140_18144 = G__18161;
count__18141_18145 = G__18162;
i__18142_18146 = G__18163;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__4654__auto__ = goog.require__;
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__18164__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__18164 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__18165__i = 0, G__18165__a = new Array(arguments.length -  0);
while (G__18165__i < G__18165__a.length) {G__18165__a[G__18165__i] = arguments[G__18165__i + 0]; ++G__18165__i;}
  args = new cljs.core.IndexedSeq(G__18165__a,0);
} 
return G__18164__delegate.call(this,args);};
G__18164.cljs$lang$maxFixedArity = 0;
G__18164.cljs$lang$applyTo = (function (arglist__18166){
var args = cljs.core.seq(arglist__18166);
return G__18164__delegate(args);
});
G__18164.cljs$core$IFn$_invoke$arity$variadic = G__18164__delegate;
return G__18164;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__18167 = cljs.core._EQ_;
var expr__18168 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__18167.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__18168))){
return ((function (pred__18167,expr__18168){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e18170){if((e18170 instanceof Error)){
var e = e18170;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e18170;

}
}})());
});
;})(pred__18167,expr__18168))
} else {
if(cljs.core.truth_(pred__18167.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__18168))){
return ((function (pred__18167,expr__18168){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__18167,expr__18168){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__18167,expr__18168))
);

return deferred.addErrback(((function (deferred,pred__18167,expr__18168){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__18167,expr__18168))
);
});
;})(pred__18167,expr__18168))
} else {
return ((function (pred__18167,expr__18168){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__18167,expr__18168))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__18171,callback){
var map__18174 = p__18171;
var map__18174__$1 = ((((!((map__18174 == null)))?((((map__18174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18174):map__18174);
var file_msg = map__18174__$1;
var request_url = cljs.core.get.call(null,map__18174__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__18174,map__18174__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__18174,map__18174__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__){
return (function (state_18198){
var state_val_18199 = (state_18198[(1)]);
if((state_val_18199 === (7))){
var inst_18194 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
var statearr_18200_18220 = state_18198__$1;
(statearr_18200_18220[(2)] = inst_18194);

(statearr_18200_18220[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (1))){
var state_18198__$1 = state_18198;
var statearr_18201_18221 = state_18198__$1;
(statearr_18201_18221[(2)] = null);

(statearr_18201_18221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (4))){
var inst_18178 = (state_18198[(7)]);
var inst_18178__$1 = (state_18198[(2)]);
var state_18198__$1 = (function (){var statearr_18202 = state_18198;
(statearr_18202[(7)] = inst_18178__$1);

return statearr_18202;
})();
if(cljs.core.truth_(inst_18178__$1)){
var statearr_18203_18222 = state_18198__$1;
(statearr_18203_18222[(1)] = (5));

} else {
var statearr_18204_18223 = state_18198__$1;
(statearr_18204_18223[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (6))){
var state_18198__$1 = state_18198;
var statearr_18205_18224 = state_18198__$1;
(statearr_18205_18224[(2)] = null);

(statearr_18205_18224[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (3))){
var inst_18196 = (state_18198[(2)]);
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18198__$1,inst_18196);
} else {
if((state_val_18199 === (2))){
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18198__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_18199 === (11))){
var inst_18190 = (state_18198[(2)]);
var state_18198__$1 = (function (){var statearr_18206 = state_18198;
(statearr_18206[(8)] = inst_18190);

return statearr_18206;
})();
var statearr_18207_18225 = state_18198__$1;
(statearr_18207_18225[(2)] = null);

(statearr_18207_18225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (9))){
var inst_18182 = (state_18198[(9)]);
var inst_18184 = (state_18198[(10)]);
var inst_18186 = inst_18184.call(null,inst_18182);
var state_18198__$1 = state_18198;
var statearr_18208_18226 = state_18198__$1;
(statearr_18208_18226[(2)] = inst_18186);

(statearr_18208_18226[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (5))){
var inst_18178 = (state_18198[(7)]);
var inst_18180 = figwheel.client.file_reloading.blocking_load.call(null,inst_18178);
var state_18198__$1 = state_18198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18198__$1,(8),inst_18180);
} else {
if((state_val_18199 === (10))){
var inst_18182 = (state_18198[(9)]);
var inst_18188 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_18182);
var state_18198__$1 = state_18198;
var statearr_18209_18227 = state_18198__$1;
(statearr_18209_18227[(2)] = inst_18188);

(statearr_18209_18227[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18199 === (8))){
var inst_18178 = (state_18198[(7)]);
var inst_18184 = (state_18198[(10)]);
var inst_18182 = (state_18198[(2)]);
var inst_18183 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_18184__$1 = cljs.core.get.call(null,inst_18183,inst_18178);
var state_18198__$1 = (function (){var statearr_18210 = state_18198;
(statearr_18210[(9)] = inst_18182);

(statearr_18210[(10)] = inst_18184__$1);

return statearr_18210;
})();
if(cljs.core.truth_(inst_18184__$1)){
var statearr_18211_18228 = state_18198__$1;
(statearr_18211_18228[(1)] = (9));

} else {
var statearr_18212_18229 = state_18198__$1;
(statearr_18212_18229[(1)] = (10));

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
});})(c__7252__auto__))
;
return ((function (switch__7187__auto__,c__7252__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__7188__auto__ = null;
var figwheel$client$file_reloading$state_machine__7188__auto____0 = (function (){
var statearr_18216 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_18216[(0)] = figwheel$client$file_reloading$state_machine__7188__auto__);

(statearr_18216[(1)] = (1));

return statearr_18216;
});
var figwheel$client$file_reloading$state_machine__7188__auto____1 = (function (state_18198){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_18198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e18217){if((e18217 instanceof Object)){
var ex__7191__auto__ = e18217;
var statearr_18218_18230 = state_18198;
(statearr_18218_18230[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18217;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18231 = state_18198;
state_18198 = G__18231;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__7188__auto__ = function(state_18198){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__7188__auto____1.call(this,state_18198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__7188__auto____0;
figwheel$client$file_reloading$state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__7188__auto____1;
return figwheel$client$file_reloading$state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__))
})();
var state__7254__auto__ = (function (){var statearr_18219 = f__7253__auto__.call(null);
(statearr_18219[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_18219;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__))
);

return c__7252__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__18232,callback){
var map__18235 = p__18232;
var map__18235__$1 = ((((!((map__18235 == null)))?((((map__18235.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18235.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18235):map__18235);
var file_msg = map__18235__$1;
var namespace = cljs.core.get.call(null,map__18235__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__18235,map__18235__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__18235,map__18235__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__18237){
var map__18240 = p__18237;
var map__18240__$1 = ((((!((map__18240 == null)))?((((map__18240.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18240.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18240):map__18240);
var file_msg = map__18240__$1;
var namespace = cljs.core.get.call(null,map__18240__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__4642__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__4642__auto__){
var or__4654__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4654__auto__)){
return or__4654__auto__;
} else {
var or__4654__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__4654__auto____$1)){
return or__4654__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__4642__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__18242,callback){
var map__18245 = p__18242;
var map__18245__$1 = ((((!((map__18245 == null)))?((((map__18245.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18245.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18245):map__18245);
var file_msg = map__18245__$1;
var request_url = cljs.core.get.call(null,map__18245__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__18245__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__7252__auto___18333 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto___18333,out){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto___18333,out){
return (function (state_18315){
var state_val_18316 = (state_18315[(1)]);
if((state_val_18316 === (1))){
var inst_18293 = cljs.core.nth.call(null,files,(0),null);
var inst_18294 = cljs.core.nthnext.call(null,files,(1));
var inst_18295 = files;
var state_18315__$1 = (function (){var statearr_18317 = state_18315;
(statearr_18317[(7)] = inst_18294);

(statearr_18317[(8)] = inst_18295);

(statearr_18317[(9)] = inst_18293);

return statearr_18317;
})();
var statearr_18318_18334 = state_18315__$1;
(statearr_18318_18334[(2)] = null);

(statearr_18318_18334[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (2))){
var inst_18298 = (state_18315[(10)]);
var inst_18295 = (state_18315[(8)]);
var inst_18298__$1 = cljs.core.nth.call(null,inst_18295,(0),null);
var inst_18299 = cljs.core.nthnext.call(null,inst_18295,(1));
var inst_18300 = (inst_18298__$1 == null);
var inst_18301 = cljs.core.not.call(null,inst_18300);
var state_18315__$1 = (function (){var statearr_18319 = state_18315;
(statearr_18319[(10)] = inst_18298__$1);

(statearr_18319[(11)] = inst_18299);

return statearr_18319;
})();
if(inst_18301){
var statearr_18320_18335 = state_18315__$1;
(statearr_18320_18335[(1)] = (4));

} else {
var statearr_18321_18336 = state_18315__$1;
(statearr_18321_18336[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (3))){
var inst_18313 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18315__$1,inst_18313);
} else {
if((state_val_18316 === (4))){
var inst_18298 = (state_18315[(10)]);
var inst_18303 = figwheel.client.file_reloading.reload_js_file.call(null,inst_18298);
var state_18315__$1 = state_18315;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18315__$1,(7),inst_18303);
} else {
if((state_val_18316 === (5))){
var inst_18309 = cljs.core.async.close_BANG_.call(null,out);
var state_18315__$1 = state_18315;
var statearr_18322_18337 = state_18315__$1;
(statearr_18322_18337[(2)] = inst_18309);

(statearr_18322_18337[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (6))){
var inst_18311 = (state_18315[(2)]);
var state_18315__$1 = state_18315;
var statearr_18323_18338 = state_18315__$1;
(statearr_18323_18338[(2)] = inst_18311);

(statearr_18323_18338[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18316 === (7))){
var inst_18299 = (state_18315[(11)]);
var inst_18305 = (state_18315[(2)]);
var inst_18306 = cljs.core.async.put_BANG_.call(null,out,inst_18305);
var inst_18295 = inst_18299;
var state_18315__$1 = (function (){var statearr_18324 = state_18315;
(statearr_18324[(12)] = inst_18306);

(statearr_18324[(8)] = inst_18295);

return statearr_18324;
})();
var statearr_18325_18339 = state_18315__$1;
(statearr_18325_18339[(2)] = null);

(statearr_18325_18339[(1)] = (2));


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
});})(c__7252__auto___18333,out))
;
return ((function (switch__7187__auto__,c__7252__auto___18333,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto____0 = (function (){
var statearr_18329 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18329[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto__);

(statearr_18329[(1)] = (1));

return statearr_18329;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto____1 = (function (state_18315){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_18315);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e18330){if((e18330 instanceof Object)){
var ex__7191__auto__ = e18330;
var statearr_18331_18340 = state_18315;
(statearr_18331_18340[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18315);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18330;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18341 = state_18315;
state_18315 = G__18341;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto__ = function(state_18315){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto____1.call(this,state_18315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto___18333,out))
})();
var state__7254__auto__ = (function (){var statearr_18332 = f__7253__auto__.call(null);
(statearr_18332[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto___18333);

return statearr_18332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto___18333,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__18342,opts){
var map__18346 = p__18342;
var map__18346__$1 = ((((!((map__18346 == null)))?((((map__18346.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18346.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18346):map__18346);
var eval_body__$1 = cljs.core.get.call(null,map__18346__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__18346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__4642__auto__ = eval_body__$1;
if(cljs.core.truth_(and__4642__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__4642__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e18348){var e = e18348;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__18349_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__18349_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__18354){
var vec__18355 = p__18354;
var k = cljs.core.nth.call(null,vec__18355,(0),null);
var v = cljs.core.nth.call(null,vec__18355,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__18356){
var vec__18357 = p__18356;
var k = cljs.core.nth.call(null,vec__18357,(0),null);
var v = cljs.core.nth.call(null,vec__18357,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__18361,p__18362){
var map__18609 = p__18361;
var map__18609__$1 = ((((!((map__18609 == null)))?((((map__18609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18609):map__18609);
var opts = map__18609__$1;
var before_jsload = cljs.core.get.call(null,map__18609__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__18609__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__18609__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__18610 = p__18362;
var map__18610__$1 = ((((!((map__18610 == null)))?((((map__18610.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18610.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18610):map__18610);
var msg = map__18610__$1;
var files = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__18610__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__7252__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__7253__auto__ = (function (){var switch__7187__auto__ = ((function (c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_18763){
var state_val_18764 = (state_18763[(1)]);
if((state_val_18764 === (7))){
var inst_18625 = (state_18763[(7)]);
var inst_18626 = (state_18763[(8)]);
var inst_18624 = (state_18763[(9)]);
var inst_18627 = (state_18763[(10)]);
var inst_18632 = cljs.core._nth.call(null,inst_18625,inst_18627);
var inst_18633 = figwheel.client.file_reloading.eval_body.call(null,inst_18632,opts);
var inst_18634 = (inst_18627 + (1));
var tmp18765 = inst_18625;
var tmp18766 = inst_18626;
var tmp18767 = inst_18624;
var inst_18624__$1 = tmp18767;
var inst_18625__$1 = tmp18765;
var inst_18626__$1 = tmp18766;
var inst_18627__$1 = inst_18634;
var state_18763__$1 = (function (){var statearr_18768 = state_18763;
(statearr_18768[(7)] = inst_18625__$1);

(statearr_18768[(11)] = inst_18633);

(statearr_18768[(8)] = inst_18626__$1);

(statearr_18768[(9)] = inst_18624__$1);

(statearr_18768[(10)] = inst_18627__$1);

return statearr_18768;
})();
var statearr_18769_18855 = state_18763__$1;
(statearr_18769_18855[(2)] = null);

(statearr_18769_18855[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (20))){
var inst_18667 = (state_18763[(12)]);
var inst_18675 = figwheel.client.file_reloading.sort_files.call(null,inst_18667);
var state_18763__$1 = state_18763;
var statearr_18770_18856 = state_18763__$1;
(statearr_18770_18856[(2)] = inst_18675);

(statearr_18770_18856[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (27))){
var state_18763__$1 = state_18763;
var statearr_18771_18857 = state_18763__$1;
(statearr_18771_18857[(2)] = null);

(statearr_18771_18857[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (1))){
var inst_18616 = (state_18763[(13)]);
var inst_18613 = before_jsload.call(null,files);
var inst_18614 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_18615 = (function (){return ((function (inst_18616,inst_18613,inst_18614,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__18358_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18358_SHARP_);
});
;})(inst_18616,inst_18613,inst_18614,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_18616__$1 = cljs.core.filter.call(null,inst_18615,files);
var inst_18617 = cljs.core.not_empty.call(null,inst_18616__$1);
var state_18763__$1 = (function (){var statearr_18772 = state_18763;
(statearr_18772[(13)] = inst_18616__$1);

(statearr_18772[(14)] = inst_18613);

(statearr_18772[(15)] = inst_18614);

return statearr_18772;
})();
if(cljs.core.truth_(inst_18617)){
var statearr_18773_18858 = state_18763__$1;
(statearr_18773_18858[(1)] = (2));

} else {
var statearr_18774_18859 = state_18763__$1;
(statearr_18774_18859[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (24))){
var state_18763__$1 = state_18763;
var statearr_18775_18860 = state_18763__$1;
(statearr_18775_18860[(2)] = null);

(statearr_18775_18860[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (39))){
var inst_18717 = (state_18763[(16)]);
var state_18763__$1 = state_18763;
var statearr_18776_18861 = state_18763__$1;
(statearr_18776_18861[(2)] = inst_18717);

(statearr_18776_18861[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (46))){
var inst_18758 = (state_18763[(2)]);
var state_18763__$1 = state_18763;
var statearr_18777_18862 = state_18763__$1;
(statearr_18777_18862[(2)] = inst_18758);

(statearr_18777_18862[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (4))){
var inst_18661 = (state_18763[(2)]);
var inst_18662 = cljs.core.List.EMPTY;
var inst_18663 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_18662);
var inst_18664 = (function (){return ((function (inst_18661,inst_18662,inst_18663,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__18359_SHARP_){
var and__4642__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__18359_SHARP_);
if(cljs.core.truth_(and__4642__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__18359_SHARP_));
} else {
return and__4642__auto__;
}
});
;})(inst_18661,inst_18662,inst_18663,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_18665 = cljs.core.filter.call(null,inst_18664,files);
var inst_18666 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_18667 = cljs.core.concat.call(null,inst_18665,inst_18666);
var state_18763__$1 = (function (){var statearr_18778 = state_18763;
(statearr_18778[(12)] = inst_18667);

(statearr_18778[(17)] = inst_18661);

(statearr_18778[(18)] = inst_18663);

return statearr_18778;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_18779_18863 = state_18763__$1;
(statearr_18779_18863[(1)] = (16));

} else {
var statearr_18780_18864 = state_18763__$1;
(statearr_18780_18864[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (15))){
var inst_18651 = (state_18763[(2)]);
var state_18763__$1 = state_18763;
var statearr_18781_18865 = state_18763__$1;
(statearr_18781_18865[(2)] = inst_18651);

(statearr_18781_18865[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (21))){
var inst_18677 = (state_18763[(19)]);
var inst_18677__$1 = (state_18763[(2)]);
var inst_18678 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_18677__$1);
var state_18763__$1 = (function (){var statearr_18782 = state_18763;
(statearr_18782[(19)] = inst_18677__$1);

return statearr_18782;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18763__$1,(22),inst_18678);
} else {
if((state_val_18764 === (31))){
var inst_18761 = (state_18763[(2)]);
var state_18763__$1 = state_18763;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18763__$1,inst_18761);
} else {
if((state_val_18764 === (32))){
var inst_18717 = (state_18763[(16)]);
var inst_18722 = inst_18717.cljs$lang$protocol_mask$partition0$;
var inst_18723 = (inst_18722 & (64));
var inst_18724 = inst_18717.cljs$core$ISeq$;
var inst_18725 = (inst_18723) || (inst_18724);
var state_18763__$1 = state_18763;
if(cljs.core.truth_(inst_18725)){
var statearr_18783_18866 = state_18763__$1;
(statearr_18783_18866[(1)] = (35));

} else {
var statearr_18784_18867 = state_18763__$1;
(statearr_18784_18867[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (40))){
var inst_18738 = (state_18763[(20)]);
var inst_18737 = (state_18763[(2)]);
var inst_18738__$1 = cljs.core.get.call(null,inst_18737,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_18739 = cljs.core.get.call(null,inst_18737,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_18740 = cljs.core.not_empty.call(null,inst_18738__$1);
var state_18763__$1 = (function (){var statearr_18785 = state_18763;
(statearr_18785[(21)] = inst_18739);

(statearr_18785[(20)] = inst_18738__$1);

return statearr_18785;
})();
if(cljs.core.truth_(inst_18740)){
var statearr_18786_18868 = state_18763__$1;
(statearr_18786_18868[(1)] = (41));

} else {
var statearr_18787_18869 = state_18763__$1;
(statearr_18787_18869[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (33))){
var state_18763__$1 = state_18763;
var statearr_18788_18870 = state_18763__$1;
(statearr_18788_18870[(2)] = false);

(statearr_18788_18870[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (13))){
var inst_18637 = (state_18763[(22)]);
var inst_18641 = cljs.core.chunk_first.call(null,inst_18637);
var inst_18642 = cljs.core.chunk_rest.call(null,inst_18637);
var inst_18643 = cljs.core.count.call(null,inst_18641);
var inst_18624 = inst_18642;
var inst_18625 = inst_18641;
var inst_18626 = inst_18643;
var inst_18627 = (0);
var state_18763__$1 = (function (){var statearr_18789 = state_18763;
(statearr_18789[(7)] = inst_18625);

(statearr_18789[(8)] = inst_18626);

(statearr_18789[(9)] = inst_18624);

(statearr_18789[(10)] = inst_18627);

return statearr_18789;
})();
var statearr_18790_18871 = state_18763__$1;
(statearr_18790_18871[(2)] = null);

(statearr_18790_18871[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (22))){
var inst_18685 = (state_18763[(23)]);
var inst_18677 = (state_18763[(19)]);
var inst_18681 = (state_18763[(24)]);
var inst_18680 = (state_18763[(25)]);
var inst_18680__$1 = (state_18763[(2)]);
var inst_18681__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_18680__$1);
var inst_18682 = (function (){var all_files = inst_18677;
var res_SINGLEQUOTE_ = inst_18680__$1;
var res = inst_18681__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_18685,inst_18677,inst_18681,inst_18680,inst_18680__$1,inst_18681__$1,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__18360_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__18360_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_18685,inst_18677,inst_18681,inst_18680,inst_18680__$1,inst_18681__$1,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_18683 = cljs.core.filter.call(null,inst_18682,inst_18680__$1);
var inst_18684 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_18685__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_18684);
var inst_18686 = cljs.core.not_empty.call(null,inst_18685__$1);
var state_18763__$1 = (function (){var statearr_18791 = state_18763;
(statearr_18791[(23)] = inst_18685__$1);

(statearr_18791[(26)] = inst_18683);

(statearr_18791[(24)] = inst_18681__$1);

(statearr_18791[(25)] = inst_18680__$1);

return statearr_18791;
})();
if(cljs.core.truth_(inst_18686)){
var statearr_18792_18872 = state_18763__$1;
(statearr_18792_18872[(1)] = (23));

} else {
var statearr_18793_18873 = state_18763__$1;
(statearr_18793_18873[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (36))){
var state_18763__$1 = state_18763;
var statearr_18794_18874 = state_18763__$1;
(statearr_18794_18874[(2)] = false);

(statearr_18794_18874[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (41))){
var inst_18738 = (state_18763[(20)]);
var inst_18742 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_18743 = cljs.core.map.call(null,inst_18742,inst_18738);
var inst_18744 = cljs.core.pr_str.call(null,inst_18743);
var inst_18745 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_18744)].join('');
var inst_18746 = figwheel.client.utils.log.call(null,inst_18745);
var state_18763__$1 = state_18763;
var statearr_18795_18875 = state_18763__$1;
(statearr_18795_18875[(2)] = inst_18746);

(statearr_18795_18875[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (43))){
var inst_18739 = (state_18763[(21)]);
var inst_18749 = (state_18763[(2)]);
var inst_18750 = cljs.core.not_empty.call(null,inst_18739);
var state_18763__$1 = (function (){var statearr_18796 = state_18763;
(statearr_18796[(27)] = inst_18749);

return statearr_18796;
})();
if(cljs.core.truth_(inst_18750)){
var statearr_18797_18876 = state_18763__$1;
(statearr_18797_18876[(1)] = (44));

} else {
var statearr_18798_18877 = state_18763__$1;
(statearr_18798_18877[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (29))){
var inst_18685 = (state_18763[(23)]);
var inst_18677 = (state_18763[(19)]);
var inst_18683 = (state_18763[(26)]);
var inst_18681 = (state_18763[(24)]);
var inst_18680 = (state_18763[(25)]);
var inst_18717 = (state_18763[(16)]);
var inst_18713 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_18716 = (function (){var all_files = inst_18677;
var res_SINGLEQUOTE_ = inst_18680;
var res = inst_18681;
var files_not_loaded = inst_18683;
var dependencies_that_loaded = inst_18685;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_18685,inst_18677,inst_18683,inst_18681,inst_18680,inst_18717,inst_18713,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__18715){
var map__18799 = p__18715;
var map__18799__$1 = ((((!((map__18799 == null)))?((((map__18799.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18799.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18799):map__18799);
var namespace = cljs.core.get.call(null,map__18799__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_18685,inst_18677,inst_18683,inst_18681,inst_18680,inst_18717,inst_18713,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_18717__$1 = cljs.core.group_by.call(null,inst_18716,inst_18683);
var inst_18719 = (inst_18717__$1 == null);
var inst_18720 = cljs.core.not.call(null,inst_18719);
var state_18763__$1 = (function (){var statearr_18801 = state_18763;
(statearr_18801[(28)] = inst_18713);

(statearr_18801[(16)] = inst_18717__$1);

return statearr_18801;
})();
if(inst_18720){
var statearr_18802_18878 = state_18763__$1;
(statearr_18802_18878[(1)] = (32));

} else {
var statearr_18803_18879 = state_18763__$1;
(statearr_18803_18879[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (44))){
var inst_18739 = (state_18763[(21)]);
var inst_18752 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_18739);
var inst_18753 = cljs.core.pr_str.call(null,inst_18752);
var inst_18754 = [cljs.core.str("not required: "),cljs.core.str(inst_18753)].join('');
var inst_18755 = figwheel.client.utils.log.call(null,inst_18754);
var state_18763__$1 = state_18763;
var statearr_18804_18880 = state_18763__$1;
(statearr_18804_18880[(2)] = inst_18755);

(statearr_18804_18880[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (6))){
var inst_18658 = (state_18763[(2)]);
var state_18763__$1 = state_18763;
var statearr_18805_18881 = state_18763__$1;
(statearr_18805_18881[(2)] = inst_18658);

(statearr_18805_18881[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (28))){
var inst_18683 = (state_18763[(26)]);
var inst_18710 = (state_18763[(2)]);
var inst_18711 = cljs.core.not_empty.call(null,inst_18683);
var state_18763__$1 = (function (){var statearr_18806 = state_18763;
(statearr_18806[(29)] = inst_18710);

return statearr_18806;
})();
if(cljs.core.truth_(inst_18711)){
var statearr_18807_18882 = state_18763__$1;
(statearr_18807_18882[(1)] = (29));

} else {
var statearr_18808_18883 = state_18763__$1;
(statearr_18808_18883[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (25))){
var inst_18681 = (state_18763[(24)]);
var inst_18697 = (state_18763[(2)]);
var inst_18698 = cljs.core.not_empty.call(null,inst_18681);
var state_18763__$1 = (function (){var statearr_18809 = state_18763;
(statearr_18809[(30)] = inst_18697);

return statearr_18809;
})();
if(cljs.core.truth_(inst_18698)){
var statearr_18810_18884 = state_18763__$1;
(statearr_18810_18884[(1)] = (26));

} else {
var statearr_18811_18885 = state_18763__$1;
(statearr_18811_18885[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (34))){
var inst_18732 = (state_18763[(2)]);
var state_18763__$1 = state_18763;
if(cljs.core.truth_(inst_18732)){
var statearr_18812_18886 = state_18763__$1;
(statearr_18812_18886[(1)] = (38));

} else {
var statearr_18813_18887 = state_18763__$1;
(statearr_18813_18887[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (17))){
var state_18763__$1 = state_18763;
var statearr_18814_18888 = state_18763__$1;
(statearr_18814_18888[(2)] = recompile_dependents);

(statearr_18814_18888[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (3))){
var state_18763__$1 = state_18763;
var statearr_18815_18889 = state_18763__$1;
(statearr_18815_18889[(2)] = null);

(statearr_18815_18889[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (12))){
var inst_18654 = (state_18763[(2)]);
var state_18763__$1 = state_18763;
var statearr_18816_18890 = state_18763__$1;
(statearr_18816_18890[(2)] = inst_18654);

(statearr_18816_18890[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (2))){
var inst_18616 = (state_18763[(13)]);
var inst_18623 = cljs.core.seq.call(null,inst_18616);
var inst_18624 = inst_18623;
var inst_18625 = null;
var inst_18626 = (0);
var inst_18627 = (0);
var state_18763__$1 = (function (){var statearr_18817 = state_18763;
(statearr_18817[(7)] = inst_18625);

(statearr_18817[(8)] = inst_18626);

(statearr_18817[(9)] = inst_18624);

(statearr_18817[(10)] = inst_18627);

return statearr_18817;
})();
var statearr_18818_18891 = state_18763__$1;
(statearr_18818_18891[(2)] = null);

(statearr_18818_18891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (23))){
var inst_18685 = (state_18763[(23)]);
var inst_18677 = (state_18763[(19)]);
var inst_18683 = (state_18763[(26)]);
var inst_18681 = (state_18763[(24)]);
var inst_18680 = (state_18763[(25)]);
var inst_18688 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_18690 = (function (){var all_files = inst_18677;
var res_SINGLEQUOTE_ = inst_18680;
var res = inst_18681;
var files_not_loaded = inst_18683;
var dependencies_that_loaded = inst_18685;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_18685,inst_18677,inst_18683,inst_18681,inst_18680,inst_18688,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__18689){
var map__18819 = p__18689;
var map__18819__$1 = ((((!((map__18819 == null)))?((((map__18819.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18819.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18819):map__18819);
var request_url = cljs.core.get.call(null,map__18819__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_18685,inst_18677,inst_18683,inst_18681,inst_18680,inst_18688,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_18691 = cljs.core.reverse.call(null,inst_18685);
var inst_18692 = cljs.core.map.call(null,inst_18690,inst_18691);
var inst_18693 = cljs.core.pr_str.call(null,inst_18692);
var inst_18694 = figwheel.client.utils.log.call(null,inst_18693);
var state_18763__$1 = (function (){var statearr_18821 = state_18763;
(statearr_18821[(31)] = inst_18688);

return statearr_18821;
})();
var statearr_18822_18892 = state_18763__$1;
(statearr_18822_18892[(2)] = inst_18694);

(statearr_18822_18892[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (35))){
var state_18763__$1 = state_18763;
var statearr_18823_18893 = state_18763__$1;
(statearr_18823_18893[(2)] = true);

(statearr_18823_18893[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (19))){
var inst_18667 = (state_18763[(12)]);
var inst_18673 = figwheel.client.file_reloading.expand_files.call(null,inst_18667);
var state_18763__$1 = state_18763;
var statearr_18824_18894 = state_18763__$1;
(statearr_18824_18894[(2)] = inst_18673);

(statearr_18824_18894[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (11))){
var state_18763__$1 = state_18763;
var statearr_18825_18895 = state_18763__$1;
(statearr_18825_18895[(2)] = null);

(statearr_18825_18895[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (9))){
var inst_18656 = (state_18763[(2)]);
var state_18763__$1 = state_18763;
var statearr_18826_18896 = state_18763__$1;
(statearr_18826_18896[(2)] = inst_18656);

(statearr_18826_18896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (5))){
var inst_18626 = (state_18763[(8)]);
var inst_18627 = (state_18763[(10)]);
var inst_18629 = (inst_18627 < inst_18626);
var inst_18630 = inst_18629;
var state_18763__$1 = state_18763;
if(cljs.core.truth_(inst_18630)){
var statearr_18827_18897 = state_18763__$1;
(statearr_18827_18897[(1)] = (7));

} else {
var statearr_18828_18898 = state_18763__$1;
(statearr_18828_18898[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (14))){
var inst_18637 = (state_18763[(22)]);
var inst_18646 = cljs.core.first.call(null,inst_18637);
var inst_18647 = figwheel.client.file_reloading.eval_body.call(null,inst_18646,opts);
var inst_18648 = cljs.core.next.call(null,inst_18637);
var inst_18624 = inst_18648;
var inst_18625 = null;
var inst_18626 = (0);
var inst_18627 = (0);
var state_18763__$1 = (function (){var statearr_18829 = state_18763;
(statearr_18829[(7)] = inst_18625);

(statearr_18829[(8)] = inst_18626);

(statearr_18829[(32)] = inst_18647);

(statearr_18829[(9)] = inst_18624);

(statearr_18829[(10)] = inst_18627);

return statearr_18829;
})();
var statearr_18830_18899 = state_18763__$1;
(statearr_18830_18899[(2)] = null);

(statearr_18830_18899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (45))){
var state_18763__$1 = state_18763;
var statearr_18831_18900 = state_18763__$1;
(statearr_18831_18900[(2)] = null);

(statearr_18831_18900[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (26))){
var inst_18685 = (state_18763[(23)]);
var inst_18677 = (state_18763[(19)]);
var inst_18683 = (state_18763[(26)]);
var inst_18681 = (state_18763[(24)]);
var inst_18680 = (state_18763[(25)]);
var inst_18700 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_18702 = (function (){var all_files = inst_18677;
var res_SINGLEQUOTE_ = inst_18680;
var res = inst_18681;
var files_not_loaded = inst_18683;
var dependencies_that_loaded = inst_18685;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_18685,inst_18677,inst_18683,inst_18681,inst_18680,inst_18700,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__18701){
var map__18832 = p__18701;
var map__18832__$1 = ((((!((map__18832 == null)))?((((map__18832.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18832.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18832):map__18832);
var namespace = cljs.core.get.call(null,map__18832__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__18832__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_18685,inst_18677,inst_18683,inst_18681,inst_18680,inst_18700,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_18703 = cljs.core.map.call(null,inst_18702,inst_18681);
var inst_18704 = cljs.core.pr_str.call(null,inst_18703);
var inst_18705 = figwheel.client.utils.log.call(null,inst_18704);
var inst_18706 = (function (){var all_files = inst_18677;
var res_SINGLEQUOTE_ = inst_18680;
var res = inst_18681;
var files_not_loaded = inst_18683;
var dependencies_that_loaded = inst_18685;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_18685,inst_18677,inst_18683,inst_18681,inst_18680,inst_18700,inst_18702,inst_18703,inst_18704,inst_18705,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_18685,inst_18677,inst_18683,inst_18681,inst_18680,inst_18700,inst_18702,inst_18703,inst_18704,inst_18705,state_val_18764,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_18707 = setTimeout(inst_18706,(10));
var state_18763__$1 = (function (){var statearr_18834 = state_18763;
(statearr_18834[(33)] = inst_18700);

(statearr_18834[(34)] = inst_18705);

return statearr_18834;
})();
var statearr_18835_18901 = state_18763__$1;
(statearr_18835_18901[(2)] = inst_18707);

(statearr_18835_18901[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (16))){
var state_18763__$1 = state_18763;
var statearr_18836_18902 = state_18763__$1;
(statearr_18836_18902[(2)] = reload_dependents);

(statearr_18836_18902[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (38))){
var inst_18717 = (state_18763[(16)]);
var inst_18734 = cljs.core.apply.call(null,cljs.core.hash_map,inst_18717);
var state_18763__$1 = state_18763;
var statearr_18837_18903 = state_18763__$1;
(statearr_18837_18903[(2)] = inst_18734);

(statearr_18837_18903[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (30))){
var state_18763__$1 = state_18763;
var statearr_18838_18904 = state_18763__$1;
(statearr_18838_18904[(2)] = null);

(statearr_18838_18904[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (10))){
var inst_18637 = (state_18763[(22)]);
var inst_18639 = cljs.core.chunked_seq_QMARK_.call(null,inst_18637);
var state_18763__$1 = state_18763;
if(inst_18639){
var statearr_18839_18905 = state_18763__$1;
(statearr_18839_18905[(1)] = (13));

} else {
var statearr_18840_18906 = state_18763__$1;
(statearr_18840_18906[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (18))){
var inst_18671 = (state_18763[(2)]);
var state_18763__$1 = state_18763;
if(cljs.core.truth_(inst_18671)){
var statearr_18841_18907 = state_18763__$1;
(statearr_18841_18907[(1)] = (19));

} else {
var statearr_18842_18908 = state_18763__$1;
(statearr_18842_18908[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (42))){
var state_18763__$1 = state_18763;
var statearr_18843_18909 = state_18763__$1;
(statearr_18843_18909[(2)] = null);

(statearr_18843_18909[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (37))){
var inst_18729 = (state_18763[(2)]);
var state_18763__$1 = state_18763;
var statearr_18844_18910 = state_18763__$1;
(statearr_18844_18910[(2)] = inst_18729);

(statearr_18844_18910[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_18764 === (8))){
var inst_18637 = (state_18763[(22)]);
var inst_18624 = (state_18763[(9)]);
var inst_18637__$1 = cljs.core.seq.call(null,inst_18624);
var state_18763__$1 = (function (){var statearr_18845 = state_18763;
(statearr_18845[(22)] = inst_18637__$1);

return statearr_18845;
})();
if(inst_18637__$1){
var statearr_18846_18911 = state_18763__$1;
(statearr_18846_18911[(1)] = (10));

} else {
var statearr_18847_18912 = state_18763__$1;
(statearr_18847_18912[(1)] = (11));

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
}
});})(c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__7187__auto__,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto____0 = (function (){
var statearr_18851 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_18851[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto__);

(statearr_18851[(1)] = (1));

return statearr_18851;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto____1 = (function (state_18763){
while(true){
var ret_value__7189__auto__ = (function (){try{while(true){
var result__7190__auto__ = switch__7187__auto__.call(null,state_18763);
if(cljs.core.keyword_identical_QMARK_.call(null,result__7190__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__7190__auto__;
}
break;
}
}catch (e18852){if((e18852 instanceof Object)){
var ex__7191__auto__ = e18852;
var statearr_18853_18913 = state_18763;
(statearr_18853_18913[(5)] = ex__7191__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18763);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e18852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7189__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__18914 = state_18763;
state_18763 = G__18914;
continue;
} else {
return ret_value__7189__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto__ = function(state_18763){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto____1.call(this,state_18763);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__7188__auto__;
})()
;})(switch__7187__auto__,c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__7254__auto__ = (function (){var statearr_18854 = f__7253__auto__.call(null);
(statearr_18854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7252__auto__);

return statearr_18854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7254__auto__);
});})(c__7252__auto__,map__18609,map__18609__$1,opts,before_jsload,on_jsload,reload_dependents,map__18610,map__18610__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__7252__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__18917,link){
var map__18920 = p__18917;
var map__18920__$1 = ((((!((map__18920 == null)))?((((map__18920.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18920.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18920):map__18920);
var file = cljs.core.get.call(null,map__18920__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__18920,map__18920__$1,file){
return (function (p1__18915_SHARP_,p2__18916_SHARP_){
if(cljs.core._EQ_.call(null,p1__18915_SHARP_,p2__18916_SHARP_)){
return p1__18915_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__18920,map__18920__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__18926){
var map__18927 = p__18926;
var map__18927__$1 = ((((!((map__18927 == null)))?((((map__18927.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18927.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18927):map__18927);
var match_length = cljs.core.get.call(null,map__18927__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__18927__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__18922_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__18922_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args18929 = [];
var len__5712__auto___18932 = arguments.length;
var i__5713__auto___18933 = (0);
while(true){
if((i__5713__auto___18933 < len__5712__auto___18932)){
args18929.push((arguments[i__5713__auto___18933]));

var G__18934 = (i__5713__auto___18933 + (1));
i__5713__auto___18933 = G__18934;
continue;
} else {
}
break;
}

var G__18931 = args18929.length;
switch (G__18931) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args18929.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__18936_SHARP_,p2__18937_SHARP_){
return cljs.core.assoc.call(null,p1__18936_SHARP_,cljs.core.get.call(null,p2__18937_SHARP_,key),p2__18937_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__18938){
var map__18941 = p__18938;
var map__18941__$1 = ((((!((map__18941 == null)))?((((map__18941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18941):map__18941);
var f_data = map__18941__$1;
var file = cljs.core.get.call(null,map__18941__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__18943,files_msg){
var map__18950 = p__18943;
var map__18950__$1 = ((((!((map__18950 == null)))?((((map__18950.cljs$lang$protocol_mask$partition0$ & (64))) || (map__18950.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18950):map__18950);
var opts = map__18950__$1;
var on_cssload = cljs.core.get.call(null,map__18950__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__18952_18956 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__18953_18957 = null;
var count__18954_18958 = (0);
var i__18955_18959 = (0);
while(true){
if((i__18955_18959 < count__18954_18958)){
var f_18960 = cljs.core._nth.call(null,chunk__18953_18957,i__18955_18959);
figwheel.client.file_reloading.reload_css_file.call(null,f_18960);

var G__18961 = seq__18952_18956;
var G__18962 = chunk__18953_18957;
var G__18963 = count__18954_18958;
var G__18964 = (i__18955_18959 + (1));
seq__18952_18956 = G__18961;
chunk__18953_18957 = G__18962;
count__18954_18958 = G__18963;
i__18955_18959 = G__18964;
continue;
} else {
var temp__4425__auto___18965 = cljs.core.seq.call(null,seq__18952_18956);
if(temp__4425__auto___18965){
var seq__18952_18966__$1 = temp__4425__auto___18965;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18952_18966__$1)){
var c__5457__auto___18967 = cljs.core.chunk_first.call(null,seq__18952_18966__$1);
var G__18968 = cljs.core.chunk_rest.call(null,seq__18952_18966__$1);
var G__18969 = c__5457__auto___18967;
var G__18970 = cljs.core.count.call(null,c__5457__auto___18967);
var G__18971 = (0);
seq__18952_18956 = G__18968;
chunk__18953_18957 = G__18969;
count__18954_18958 = G__18970;
i__18955_18959 = G__18971;
continue;
} else {
var f_18972 = cljs.core.first.call(null,seq__18952_18966__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_18972);

var G__18973 = cljs.core.next.call(null,seq__18952_18966__$1);
var G__18974 = null;
var G__18975 = (0);
var G__18976 = (0);
seq__18952_18956 = G__18973;
chunk__18953_18957 = G__18974;
count__18954_18958 = G__18975;
i__18955_18959 = G__18976;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__18950,map__18950__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__18950,map__18950__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map