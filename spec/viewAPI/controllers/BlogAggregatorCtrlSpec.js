var angular = require("angular"),
	inject = angular.injector(['ng']).invoke,
	controllers = require("../../../src/viewAPI/controllers"),
	BlogAggregatorCtrl = require('../../../src/viewAPI/controllers/BlogAggregatorCtrl');

describe("Controller: BlogAggregatorCtrl", function () {
	var scope;

	beforeEach(function () {
		angular.module('viewAPI.controllers');

		console.log(BlogAggregatorCtrl);

		inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();

			ctrl = $controller(BlogAggregatorCtrl, {
				$scope: scope
			});
		});
	});
	describe("Basic Properties", function () {
		it("will intiially show 0 blog entries", function () {
			expect(scope.numBlogs).toBe(0);
		});

	});

});