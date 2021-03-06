require("angular/angular");
require("angular-mocks/angular-mocks");

var controllers = require("../../../src/blog-content/controllers");

describe("Controller: BlogAggregatorCtrl", function () {
	var scope;

	beforeEach(function () {
		angular.mock.module("blogcontent.controllers");

		inject(function ($controller, $rootScope) {
			scope = $rootScope.$new();

			ctrl = $controller("BlogAggregatorCtrl", {
				$scope: scope
			});
		});
	});
	describe("Basic Properties", function () {
		it("will intiially show 0 blog entries", function () {
			expect(scope.test).toBe(3);
		});
	});

});