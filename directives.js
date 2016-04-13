var directivesModule = angular.module('directives', []);

directivesModule.directive('collapse', function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/collapse.html',
		transclude: true,
		scope: {
			title: "@title",
			content: "@content"
		}
	}
})

directivesModule.directive('glyph', function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/glyph.html',
		scope: {
			gl: "@gl",
			cl: "@cl",
			co: "@co",
		}
	}
});
