"use strict";


let isAuth = (AuthFactory) => new Promise( (resolve, reject) => {
    AuthFactory.isAuthenticated()
    .then( (user) => {
      console.log("user???", user );
      if(user) {
        console.log("Authenticated user. Go ahead");
        resolve();
      } else {
        console.log("Not Authenticated user. Go away");
        reject();
      }
    }); 
  });

angular.module("rent", ["ngRoute", "ngMap"])

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
        controller: "ListCtrl",
        resolve: {isAuth}
    })
    .when ("/user", {
        templateUrl: "partials/myList.html",
        controller: "MyListCtrl",
        resolve: {isAuth}
    })
    .when ("/type", {
        templateUrl: "partials/seeTypes.html",
        controller: "homeViewCtrl"
    })
    .when ("/details/:id", {
        templateUrl: "partials/rideDetails.html",
        controller: "soloRideCtrl",
        resolve: {isAuth}
    })
    .when('/list/:id/edit', {
        templateUrl: 'partials/list.html',
        controller: 'editCtrl',
        resolve: {isAuth}
    })
    .when ("/confirm", {
        templateUrl: "partials/email.html",
        controller: "emailCtrl"
    })
    .when ("/map", {
        templateUrl: "partials/map.html",
        controller: "mapCtrl"
    });

})
  .run(FBCreds => {
    firebase.initializeApp(FBCreds);
 });


