(function() {
    'use strict'

    describe('Users factory', function() {
        var users;
        var userList = [
            { id: '1', firstname: 'Matt', lastName: 'Fricker' },
            { id: '2', firstname: 'Vanessa', lastName: 'Fricker' }
        ];

        // before each test load 'app' module
        beforeEach(angular.mock.module('app'));

        // before each test set our injected Users factory (_Users_)
        // to our local Users variable
        beforeEach(angular.mock.inject(function(_users_) {
            users = _users_;
        }));

        // a simple test to verify that the Users factory exists
        it('should exist', function() {
            console.log(users);
            expect(users).toBeDefined();
        })

        // describe('.all()', function() {
        //     it('should exist', function() {
        //         expect(Users.getAllUsers).toBeDefined();
        //     })

        //     it('should return a list of users', function() {
        //         var allUsers = Users.getAllUsers();
        //         console.log(angular.mock.dump(allUsers));
        //         expect(allUsers).toEqual(userList);
        //     })

        //     it('should have at least one user', function() {
        //         var allUsers = Users.getAllUsers();
        //         console.log('Number of Users: ' + allUsers.length);
        //         expect(allUsers.length).toBeGreaterThan(0); 
        //     })
        // });
    });

})();