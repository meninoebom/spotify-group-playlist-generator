App.service('spotify', function( $http ) {
  return function() {
    return $http.get('https://api.spotify.com/v1/me')
      .then(function( httpData ){
          console.log('spotify');
          return httpData;
      });
  }
});