(function() {
    'use strict';

    angular
        .module('app')
        .factory('UserService', UserService);
        
    UserService.$inject = [];

    function UserService() {
        return {
            GetAllUsers: getAllUsers
        };

        function getAllUsers() {
            var users = [
                { id: '1', firstname: 'Matt', lastName: 'Fricker' },
                { id: '2', firstname: 'Vanessa', lastName: 'Fricker' }
            ];
            
            return users;
        }
    }

})();