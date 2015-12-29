angular.module('test', ['ionic', 'ngCordova', 'ngAnimate',
    'ngResource',
    'ngRoute',
    'ngSanitize'])

        .run(function ($rootScope, $location, $timeout) {
            $rootScope.menu = false;
        })
        .config(function ($routeProvider, $httpProvider, $logProvider) {
            $logProvider.debugEnabled(true);
            $routeProvider
                    .when('/start', {
                        templateUrl: 'views/start.html',
                        controller: 'startCtrl'
                    })
                    
                    .when('/Person', {
                        templateUrl: 'views/Person.html',
                        controller: 'PersonCtrl'
                    })
                    .when('/addPerson', {
                        templateUrl: 'views/PersonAdd.html',
                        controller: 'PersonAddCtrl'
                    })
                    
                    .when('/Restaurant', {
                        templateUrl: 'views/Restaurant.html',
                        controller: 'RestaurantCtrl'
                    })
                    .when('/addRestaurant', {
                        templateUrl: 'views/RestaurantAdd.html',
                        controller: 'RestaurantAddCtrl'
                    })


                    .otherwise({
                        redirectTo: '/start'
                    });


        });