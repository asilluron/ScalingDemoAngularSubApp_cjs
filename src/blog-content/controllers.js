var BlogAggregatorCtrl = require('./controllers/BlogAggregatorCtrl');

angular.module("blog-content.controllers", ["blog-resources"])
	.controller("BlogAggregatorCtrl", BlogAggregatorCtrl);