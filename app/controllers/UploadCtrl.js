'use strict';

angular.module('rent')

  .controller('UploadCtrl', function ($scope, $location) {
      let uploader = document.getElementById('uploader');
      let fileButton = document.getElementById('fileButton');

      fileButton.addEventListener('change', function(e){
          let file = e.target.files[0];
          let storageRef = firebase.storage().ref(file.name);
          let task = storageRef.put(file);

          task.on('state_changed', function progress(snapshot){
              let percentage = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
              uploader.value = percentage;

          });
          function error(err) {

          }
          function complete() {

          }

      });


});

