var App = angular.module('App', [
  'ui.router', 
  'ui.bootstrap',  
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
  ])
  .config(function($stateProvider, $urlRouterProvider, $httpProvider, $provide){

    $urlRouterProvider.otherwise('/login');

    $stateProvider.state('index', {
      url: '/',
      templateUrl: '/static/client/js/partials/index.html',
      controller: 'mainController',
      controllerAs: 'MC'
    });


    $stateProvider.state('login', {
      url: '/login',
      templateUrl: '/static/client/js/partials/login.html',
      controller: 'loginController',
      controllerAs: 'LIC',
    });


    $stateProvider.state('logout', {
      url: '/logout',
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

    // $provide.factory('myHttpInterceptor', function($q) {
    //   return {
    //     // optional method
    //     'request': function(config) {

    //     },

    //     // optional method
    //    'requestError': function(rejection) {

    //     }

    //   };
    // });

    // $httpProvider.interceptors.push('myHttpInterceptor');

  });

