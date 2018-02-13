"use strict";

angular.module("rent")
  .controller("mapCtrl", function ($scope,NgMap, ProductsFactory) {

    let getAllRides = () => {

        ProductsFactory.getAllRides()
          .then((data) => {
  
            //object.entries is a simple way to push an object into an array
            $scope.rideArr = Object.entries(data.data);
            console.log('ride',$scope.rideArr);
          });

      };
      getAllRides();

    NgMap.getMap().then(function (map) {
        $scope.showCustomMarker = function (evt) {
            map.customMarkers.foo.setVisible(true);
            map.customMarkers.foo.setPosition(this.getPosition());
            
        };
        $scope.closeCustomMarker = function (evt) {
            this.style.display = 'none';
        };

    });
});