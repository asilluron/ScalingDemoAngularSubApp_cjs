require("angular/angular");
require("angular-mocks/angular-mocks");

var controllers = require("../../../src/viewAPI/controllers"),
	BlogAggregatorCtrl = require('../../../src/viewAPI/controllers/BlogAggregatorCtrl');

describe("Controller: BlogAggregatorCtrl", function () {
	var scope;

	beforeEach(function () {
		angular.module('viewAPI.controllers');

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