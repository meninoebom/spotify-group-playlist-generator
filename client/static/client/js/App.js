var App = angular.module('App', [
  'ui.router', 
  'ui.bootstrap',  
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
  ])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/');

    $stateProvider.state('index', {
      url: '/',
      templateUrl: '/static/client/js/partials/index.html',
      controller: 'mainController',
      controllerAs: 'MC'
    });

    $stateProvider.state('logged-out', {
      url: '/logged-out',
      templateUrl: '/static/client/js/partials/logged-out.html',
      controller: function($stateParams){
        console.log('logged-out $stateParams = ', $stateParams);
      },
      controllerAs: 'LOC'
    });

  });
