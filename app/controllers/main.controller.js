(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

        MainController.$inject = ['$scope', 'UserService'];

    function MainController($scope, UserService) {
        console.log('Hello from main / parent controller...');

        $scope.message = 'Bicycles';
        console.log($scope.message);

        $scope.users = UserService.GetAllUsers();
        console.log($scope.users);

        $scope.debugging = true;
    };

})();
