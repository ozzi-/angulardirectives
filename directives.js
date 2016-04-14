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
			co: "@co"
		}
	}
});


directivesModule.directive('message', function(){
	return {
		restrict: 'E',
		replace: true,
		scope: {
			ty: "@ty",
			msg: "@msg",
		},
		link: function(scope, element, attrs){
			if("closable" in attrs){
				scope.cl = 'yes';
			}
		},
		templateUrl: 'directives/message.html'
	}
});


directivesModule.directive('datePicker', function(){
	return {
		restrict: 'E',
		templateUrl: 'directives/date_picker.html',
		scope: {
			nm: "@nm",
			dt: "=dt",
			sdt: "=sdt",
			fr: "@fr"
		},
    	controller: function($scope,$filter) {
			if($scope.sdt!==undefined){
				$scope.dtint =new Date($scope.sdt);
			}
    		$scope.$watch('dtint', function(v){
    			if($scope.dtint!=undefined){
    				$scope.dt = $filter('date')($scope.dtint, $scope.fr);
    			}
    		});
       	}
	};
});