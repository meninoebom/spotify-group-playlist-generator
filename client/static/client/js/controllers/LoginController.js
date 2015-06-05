App.controller('loginController', function($scope, djangoAuth) {

  var LC = this;

    LC.authenticated = false;
    // Wait for the status of authentication, set scope var to true if it resolves
    djangoAuth.authenticationStatus(true)
      .then(function(){
          LC.authenticated = true;
          console.log('false');
      })
      .catch(function(){
          LC.authenticated = false;
          console.log('false');
      });




  // console.log('djangoAuth = ',djangoAuth);
  // LC.show_login = true;
  // $scope.$on("djangoAuth.logged_in", function(data){
  //   LC.show_login = false;
  //   console.log('djangoAuth.logged_in');
  // });
  // $scope.$on("djangoAuth.logged_out", function(data){
  //   LC.show_login = true;
  //   console.log('djangoAuth.logged_out');
  // });
 
});

