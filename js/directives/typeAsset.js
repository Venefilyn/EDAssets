app.directive('typeAsset', function(){
	return {
  	restrict: 'E',
    scope: {
    	item: '='
    },
    templateUrl: 'js/directives/listType.html'
  };
});