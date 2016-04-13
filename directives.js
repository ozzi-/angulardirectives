var directivesModule = angular.module('directives', []);

directivesModule.directive('collapse', function(){
	return {
		restrict: 'E',
		templateUrl: 'collapse.html',
		transclude: true,
		scope: {
			title: "@title",
			content: "@content"
		}
	}
})