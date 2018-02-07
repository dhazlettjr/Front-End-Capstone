"use strict";

angular
    .module("rent")
    .controller("AuthCtrl", function ($scope, AuthFactory, $window, $rootScope) {
        $scope.test = "hello";

        // TODO: Grab the user form info and send it to AuthFactory
        // for register / login / logout -- hmm. Maybe rename this Ctrl?
        $scope.register = () => {
            AuthFactory.createUser($scope.account).then(user => {
                    console.log("newUser", user);
                    $scope.login();
                    $window.location.href = "#!/home";
                })
                .catch(function ({
                    code,
                    message
                }) {
                    console.log("Oops", code, message);
                });
        };

        $scope.login = () => {
            AuthFactory.loginUser($scope.account).then(user => {
                    console.log("logged in user", user);
                    $window.location.href = "#!/home";
                })
                .catch((err) => {
                    console.log(err);
                });
        };

        $scope.logout = () => {
            AuthFactory.logoutUser()
                .then((data) => {
                    console.log("logged out", data);
                });
        };
        // $scope.logout();
    });