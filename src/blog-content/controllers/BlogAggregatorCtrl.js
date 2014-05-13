'use strict';

module.exports = ["$scope", "Blogs", function ($scope, Blogs){
	$scope.Blogs = Blogs.query();
	$scope.test = 3;
}];