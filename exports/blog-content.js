!function(e){if("object"==typeof exports)module.exports=e();else if("function"==typeof define&&define.amd)define(e);else{var n;"undefined"!=typeof window?n=window:"undefined"!=typeof global?n=global:"undefined"!=typeof self&&(n=self),n.blogContent=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){
var controllers = _dereq_("./controllers");


angular.module("blog-content", ["blog-content.controllers"]);	
},{"./controllers":2}],2:[function(_dereq_,module,exports){
var BlogAggregatorCtrl = _dereq_('./controllers/BlogAggregatorCtrl');

angular.module("blog-content.controllers", ["blog-resources"])
	.controller("BlogAggregatorCtrl", BlogAggregatorCtrl);
},{"./controllers/BlogAggregatorCtrl":3}],3:[function(_dereq_,module,exports){
function BlogAggregatorCtrl($scope, Blogs){
	$scope.Blogs = Blogs.query();
}
module.exports = BlogAggregatorCtrl;
},{}]},{},[1])
(1)
});