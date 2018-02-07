'use strict';

angular.module('rent')

  .controller('NavBarCtrl', function ($scope, $window, $location) {

    $scope.isActive = function (path) {

      var currentPath = $location.path().split('/')[1];

      if (currentPath.indexOf('?') !== -1)

        currentPath = currentPath.split('?')[0];

      return currentPath === path.split('/')[1];

    };
    //  $scope.clickLogout = () =>
    //    AuthFactory.logout()
    //    .then(() => $window.location.href = "#!/login");

  });