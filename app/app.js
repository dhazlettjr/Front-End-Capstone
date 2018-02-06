"use strict";

let config = {
    apiKey: "AIzaSyDQHt0Mzr35CueolsDnVieirIfocLGWXZU",
    authDomain: "rent-46120.firebaseapp.com",
    databaseURL: "https://rent-46120.firebaseio.com",
    projectId: "rent-46120",
    storageBucket: "rent-46120.appspot.com",
    messagingSenderId: "161015486110"
  };
  firebase.initializeApp(config);

angular.module("rent", ["ngRoute"])

.config($routeProvider => {
    $routeProvider

    // routes and configs go here, chained onto the module definition
    
    
    .when("/home", {
        templateUrl: "partials/homeView.html",
        controller: "UploadCtrl"
    })
    .when ("/login", {
        templateUrl: "partials/Login.html",
        controller: "AuthCtrl"
    })
    .otherwise("/");
    
});

//   .run(FBCreds => {
//     firebase.initializeApp(FBCreds);
//  });

