"use strict";

angular.module("rent")
  .controller("homeViewCtrl", function ($scope, ProductsFactory) {



    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        ProductsFactory.getRides(firebase.auth().currentUser.uid)
          .then((data) => {
            console.log("hey", data);

            //object.entries is a simple way to push an object into an array
            $scope.rideArr = Object.values(data);
            console.log($scope.rideArr);
          });
      }
    });
  });