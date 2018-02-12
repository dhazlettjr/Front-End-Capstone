 "use strict";

 angular
     .module("rent")
     .controller("emailCtrl", function ($scope, $rootScope, $location, FBCreds, $window) {

         $scope.getData = $rootScope.ride;

     });