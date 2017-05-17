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
  .state('page2', {
  url: '/page2',
  templateUrl: 'static/page2.html'
  })
  .state('page3', {
  url: '/hello',
  templateUrl: 'static/page3.html'
  });

  $urlRouterProvider.otherwise('/');
});
