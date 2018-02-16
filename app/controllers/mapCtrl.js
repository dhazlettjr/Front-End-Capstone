"use strict";

angular.module("rent")
  .controller("mapCtrl", function ($scope, NgMap, $routeParams, ProductsFactory) {

    // in order to place pins on the map, I needed to get the data for the pins
    let getAllRides = () => {

      //same as above comment
      ProductsFactory.getAllRides()
        .then((data) => {

          //object.entries is a simple way to push an object into an array
          $scope.rideArr = Object.entries(data.data);
          console.log('ride', $scope.rideArr);
        });

    };
    //call the function to fire
    getAllRides();

    //basic google map function to get the map, show the marker and get position
    NgMap.getMap().then(function (map) {
      $scope.showCustomMarker = function (evt) {
        map.customMarkers.foo.setVisible(true);
        map.customMarkers.foo.setPosition(this.getPosition());

      };
      //function to close the marker
      $scope.closeCustomMarker = function (evt) {
        this.style.display = 'none';
      };

  });
  $scope.getSingleRide = (carID) => {
    ProductsFactory.getSingleRide(carID)
      .then((info) => {
        $scope.soloRide = info.data;
      });
    $scope.getSingleRide(carID);
  };
});