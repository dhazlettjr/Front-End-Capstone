"use strict";

angular.module("rent")
  .controller("homeViewCtrl", function ($scope, ProductsFactory) {




    ProductsFactory.getRides()
      .then((rideData) => {
        console.log("hey", rideData);

        //object.entries is a simple way to push an object into an array
        $scope.rideArr = rideData.id;
      });
    });


        //object.entries is a simple way to push an object into an array
        //$scope.rideArr = rideData;
      
    
