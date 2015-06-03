var App = angular.module('App', ['ui.router', 'ui.bootstrap'])
  .config(function($stateProvider, $urlRouterProvider){

    $urlRouterProvider.otherwise('/index');

    $stateProvider.state('users', {
      url: '/users',
      templateUrl: '/static/client/js/templates/users.html',
      controller: 'MainController',
      controllerAs: 'MC'
    });

    $stateProvider.state('login', {
      url: '/login',
      templateUrl: '/static/client/js/templates/login.html',
      controller: 'LoginController',
      controllerAs: 'LC'
    });

    $stateProvider.state('index', {
      url: '/',
      templateUrl: '/static/client/js/templates/index.html',
      controller: 'LoginController',
      controllerAs: 'LC'
    });

  });
