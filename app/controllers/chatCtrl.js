"use strict";

angular.module("rent")
  .controller("chatCtrl", function ($scope,$routeParams, ProductsFactory) {

    //configuration for disqus to talk to your app
    $scope.disqusConfig = {
        disqus_shortname: 'rent-1',
        disqus_identifier: "1",
        disqus_url: "http://127.0.0.1:8080/#!/review"
      };
    });