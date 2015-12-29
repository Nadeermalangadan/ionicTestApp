'use strict';
angular.module('test')
        .controller('RestaurantCtrl', function ($scope, $location, userServices) {

            $scope.RestaurantList = userServices.getRestaurantList();
    
            $scope.addRestaurant = function (){
                $location.path('addRestaurant');
            };

        }).controller('RestaurantAddCtrl', function ($scope, $location, userServices) {

            $scope.Restaurant = {};
    
            $scope.addRestaurant = function (){
                var rtn = userServices.addRestaurant($scope.Restaurant);
                
                if(rtn){
                    $location.path('Restaurant');
                }
            };

        });
