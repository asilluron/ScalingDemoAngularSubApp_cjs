'use strict';


module.exports = angular.module("blogcontent.controllers", ["blog-resources"])
	.controller("BlogAggregatorCtrl", require('./controllers/BlogAggregatorCtrl'));