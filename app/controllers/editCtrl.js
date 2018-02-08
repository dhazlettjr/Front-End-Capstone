"use strict";
angular.module("rent")
.controller("editCtrl", function($scope, $location, $routeParams, ProductsFactory){
  $scope.title = "Edit Ride";
  $scope.btnText = "Update";
  $scope.newTask = {};

  ProductsFactory.getSingleRide($routeParams.carID)
  .then(function successCallback(response){
      $scope.newRide = response;
  });
    
  $scope.saveRides = function(){
    ProductsFactory.updateRide($routeParams.carID, $scope.newRide)
    .then(function successCallback(response) {
      console.log(response);
      $location.url("/user");
    });
  };
});