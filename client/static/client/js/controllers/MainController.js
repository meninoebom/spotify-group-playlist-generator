App.controller('mainController', function($scope, spotify) {
  var MC = this;
  console.log('mainController');
  spotify()
    .then(function( data ) {
      console.log('mainController $spotify then data = ', data);
    });
});