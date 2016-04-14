define("amber-first/First", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects", "amber/web/Web"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('First');
$core.packages["First"].innerEval = function (expr) { return eval(expr); };
$core.packages["First"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["First"].transport = {"type":"amd","amdNamespace":"amber-first"};

$core.addClass('AddTask', $globals.Object, ['name', 'count', 'id'], 'First');
$core.addMethod(
$core.method({
selector: "id",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self["@id"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "id\x0a\x09^id",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AddTask);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.AddTask.superclass||$boot.dnu).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($1)._addToCollection();
$2=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
self["@id"]=$recv($2)._takeId();
self["@name"]=$recv(self._class())._takeName();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AddTask)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09self class addToCollection.\x0a\x09id := self class takeId.\x0a    name := self class takeName",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "addToCollection", "class", "takeId", "takeName"]
}),
$globals.AddTask);

$core.addMethod(
$core.method({
selector: "name",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self["@name"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "name\x0a\x09^name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AddTask);

$core.addMethod(
$core.method({
selector: "nameClose",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1;
$3=$recv("".__comma(self["@id"])).__comma(") ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=4;
//>>excludeEnd("ctx");
$2=$recv($3).__comma(self["@name"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=3;
//>>excludeEnd("ctx");
$1=$recv($2).__comma(" ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
self["@name"]=$recv($1).__comma("close");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
return self["@name"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nameClose",{},$globals.AddTask)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nameClose\x0a\x09name := '',id,') ',name,' ','close'.\x0a\x09^name",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: [","]
}),
$globals.AddTask);


$globals.AddTask.klass.iVarNames = ['lastId','taskCollection','idTest','nameTest'];
$core.addMethod(
$core.method({
selector: "addToCollection",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@taskCollection"])._at_put_(self._nextId(),$recv("#input"._asJQuery())._val());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToCollection",{},$globals.AddTask.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addToCollection\x0a\x09taskCollection at: self nextId put:  '#input' asJQuery val\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "nextId", "val", "asJQuery"]
}),
$globals.AddTask.klass);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.AddTask.klass.superclass||$boot.dnu).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@taskCollection"]=$recv($globals.Dictionary)._new();
self._resetId();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.AddTask.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09taskCollection := Dictionary new.\x0a\x09self resetId",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "resetId"]
}),
$globals.AddTask.klass);

$core.addMethod(
$core.method({
selector: "nextId",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@lastId"]=$recv(self["@lastId"]).__plus((1));
$1=self["@lastId"];
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"nextId",{},$globals.AddTask.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextId\x0a\x09^lastId := lastId +1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+"]
}),
$globals.AddTask.klass);

$core.addMethod(
$core.method({
selector: "resetId",
protocol: 'not yet classified',
fn: function (){
var self=this;
self["@lastId"]=(0);
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetId\x0a\x09lastId := 0",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AddTask.klass);

$core.addMethod(
$core.method({
selector: "takeId",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self["@lastId"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "takeId\x0a\x09^lastId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.AddTask.klass);

$core.addMethod(
$core.method({
selector: "takeName",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
return $recv(self["@taskCollection"])._at_(self["@lastId"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"takeName",{},$globals.AddTask.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "takeName\x0a\x09^taskCollection at: lastId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.AddTask.klass);


$core.addClass('AmberRemoteConnector', $globals.Object, ['socket'], 'First');

$globals.AmberRemoteConnector.klass.iVarNames = ['socket'];
$core.addMethod(
$core.method({
selector: "createSocket",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3;
self["@socket"]=$recv($globals.NativeFunction)._constructor_value_("WebSocket","ws://echo.websocket.org/");
$recv(self["@socket"])._onopen_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1="#output-list"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
return $recv($1)._append_("<li>Connected</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["append:"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@socket"])._onmessage_((function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$2="#output-list"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$3=$recv("<li>".__comma($recv(evt)._data())).__comma("</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx[","]=1;
//>>excludeEnd("ctx");
return $recv($2)._append_($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["append:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self["@socket"])._onclose_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv("#output-list"._asJQuery())._append_("<li>Connection lost</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createSocket",{},$globals.AmberRemoteConnector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "createSocket\x0a\x09\x09socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org/'.\x0a\x09\x09socket onopen: [ '#output-list' asJQuery append: '<li>Connected</li>'].\x0a\x09\x09socket onmessage: [:evt | '#output-list' asJQuery append: '<li>',evt data,'</li>'].\x0a\x09\x09socket onclose: [  '#output-list' asJQuery append: '<li>Connection lost</li>' ].",
referencedClasses: ["NativeFunction"],
//>>excludeEnd("ide");
messageSends: ["constructor:value:", "onopen:", "append:", "asJQuery", "onmessage:", ",", "data", "onclose:"]
}),
$globals.AmberRemoteConnector.klass);

$core.addMethod(
$core.method({
selector: "sendMessage",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self["@socket"])._send_("hi");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendMessage",{},$globals.AmberRemoteConnector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sendMessage\x0a\x09socket send: 'hi'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["send:"]
}),
$globals.AmberRemoteConnector.klass);

$core.addMethod(
$core.method({
selector: "tryToConnect",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
self._createSocket();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tryToConnect",{},$globals.AmberRemoteConnector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tryToConnect\x0a\x09self createSocket",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["createSocket"]
}),
$globals.AmberRemoteConnector.klass);


$core.addClass('Main', $globals.Widget, ['task', 'header'], 'First');
$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.Main.superclass||$boot.dnu).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@task"]=$recv($globals.AddTask)._new();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Main)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09task := AddTask new",
referencedClasses: ["AddTask"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new"]
}),
$globals.Main);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$3,$2,$4;
$1=$recv(html)._div();
$3=$recv("".__comma($recv(self["@task"])._id())).__comma(") ");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=2;
//>>excludeEnd("ctx");
$2=$recv($3).__comma($recv(self["@task"])._name());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._with_($2);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self["@header"]=$recv($1)._yourself();
$4=$recv(html)._button();
$recv($4)._with_("Завершить задачу");
$recv($4)._onClick_((function(){

}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Main)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09header := html div\x0a\x09\x09with: '',task id,') ', task name;\x0a\x09\x09yourself.\x0a\x09html button\x0a\x09\x09with: 'Завершить задачу';\x0a\x09\x09onClick: [  ].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "div", ",", "id", "name", "yourself", "button", "onClick:"]
}),
$globals.Main);


$globals.Main.klass.iVarNames = ['taskCollections'];
$core.addMethod(
$core.method({
selector: "tryExample",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._appendToJQuery_("#tasks"._asJQuery());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tryExample",{},$globals.Main.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tryExample\x0a\x09self new appendToJQuery: '#tasks' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["appendToJQuery:", "new", "asJQuery"]
}),
$globals.Main.klass);

});
