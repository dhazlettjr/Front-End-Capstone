
'use strict';

// this will set up the controller for the project
angular.module("rent").controller("ListCtrl", function($scope, $location, ProductsFactory) {

    $scope.newList = {
        type: "",
        make: "",
        model: "",
        location: "",
        year: "",
        price: "",
        description: "",
        features: "",
        img: storageRef.getDownloadURL(),
        uid: ""
    };

    $scope.saveRides = () => {
        console.log('new ride to save', $scope.newList);
        ProductsFactory.saveRides($scope.newList);
        $location.url("/list");

    };

});