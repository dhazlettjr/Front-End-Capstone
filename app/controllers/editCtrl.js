"use strict";
angular.module("rent")
.controller("editCtrl", function ($scope, $location,StorageFactory, $routeParams, ProductsFactory) {
  
  let fileButton = document.getElementById('fileButton');
  let uploader = document.getElementById('uploader');
  let file;
  let storageRef;
      //new title and list made for updating old list
      $scope.title = "Update Ride";
      $scope.btnText = "Update";
      $scope.newList = {};

      //this function gets one ride and sets the updated list to the previous list
      ProductsFactory.getSingleRide($routeParams.id)
        .then(function successCallback(response) {
          $scope.newList = response.data;
          console.log('new list', $scope.newList);
        });

      //the same function to save the updated list to FB
      $scope.saveRides = function () {
        ProductsFactory.updateRide($routeParams.id, $scope.newList)
          .then(function successCallback(response) {
            console.log(response);
            $location.url("/home");
          });
      };

      //EL to upload file to FB storage
      fileButton.addEventListener('change', function (e) {
        file = e.target.files[0];
        storageRef = firebase.storage().ref(file.name);
        StorageFactory.pushFile(e, uploader);
        //function to add FB storage im to FB database
        storageRef.getDownloadURL().then(function (url) {
          console.log(url);
          $scope.newList.img = url;
        });
      });


      });