// app.js
var personalSite = angular.module('personalSite', ['ui.router']);


personalSite.config(["$locationProvider", function($locationProvider) {
  $locationProvider.html5Mode(true);
}]);

personalSite.config(function($stateProvider, $urlRouterProvider) {
    
    // $urlRouterProvider.otherwise('/');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'pages/home.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('work', {
            url: '/work',
            templateUrl: 'pages/work.html'
        })

        .state('about', {
            url: '/about',
            templateUrl: 'pages/about.html'
        })

        .state('contact', {
            url: '/contact',
            templateUrl: 'pages/contact.html'
        });
});