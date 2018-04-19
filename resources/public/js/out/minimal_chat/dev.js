// Compiled by ClojureScript 1.7.122 {}
goog.provide('minimal_chat.dev');
goog.require('cljs.core');
goog.require('minimal_chat.core');
goog.require('figwheel.client');
goog.require('weasel.repl');
goog.require('reagent.core');
cljs.core.enable_console_print_BANG_.call(null);
figwheel.client.watch_and_reload.call(null,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws",new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),(function (){
return reagent.core.force_update_all.call(null);
}));
weasel.repl.connect.call(null,"ws://localhost:9001",new cljs.core.Keyword(null,"verbose","verbose",1694226060),true);
minimal_chat.core.init_BANG_.call(null);

//# sourceMappingURL=dev.js.map