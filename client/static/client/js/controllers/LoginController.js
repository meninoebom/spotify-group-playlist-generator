App.controller('LoginController', function($scope, UserFactory) {
  var LC = this;
  LC.loggedIn = false;
  LC.toggleLoginState = function() {
     console.log('foo');
      LC.loggedIn = (LC.loggedIn) ? false : true ;
  }

  UserFactory()
    .then(function(data){
      console.log(data);
    });
});

