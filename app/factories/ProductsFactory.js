'use strict';

// initialize the module to encorporate the factory
angular.module("rent").factory("ProductsFactory", function ($q, $http, FBCreds) {

    // Return a promise with XHR
    let getRides = (uid) => {
        return $q(function (resolve, reject) {
            $http
                .get(`${FBCreds.url}/vehicles.json?orderBy="uid"&equalTo="${uid}"`)
                .then(
                    ({
                        data
                    }) => {
                        let keys = Object.keys(data);

                        keys.forEach(key => data[key].id = key);
                        resolve(data);
                    })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let getRidesByType = (type) => {

        return $q(function (resolve, reject) {
            $http
                .get(`${FBCreds.url}/vehicles.json?orderBy="type"&equalTo="${type}"`)
                .then(
                    ({
                        data
                    }) => {
                        let keys = Object.keys(data);

                        keys.forEach(key => data[key].id = key);
                        resolve(data);
                    })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let getAllRides = () => {
        return $q(function (resolve, reject) {
            $http
                .get(`${FBCreds.url}/vehicles.json`)
                .then(
                    (data) => {
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

    let getSingleRide = (carID) => {
        console.log('one ride', carID);
        return $q(function (resolve, reject) {
            $http
                .get(`${FBCreds.url}/vehicles/${carID}.json`)
                .then(
                    (data) => {
                        resolve(data);
                        console.log("get single ride", data);
                    })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let deleteRides = (carID) => {
        return $q(function (resolve, reject) {
            $http
                .delete(`${FBCreds.url}/vehicles/${carID}.json`)
                .then(
                    (data) => {
                        resolve(data);
                    })
                .catch((err) => {
                    reject(err);
                });
        });
    };

    let updateRide = (carID) => {
        return $q(function (resolve, reject) {
            $http
                .patch(`${FBCreds.url}/vehicles/${carID}.json`)
                .then((data) => {
                    resolve(data);
                })
                .catch((err) => {
                    reject(err);
                });
        });

    };
    // this will return the firebase data
    return {
        getRides,
        saveRides,
        deleteRides,
        getAllRides,
        getRidesByType,
        getSingleRide
    };
});