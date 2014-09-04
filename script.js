// create the module and name it personalSite
    var personalSite = angular.module('personalSite', ['ngRoute']);

    // configure our routes
    personalSite.config(function($routeProvider, $locationProvider) {
        $routeProvider
            .when('/', {
                templateUrl : 'pages/home.html',
                controller  : 'mainController'
            })

            
            .when('/about', {
                templateUrl : 'pages/about.html',
                controller  : 'aboutController'
            })

            
            .when('/contact', {
                templateUrl : 'pages/contact.html',
                controller  : 'contactController'
            })
            
            .when('/work', {
                templateUrl : 'pages/work.html',
                controller  : 'workController'
            });

            $locationProvider.html5Mode(true);
    });


    personalSite.controller('mainController', function() {

    });


    personalSite.controller('workController', function(){
        
    });

    personalSite.controller('aboutController', function() {
        
    });

    personalSite.controller('contactController', function() {
        
    });