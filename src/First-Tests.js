define("amber-first/First-Tests", ["amber/boot", "amber_core/SUnit"], function($boot){"use strict";
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
$core.addPackage('First-Tests');
$core.packages["First-Tests"].innerEval = function (expr) { return eval(expr); };
$core.packages["First-Tests"].transport = {"type":"amd","amdNamespace":"amber-first"};

$core.addClass('FirstTest', $globals.TestCase, [], 'First-Tests');

});
