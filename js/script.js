// app.js
var personalSite = angular.module('personalSite', ['ui.router']);


personalSite.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

personalSite.config(function($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.otherwise('/');
    
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'pages/home.html'
        })
        .state('work', {
            url: '/work',
            templateUrl: 'pages/work.html'
        })
        .state('contact', {
            url: '/contact',
            templateUrl: 'pages/contact.html'
        });
});
