define("amber-first/First", ["amber/boot"
//>>excludeStart("imports", pragmas.excludeImports);
, "amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"
//>>excludeEnd("imports");
, "amber_core/Kernel-Objects"], function($boot
//>>excludeStart("imports", pragmas.excludeImports);

//>>excludeEnd("imports");
){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('First');
$core.packages["First"].innerEval = function (expr) { return eval(expr); };
$core.packages["First"].imports = ["amber/jquery/Wrappers-JQuery", "amber/web/Web", "silk/Silk"];
$core.packages["First"].transport = {"type":"amd","amdNamespace":"amber-first"};

$core.addClass('First', $globals.Object, [], 'First');
$core.addMethod(
$core.method({
selector: "augmentPage",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1;
$1="#jquery-first"._asJQuery();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["asJQuery"]=1;
//>>excludeEnd("ctx");
$recv($1)._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQueryFirst();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["click:"]=1;
//>>excludeEnd("ctx");
$recv("#jquery-second"._asJQuery())._click_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._doJQuerySecond();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"augmentPage",{},$globals.First)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "augmentPage\x0a\x09'#jquery-first' asJQuery click: [ self doJQueryFirst ].\x0a\x09'#jquery-second' asJQuery click: [ self doJQuerySecond ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["click:", "asJQuery", "doJQueryFirst", "doJQuerySecond"]
}),
$globals.First);

$core.addMethod(
$core.method({
selector: "doJQueryFirst",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<li>Задача.</li>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQueryFirst",{},$globals.First)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQueryFirst\x0a\x09'#output-list' asJQuery append: '<li>Задача.</li>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.First);

$core.addMethod(
$core.method({
selector: "doJQuerySecond",
protocol: 'action',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv("#output-list"._asJQuery())._append_("<button>Hi</button>");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQuerySecond",{},$globals.First)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "doJQuerySecond\x0a\x09'#output-list' asJQuery append: '<button>Hi</button>'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["append:", "asJQuery"]
}),
$globals.First);

$core.addMethod(
$core.method({
selector: "doJQuerySecond:",
protocol: 'action',
fn: function (html){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
var $1,$2,$3,$4;
$recv($recv(html)._form())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return $recv($recv(html)._table())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx3) {
//>>excludeEnd("ctx");
$1=$recv(html)._tr();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["tr"]=1;
//>>excludeEnd("ctx");
$recv($1)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$2=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["td"]=1;
//>>excludeEnd("ctx");
$recv($2)._with_("Username");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=4;
//>>excludeEnd("ctx");
$3=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["td"]=2;
//>>excludeEnd("ctx");
return $recv($3)._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv(html)._input();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx5.sendIdx["input"]=1;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,4)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=5;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,3)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=3;
//>>excludeEnd("ctx");
return $recv($recv(html)._tr())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx4) {
//>>excludeEnd("ctx");
$4=$recv(html)._td();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["td"]=3;
//>>excludeEnd("ctx");
$recv($4)._with_("Password");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx4.sendIdx["with:"]=7;
//>>excludeEnd("ctx");
return $recv($recv(html)._td())._with_((function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx5) {
//>>excludeEnd("ctx");
return $recv($recv(html)._input())._type_("password");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx5) {$ctx5.fillBlock({},$ctx4,6)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx4) {$ctx4.fillBlock({},$ctx3,5)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx3.sendIdx["with:"]=6;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx3) {$ctx3.fillBlock({},$ctx2,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx2.sendIdx["with:"]=2;
//>>excludeEnd("ctx");
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["with:"]=1;
//>>excludeEnd("ctx");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"doJQuerySecond:",{html:html},$globals.First)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "doJQuerySecond: html\x0a\x09html form with: [\x0a    html table with: [\x0a        html tr with: [\x0a            html td with: 'Username'.\x0a            html td with: [html input]].\x0a        html tr with: [\x0a            html td with: 'Password'.\x0a            html td with: [html input type: 'password']]]]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["with:", "form", "table", "tr", "td", "input", "type:"]
}),
$globals.First);


$core.addMethod(
$core.method({
selector: "start",
protocol: 'starting',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) {
//>>excludeEnd("ctx");
$recv(self._new())._augmentPage();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.First.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x09self new augmentPage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["augmentPage", "new"]
}),
$globals.First.klass);

});
