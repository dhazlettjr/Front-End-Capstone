
'use strict';

angular.module('rent')

.directive('navvy', function () {
   return {
     restrict: 'E',
     templateUrl: 'partials/navBar.html',
    controller: 'NavBarCtrl'
   };
});