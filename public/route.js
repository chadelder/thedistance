var app = angular.module('thedistance', ['ui.router']);
  console.log(app);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('/', {
    url: '/',
    templateUrl: 'views/cover.html'
  })
  .state('main', {
    url: '/main',
    templateUrl: 'views/main.html'
  })
  .state('state1', {
    url: '/state1',
    templateUrl: 'views/state1.html'
  })
  .state('state2', {
  url: '/state2',
  templateUrl: 'views/state2.html'
  })
  .state('state3', {
  url: '/state3',
  templateUrl: 'views/state3.html'
  })
  .state('state4', {
  url: '/state4',
  templateUrl: 'views/state4.html'
  })
  .state('state5', {
  url: '/state5',
  templateUrl: 'views/state5.html'
  });

  $urlRouterProvider.otherwise('/');
});
