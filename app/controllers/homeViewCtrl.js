"use strict";

angular.module("rent")
  .controller("homeViewCtrl", function ($scope, ProductsFactory) {

    $scope.getAllRides = () => {

      ProductsFactory.getAllRides()
        .then((data) => {

          //object.entries is a simple way to push an object into an array
          $scope.rideArr = Object.entries(data.data);
        });
    };
    //this will allow me to get rides by type with a drop down menu
    $scope.getRidesByType = (type) => {
      ProductsFactory.getRidesByType(type)
        .then((data) => {
        });
    };
  });