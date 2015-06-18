app.factory('types', ['$http', function($http) { 
    return $http.get('data/types.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);
app.factory('type', ['$http','$stateParams', function($http, $stateParams) { 
    return $http.get(unescape($stateParams.file)) 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);