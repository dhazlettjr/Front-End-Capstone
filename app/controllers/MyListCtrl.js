// "use strict";

"use strict";

angular.module("rent")
  .controller("MyListCtrl", function ($scope,$location, $route, ProductsFactory) {


$scope.deleteRides = (carID) => {
    ProductsFactory.deleteRides(carID)
    .then(() => {
        ProductsFactory.getRides();
        $location.url("#!/home");
    });
};
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