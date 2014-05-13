function BlogAggregatorCtrl($scope, Blogs){
	$scope.Blogs = Blogs.query();
}
module.exports = BlogAggregatorCtrl;