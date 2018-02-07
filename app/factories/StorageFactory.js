'use strict';

angular.module('rent')

    .factory('StorageFactory', function () {

        let pushFile = (e, uploader) => {
            let file = e.target.files[0];
            let storageRef = firebase.storage().ref(file.name);
            let task = storageRef.put(file);

            task.on('state_changed', function progress(snapshot) {
                let percentage = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                uploader.value = percentage;

            });
        };
        return {pushFile};
    });


//write named