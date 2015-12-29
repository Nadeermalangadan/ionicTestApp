'use strict';
angular.module('test')
        .controller('PersonCtrl', function ($scope, $rootScope, $cordovaDevice, $location, userServices) {

            $scope.PersonList = userServices.getPersonList();
    
            $scope.addPerson = function (){
                $location.path('addPerson');
            };

        }).controller('PersonAddCtrl', function ($scope, $rootScope, $cordovaDevice, $location, userServices) {

            $scope.Person = {};
    
            $scope.addPerson = function (){
                var rtn = userServices.addPerson($scope.Person);
                
                if(rtn){
                    $location.path('Person');
                }
            };

        });
