"use strict";
angular.module("rent")
.controller("editCtrl", function($scope, $location, $routeParams, ProductsFactory){
  $scope.title = "Update Ride";
  $scope.btnText = "Update";
  $scope.newList = {};

  ProductsFactory.getSingleRide($routeParams.id)
  .then(function successCallback(response){
      $scope.newList = response.data;
      console.log('new list', $scope.newList);
  });
  
    
  $scope.saveRides = function(){
    ProductsFactory.updateRide($routeParams.id, $scope.newList)
    .then(function successCallback(response) {
      console.log(response);
      $location.url("/home");
    });
  };
});