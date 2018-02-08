"use strict";

angular.module("rent", ["ngRoute"])

.config($routeProvider => {
    $routeProvider

    // routes and configs go here, chained onto the module definition
    
    
    .when("/home", {
        templateUrl: "partials/homeView.html",
        controller: "homeViewCtrl"
    })
    .when ("/login", {
        templateUrl: "partials/Login.html",
        controller: "AuthCtrl"
    })
    .when ("/list", {
        templateUrl: "partials/list.html",
        controller: "ListCtrl"
    })
    .when ("/user", {
        templateUrl: "partials/myList.html",
        controller: "MyListCtrl"
    })
    .when ("/type", {
        templateUrl: "partials/seeTypes.html",
        controller: "homeViewCtrl"
    })
    .when ("/details/:id", {
        templateUrl: "partials/rideDetails.html",
        controller: "soloRideCtrl"
    })
    .when('/list/:carID/edit', {
        templateUrl: 'partials/list.html',
        controller: 'editCtrl'
    
});

})
  .run(FBCreds => {
    firebase.initializeApp(FBCreds);
 });


