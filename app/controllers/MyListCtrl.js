// "use strict";

"use strict";

angular.module("rent")
  .controller("MyListCtrl", function ($scope,$location,$window, $route, ProductsFactory) {

//this function will pick a specific car id to delete
$scope.deleteRides = (carID) => {
    ProductsFactory.deleteRides(carID)
    .then(() => {
      //once car is deleted, it will revert back to the home page
        ProductsFactory.getRides();
        $location.url("/home");
    });
};

  //this allows the user to be re-authenticated prior to page load
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