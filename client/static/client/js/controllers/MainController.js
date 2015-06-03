App.controller('MainController', function($scope, UserFactory) {
  var MC = this;
  this.foo = 'bar';
  console.log('MC = ',MC);
  console.log('$scope = ',$scope);
  UserFactory()
    .then(function(data){
      console.log(data);
    });
});