app.controller('AssetTypes', ['$scope', 'types', function($scope, types) {
    types.success(function(data) {
        $scope.types = data;
    });
}]);
app.controller('AssetType', ['$http','$stateParams', '$scope', 'type', function($http, $stateParams, $scope, type) {
    // Need to look into how to call a service multiple times instead of initializing it once
    $http.get(unescape($stateParams.file)) 
            .success(function(data) { 
                $scope.category = data[0]['name'];
                $scope.issubcat = data[0]['issubcat'];
                $scope.subcats = data[0]['subcats'];
                $scope.typeAssets = data[0]['types'];
            }); 
    /*type($stateParams.file).query().success(function(data) {
        console.log(true);
        $scope.category = data[0]['name'];
        $scope.typeAssets = data[0]['types'];
    });*/
}]);