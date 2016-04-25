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
self["@socket"]=$recv($globals.NativeFunction)._constructor_value_("WebSocket","ws://echo.websocket.org");
$recv(self["@socket"])._onmessage_((function(evt){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._receiveMessage_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,1)});
//>>excludeEnd("ctx");
}));
$recv(self["@socket"])._onclose_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>Connection lost</li>");
return self._tryToReconnect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self["@socket"])._onopen_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._loadData();
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
source: "createSocket\x0a\x09\x09socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.\x0a\x09\x09socket onmessage: [:evt | self receiveMessage: evt].\x0a\x09\x09socket onclose: [  '#output-list' asJQuery append: '<li>Connection lost</li>'. self tryToReconnect].\x0a\x09\x09socket onopen: [self loadData]",
referencedClasses: ["NativeFunction"],
//>>excludeEnd("ide");
messageSends: ["constructor:value:", "onmessage:", "receiveMessage:", "onclose:", "append:", "asJQuery", "tryToReconnect", "onopen:", "loadData"]
}),
$globals.AmberRemoteConnector.klass);

$core.addMethod(
$core.method({
selector: "loadData",
protocol: 'not yet classified',
fn: function (){
var self=this;
var call;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>Connected</li>");
call=$recv($globals.HashedCollection)._new();
$recv(call)._at_put_("Operation","Load data");
$recv(self["@socket"])._send_($recv(call)._asJSONString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadData",{call:call},$globals.AmberRemoteConnector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadData\x0a\x09|call|\x0a\x09 '#output-list' asJQuery append: '<li>Connected</li>'. \x0a\x09call := HashedCollection new.\x0a\x09call at: 'Operation' put: 'Load data'.\x0a\x09\x0a\x09socket send: call asJSONString",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery", "new", "at:put:", "send:", "asJSONString"]
}),
$globals.AmberRemoteConnector.klass);

$core.addMethod(
$core.method({
selector: "receiveMessage:",
protocol: 'not yet classified',
fn: function (aBlock){
var self=this;
var dict,d1,result;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $2,$4,$3,$1,$5,$6;
dict=$recv($globals.Dictionary)._new();
$2=$recv($globals.SmalltalkImage)._current();
$4=$recv(aBlock)._data();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["data"]=1;
//>>excludeEnd("ctx");
$3=$recv($globals.JSON)._parse_($4);
$1=$recv($2)._readJSObject_($3);
dict=$recv($1)._copy();
d1=$recv(dict)._at_("Operation");
$5="#output-list"._asJQuery();
$6=$recv("<li>".__comma($recv(aBlock)._data())).__comma("</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($5)._append_($6);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"receiveMessage:",{aBlock:aBlock,dict:dict,d1:d1,result:result},$globals.AmberRemoteConnector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBlock"],
source: "receiveMessage: aBlock\x0a\x09|dict d1 result|\x0a\x09dict := Dictionary new. \x0a\x09dict := (SmalltalkImage current readJSObject: (JSON parse: aBlock data)) copy.\x0a\x09d1 := dict at: 'Operation'.\x0a\x09\x22(Compiler new evaluateExpression: (d1))\x22\x0a\x09'#output-list' asJQuery append: '<li>',aBlock data,'</li>'",
referencedClasses: ["Dictionary", "SmalltalkImage", "JSON"],
//>>excludeEnd("ide");
messageSends: ["new", "copy", "readJSObject:", "current", "parse:", "data", "at:", "append:", "asJQuery", ","]
}),
$globals.AmberRemoteConnector.klass);

$core.addMethod(
$core.method({
selector: "sendMessage:type:name:",
protocol: 'not yet classified',
fn: function (taskId,oType,taskName){
var self=this;
var call;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
call=$recv($globals.HashedCollection)._new();
$recv(call)._at_put_("Operation",oType);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=1;
//>>excludeEnd("ctx");
$recv(call)._at_put_("Task id",taskId);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["at:put:"]=2;
//>>excludeEnd("ctx");
$1=$recv(taskName).__eq_eq("null");
if(!$core.assert($1)){
$recv(call)._at_put_("Task name",taskName);
};
$recv(self["@socket"])._send_($recv(call)._asJSONString());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sendMessage:type:name:",{taskId:taskId,oType:oType,taskName:taskName,call:call},$globals.AmberRemoteConnector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["taskId", "oType", "taskName"],
source: "sendMessage: taskId type: oType name: taskName\x0a\x09|call|\x0a\x09call := HashedCollection new.\x0a\x09call at: 'Operation' put: oType.\x0a\x09call at: 'Task id' put: taskId.\x0a\x09taskName == 'null' \x0a\x09\x09ifFalse: [call at: 'Task name' put: taskName.].\x0a\x09\x0a\x09socket send: call asJSONString",
referencedClasses: ["HashedCollection"],
//>>excludeEnd("ide");
messageSends: ["new", "at:put:", "ifFalse:", "==", "send:", "asJSONString"]
}),
$globals.AmberRemoteConnector.klass);

$core.addMethod(
$core.method({
selector: "testM1",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1="#output-list"._asJQuery();
$2=$recv("<li>".__comma("Yeah!")).__comma("</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._append_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testM1",{},$globals.AmberRemoteConnector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testM1\x0a\x09 '#output-list' asJQuery append: '<li>','Yeah!','</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery", ","]
}),
$globals.AmberRemoteConnector.klass);

$core.addMethod(
$core.method({
selector: "testM2",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2;
$1="#output-list"._asJQuery();
$2=$recv("<li>".__comma("Yeah! Good!")).__comma("</li>");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($1)._append_($2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"testM2",{},$globals.AmberRemoteConnector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "testM2\x0a\x09 '#output-list' asJQuery append: '<li>','Yeah! Good!','</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery", ","]
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

$core.addMethod(
$core.method({
selector: "tryToReconnect",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
self["@socket"]=$recv($globals.NativeFunction)._constructor_value_("WebSocket","ws://echo.websocket.org");
$recv(self["@socket"])._onopen_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$1="#output-list"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
return $recv($1)._append_("<li>Connection is restored.</li>");
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
return self._receiveMessage_(evt);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({evt:evt},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self["@socket"])._onclose_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>Unsuccessful attempt to reconnect.</li>");
return self._tryToReconnect();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tryToReconnect",{},$globals.AmberRemoteConnector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "tryToReconnect\x0a\x09\x09socket := NativeFunction constructor: 'WebSocket' value: 'ws://echo.websocket.org'.\x0a\x09\x09socket onopen: [ '#output-list' asJQuery append: '<li>Connection is restored.</li>'].\x0a\x09\x09socket onmessage: [:evt | self receiveMessage: evt].\x0a\x09\x09socket onclose: ['#output-list' asJQuery append: '<li>Unsuccessful attempt to reconnect.</li>'. \x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09self tryToReconnect]",
referencedClasses: ["NativeFunction"],
//>>excludeEnd("ide");
messageSends: ["constructor:value:", "onopen:", "append:", "asJQuery", "onmessage:", "receiveMessage:", "onclose:", "tryToReconnect"]
}),
$globals.AmberRemoteConnector.klass);


$core.addClass('Main', $globals.Widget, ['task', 'header', 'taskName'], 'First');
$core.addMethod(
$core.method({
selector: "deleteTask",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv($recv(self["@header"])._asJQuery())._remove();
$recv($globals.AmberRemoteConnector)._sendMessage_type_name_("".__comma($recv(self["@task"])._id()),"Delete","null");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"deleteTask",{},$globals.Main)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "deleteTask\x0a\x09header asJQuery remove.\x0a\x09AmberRemoteConnector sendMessage: '',task id type: 'Delete' name: 'null'",
referencedClasses: ["AmberRemoteConnector"],
//>>excludeEnd("ide");
messageSends: ["remove", "asJQuery", "sendMessage:type:name:", ",", "id"]
}),
$globals.Main);

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
self["@task"]=$recv($globals.NewTask)._new();
$recv($globals.AmberRemoteConnector)._sendMessage_type_name_("".__comma($recv(self["@task"])._id()),"Add",$recv(self["@task"])._name());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.Main)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09task := NewTask new.\x0a\x09AmberRemoteConnector sendMessage: '',task id type: 'Add' name: task name",
referencedClasses: ["NewTask", "AmberRemoteConnector"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "sendMessage:type:name:", ",", "id", "name"]
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
var $1,$3,$5,$7,$8,$6,$9,$10,$11,$4,$2;
$1=$recv(html)._div();
$recv($1)._class_("dragElement");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class:"]=1;
//>>excludeEnd("ctx");
$2=$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
$3=$recv(html)._table();
$recv($3)._width_("100%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["width:"]=1;
//>>excludeEnd("ctx");
$4=$recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$5=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$recv($5)._width_("85%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["width:"]=2;
//>>excludeEnd("ctx");
$6=$recv($5)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$7=$recv(html)._label();
$8=$recv(self["@task"])._id();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["id"]=1;
//>>excludeEnd("ctx");
$recv($7)._for_($8);
$recv($7)._with_("".__comma($recv(self["@task"])._name()));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
self["@taskName"]=$recv($7)._class_("base");
return self["@taskName"];
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
$6;
$9=$recv(html)._td();
$recv($9)._width_("15%");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["width:"]=3;
//>>excludeEnd("ctx");
return $recv($9)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$10=$recv(html)._input();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["input"]=1;
//>>excludeEnd("ctx");
$recv($10)._type_("checkbox");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["type:"]=1;
//>>excludeEnd("ctx");
$recv($10)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv(self["@task"])._changeStatus_(self["@taskName"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["onClick:"]=1;
//>>excludeEnd("ctx");
$recv($10)._id_($recv(self["@task"])._id());
$11=$recv(html)._input();
$recv($11)._type_("image");
$recv($11)._src_("images/GarbageBin.png");
$recv($11)._alt_("Submit");
$recv($11)._width_("18");
$recv($11)._height_("18");
return $recv($11)._onClick_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return self._deleteTask();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
return $4;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
self["@header"]=$2;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html},$globals.Main)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x09header := html div\x0a\x09class: 'dragElement';\x0a\x09with:[\x0a  \x09\x09\x09html table\x0a    \x09\x09width: '100%';\x0a    \x09\x09with: [\x0a\x09            html td width: '85%';\x0a\x09\x09\x09\x09\x09\x09with: [taskName := html label\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09for: task id;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09with: '',task name;\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09class: 'base'].\x0a\x09            html td width: '15%'; \x0a\x09            \x09\x09with: [html input\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09type: 'checkbox';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09onClick: [task changeStatus: taskName];\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09id: task id.\x0a\x09\x09\x09\x09\x09\x09\x09\x09 html input\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09type: 'image';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09src: 'images/GarbageBin.png';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09alt: 'Submit';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09width: '18';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09height: '18';\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09onClick: [self deleteTask].]]]\x0a\x09\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["class:", "div", "with:", "width:", "table", "td", "for:", "label", "id", ",", "name", "type:", "input", "onClick:", "changeStatus:", "id:", "src:", "alt:", "height:", "deleteTask"]
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


$core.addClass('NewTask', $globals.Object, ['name', 'count', 'id', 'check'], 'First');
$core.addMethod(
$core.method({
selector: "changeStatus:",
protocol: 'not yet classified',
fn: function (taskName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
$1=$recv(self["@check"]).__eq(false);
if($core.assert($1)){
self["@check"]=true;
self["@check"];
$2=$recv(taskName)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($2)._empty();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["empty"]=1;
//>>excludeEnd("ctx");
$3=$recv(taskName)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=2;
//>>excludeEnd("ctx");
$recv($3)._prop_val_("class","hover");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["prop:val:"]=1;
//>>excludeEnd("ctx");
$4=$recv(taskName)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=3;
//>>excludeEnd("ctx");
$recv($4)._append_(self["@name"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["append:"]=1;
//>>excludeEnd("ctx");
$5="".__comma(self["@id"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx[","]=1;
//>>excludeEnd("ctx");
$recv($globals.AmberRemoteConnector)._sendMessage_type_name_($5,"SetCheck","null");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["sendMessage:type:name:"]=1;
//>>excludeEnd("ctx");
};
if(!$core.assert($1)){
self["@check"]=false;
self["@check"];
$6=$recv(taskName)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=4;
//>>excludeEnd("ctx");
$recv($6)._empty();
$7=$recv(taskName)._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=5;
//>>excludeEnd("ctx");
$recv($7)._prop_val_("class","base");
$recv($recv(taskName)._asJQuery())._append_(self["@name"]);
$recv($globals.AmberRemoteConnector)._sendMessage_type_name_("".__comma(self["@id"]),"RemoveCheck","null");
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"changeStatus:",{taskName:taskName},$globals.NewTask)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["taskName"],
source: "changeStatus: taskName\x0a\x09check = false\x0a\x09\x09ifTrue: [check := true.\x0a\x09\x09\x09\x09\x09taskName asJQuery empty.\x0a\x09\x09\x09\x09\x09taskName asJQuery prop: 'class' val: 'hover'.\x0a\x09\x09\x09\x09\x09taskName asJQuery append: name.\x0a\x09\x09\x09\x09\x09AmberRemoteConnector sendMessage: '',id type: 'SetCheck' name: 'null'];\x0a\x09\x09ifFalse: [check := false.\x0a\x09\x09\x09\x09\x09 taskName asJQuery empty.\x0a\x09\x09\x09\x09\x09 taskName asJQuery prop: 'class' val: 'base'.\x0a\x09\x09\x09\x09\x09 taskName asJQuery append: name.\x0a\x09\x09\x09\x09     AmberRemoteConnector sendMessage: '',id type: 'RemoveCheck' name: 'null'].\x0a\x09\x09",
referencedClasses: ["AmberRemoteConnector"],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "=", "empty", "asJQuery", "prop:val:", "append:", "sendMessage:type:name:", ",", "ifFalse:"]
}),
$globals.NewTask);

$core.addMethod(
$core.method({
selector: "check",
protocol: 'not yet classified',
fn: function (){
var self=this;
return self["@check"];

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "check\x0a\x09^check",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.NewTask);

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
$globals.NewTask);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $3,$2,$1,$4,$5;
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true,
//>>excludeEnd("ctx");
($globals.NewTask.superclass||$boot.dnu).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$3="#input"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$2=$recv($3)._val();
$1=$recv($2).__eq("");
if($core.assert($1)){
$recv("#input"._asJQuery())._val_("Error");
};
$4=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=1;
//>>excludeEnd("ctx");
$recv($4)._addToCollection();
$5=self._class();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["class"]=2;
//>>excludeEnd("ctx");
self["@id"]=$recv($5)._takeId();
self["@name"]=$recv(self._class())._takeName();
self["@check"]=false;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.NewTask)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09 '#input' asJQuery val = ''\x0a\x09\x09ifTrue: [ '#input' asJQuery val: 'Error'].\x0a\x09self class addToCollection.\x0a\x09id := self class takeId.\x0a    name := self class takeName.\x0a\x09check := false",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initialize", "ifTrue:", "=", "val", "asJQuery", "val:", "addToCollection", "class", "takeId", "takeName"]
}),
$globals.NewTask);

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
$globals.NewTask);


$globals.NewTask.klass.iVarNames = ['lastId','taskCollection'];
$core.addMethod(
$core.method({
selector: "addToCollection",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$4,$3;
$1=self["@taskCollection"];
$2=self._nextId();
$4="#input"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._val();
$recv($1)._at_put_($2,$3);
$recv("#input"._asJQuery())._val_("");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addToCollection",{},$globals.NewTask.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "addToCollection\x0a\x09taskCollection at: self nextId put:  '#input' asJQuery val.\x0a\x09'#input' asJQuery val: ''\x0a\x0a\x09",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "nextId", "val", "asJQuery", "val:"]
}),
$globals.NewTask.klass);

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
($globals.NewTask.klass.superclass||$boot.dnu).fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
self["@taskCollection"]=$recv($globals.Dictionary)._new();
self._resetId();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.NewTask.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09super initialize.\x0a\x09taskCollection := Dictionary new.\x0a\x09self resetId",
referencedClasses: ["Dictionary"],
//>>excludeEnd("ide");
messageSends: ["initialize", "new", "resetId"]
}),
$globals.NewTask.klass);

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
}, function($ctx1) {$ctx1.fill(self,"nextId",{},$globals.NewTask.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nextId\x0a\x09^lastId := lastId +1.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["+"]
}),
$globals.NewTask.klass);

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
$globals.NewTask.klass);

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
$globals.NewTask.klass);

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
}, function($ctx1) {$ctx1.fill(self,"takeName",{},$globals.NewTask.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "takeName\x0a\x09^taskCollection at: lastId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:"]
}),
$globals.NewTask.klass);

});
