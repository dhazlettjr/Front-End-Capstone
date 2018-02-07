'use strict';

// this will set up the controller for the project
angular.module("rent").controller("ListCtrl", function ($scope, $location, StorageFactory, ProductsFactory) {

    $scope.newList = {
        type: "",
        make: "",
        model: "",
        location: "",
        year: "",
        price: "",
        description: "",
        features: ""
    };

    let fileButton = document.getElementById('fileButton');
    let uploader = document.getElementById('uploader');
    let file;
    let storageRef;


    fileButton.addEventListener('change', function (e) {
        file = e.target.files[0];
        storageRef = firebase.storage().ref(file.name);
        StorageFactory.pushFile(e, uploader);
    });

    $scope.saveRides = () => {

        storageRef.getDownloadURL().then(function (url) {
            console.log(url);
            $scope.newList.img = url;
            ProductsFactory.saveRides($scope.newList);
            $location.url("/list");
            $scope.ride.id = firebase.auth().currentUser.uid;
            ProductsFactory.addRide($scope.ride)
                .then((data) => {

                });
            console.log('new ride to save', $scope.newList);
        });

    };
});

//let file = e.target.files[0];
//let storageRef = firebase.storage().ref(file.name);