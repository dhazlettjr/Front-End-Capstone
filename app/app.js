"use strict";

angular.module("rent", ["ngRoute"])

.config($routeProvider => {
    $routeProvider

    // routes and configs go here, chained onto the module definition
    
    
    .when("/login", {
        templateUrl: "",
        controller: ""
    })
    .when ("/", {
        templateUrl: "",
        controller: ""
    })
    .when("/board/new", {
        templateUrl: "",
        controller: ""
    })
    .when ("", {
        templateUrl: "",
        controller: ""
    })
    .when("/board/:bid/edit", {
        templateUrl: "",
        controller: ""
    })
    .when ("", {
        templateUrl: "",
        controller: ""
    })
    .when ("", {
        templateUrl: "",
        controller: ""
    })
    .when ("", {
        templateUrl: "",
        controller: ""
    })
    .otherwise("/login");
    
});

// .run(FBCreds => {
//   firebase.initializeApp(FBCreds);
// });

