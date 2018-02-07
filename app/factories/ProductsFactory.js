'use strict';

// initialize the module to encorporate the factory
angular.module("rent").factory("ProductsFactory", function ($q, $http, FBCreds) {

    // Return a promise with XHR
    let getRides = (uid) => {
        console.log(uid);
        return $q(function (resolve, reject) {
            $http
                .get(`${FBCreds.url}/vehicles.json?orderBy="uid"&equalTo="${uid}"`)
                .then(
                    ({
                        data
                    }) => {console.log(data);
                        let keys = Object.keys(data);

                        keys.forEach(key => data[key].id = key);
                        resolve(data);
                    })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let saveRides = (newList) => {
        return $q(function (resolve, reject) {
            $http
                .post(`${FBCreds.url}/vehicles.json`, JSON.stringify(newList))
                .then(
                    (data) => {
                        resolve(data);
                        console.log("new items posted", data);
                    })
                .catch((err) => {
                    reject(err);
                });
        });
    };
    // this will return the firebase data
    return {
        getRides,
        saveRides
    };
});