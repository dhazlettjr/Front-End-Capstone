'use strict';

// this will set up the controller for the project
angular.module("rent").controller("ListCtrl", function ($scope, $location, StorageFactory, ProductsFactory) {

    //this is attached to the input field partial
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

//EL to upload file to FB storage
    fileButton.addEventListener('change', function (e) {
        file = e.target.files[0];
        storageRef = firebase.storage().ref(file.name);
        StorageFactory.pushFile(e, uploader);
    });

    $scope.saveRides = () => {

        //function to add FB storage im to FB database
        storageRef.getDownloadURL().then(function (url) {
            console.log(url);
            $scope.newList.img = url;
            $location.url("/list");
            // this only deletes the car with that ID
            $scope.newList.uid = firebase.auth().currentUser.uid;
            ProductsFactory.saveRides($scope.newList)
                .then((data) => {
            // once data is saved, it will return you to the home page
                    $location.url("/home");

                });
            console.log('new ride to save', $scope.newList);
        });

    };
});
