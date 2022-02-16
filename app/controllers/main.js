(function() {
    'use strict';

    angular
        .module('app')
        .controller('Main', Main);

    Main.$inject = ['$scope'];

    function Main($scope) {
        console.log('Hello from main / parent controller...');

        $scope.message = 'Hello...';

        console.log($scope.message);
        $scope.debugging = true;
    };

})();
