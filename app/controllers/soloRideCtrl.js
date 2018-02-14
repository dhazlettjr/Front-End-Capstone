"use strict";

angular.module("rent")
  .controller("soloRideCtrl", function ($scope, $rootScope, $routeParams, $location, ProductsFactory) {

     //configuration for disqus to talk to your app
     $scope.disqusConfig = {
      disqus_shortname: 'rent-1',
      disqus_identifier: $routeParams.id,
      disqus_url: `http://127.0.0.1:8080/#!/details/${$routeParams.id}`
    };

    console.log($routeParams.id);
    $scope.getSingleRide = (carID) => {
      console.log('car id?', carID);
      ProductsFactory.getSingleRide(carID)
        .then((info) => {
          $scope.soloRide = info.data;
          console.log("jufe", $scope.soloRide);
        });
    };
    $scope.getSingleRide($routeParams.id);


    $scope.goToEmail = () => {
      $rootScope.ride = $scope.soloRide;
      $location.path("/confirm");
    };
  });