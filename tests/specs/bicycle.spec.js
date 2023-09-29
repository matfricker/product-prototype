(function(){
    'use strict';

    describe('BicycleService factory', function() {
        var bicycleService;

        beforeEach(angular.mock.module('app'));

        beforeEach(angular.mock.inject(function(_bicycleService_) {
            bicycleService = _bicycleService_;
        }));

        it('should exsit', function() {
            expect(bicycleService).toBeDefined();
        });
    });

})();