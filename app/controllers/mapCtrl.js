"use strict";

angular.module("rent")
  .controller("mapCtrl", function ($scope,ngMap, ProductsFactory) {

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