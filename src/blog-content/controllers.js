'use strict';


module.exports = angular.module("blogcontent.controllers", [require("blog-resources/exports/blog-resources").name])
	.controller("BlogAggregatorCtrl", require('./controllers/BlogAggregatorCtrl'));