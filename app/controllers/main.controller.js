(function() {
    'use strict';

    angular
        .module('app')
        .controller('MainController', MainController);

        MainController.$inject = ['$scope', 'UserServices'];

    function MainController($scope, UserServices) {
        console.log('Hello from main / parent controller...');

        $scope.message = 'Bicycles';
        console.log($scope.message);

        $scope.users = UserServices.GetAllUsers();
        console.log($scope.users);

        $scope.debugging = true;
    };

})();
