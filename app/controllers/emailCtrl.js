 "use strict";

 angular
     .module("rent")
     .controller("emailCtrl", function ($scope, $rootScope, $location, FBCreds, $window) {

        //used rootscope
         $scope.getData = $rootScope.ride;

     });