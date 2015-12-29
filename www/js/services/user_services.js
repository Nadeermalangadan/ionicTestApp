"use strict";

angular.module('test').service('userServices',
        function () {
            var __userData = {};

            function updateLocalStorage() {
                window.localStorage['userDate'] = JSON.stringify(__userData);
            }

            if (window.localStorage['userDate']) {
                __userData = JSON.parse(window.localStorage['userDate']);
            } else {
                __userData = {
                    PersonList: [],
                    RestaurantList: []
                };
                updateLocalStorage();
            }

            function getPersonList() {
                return angular.copy(__userData.PersonList);
            }
            function addPerson(Person) {
                __userData.PersonList.push(Person);
                updateLocalStorage();
                return true;
            }

            function getRestaurantList() {
                return angular.copy(__userData.RestaurantList);
            }
            function addRestaurant(Restaurant) {
                __userData.RestaurantList.push(Restaurant);
                updateLocalStorage();
                return true;
            }

            return {
                getPersonList: getPersonList,
                addPerson: addPerson,
                getRestaurantList: getRestaurantList,
                addRestaurant: addRestaurant
            };
        });