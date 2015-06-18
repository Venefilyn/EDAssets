app.directive('listTypes', function(){
	return {
  	restrict: 'E',
    scope: {
    	item: '='
    },
    templateUrl: 'js/directives/listTypes.html'
  };
});