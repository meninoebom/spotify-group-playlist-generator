App.factory('UserFactory', function($http) {
  return function(){
    return $http.get('/api/users/')
     .then(function( httpData ) {
        return httpData.data
    });
  };
});