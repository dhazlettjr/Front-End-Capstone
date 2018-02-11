"use strict";

angular.module("rent")
  .controller("soloRideCtrl", function ($scope, $routeParams, ProductsFactory) {
console.log($routeParams.id);
$scope.getSingleRide = (carID) => {
    console.log('car id?', carID);
    ProductsFactory.getSingleRide(carID)
    .then((info) => {
      $scope.soloRide = info.data;
      console.log("jufe",$scope.soloRide);
    });
  };
  $scope.getSingleRide($routeParams.id);
    });

