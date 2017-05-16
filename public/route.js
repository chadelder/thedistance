var app = angular.module('thedistance', ['ui.router']);
  console.log(app);
app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  .state('main', {
    url: '/main',
    templateUrl: 'views/main.html'
  })
  .state('page1', {
    url: '/page1',
    templateUrl: 'static/page1.html'
  })
  .state('page2', {
  url: '/page2',
  templateUrl: 'static/page2.html'
  })
  .state('page3', {
  url: '/hello',
  templateUrl: 'static/page3.html'
  });

  $urlRouterProvider.otherwise('/main');
});
