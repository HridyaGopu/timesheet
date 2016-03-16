'use strict';

describe('Controller Tests', function() {

    describe('Timesheet Detail Controller', function() {
        var $scope, $rootScope;
        var MockEntity, MockTimesheet;
        var createController;

        beforeEach(inject(function($injector) {
            $rootScope = $injector.get('$rootScope');
            $scope = $rootScope.$new();
            MockEntity = jasmine.createSpy('MockEntity');
            MockTimesheet = jasmine.createSpy('MockTimesheet');
            

            var locals = {
                '$scope': $scope,
                '$rootScope': $rootScope,
                'entity': MockEntity ,
                'Timesheet': MockTimesheet
            };
            createController = function() {
                $injector.get('$controller')("TimesheetDetailController", locals);
            };
        }));


        describe('Root Scope Listening', function() {
            it('Unregisters root scope listener upon scope destruction', function() {
                var eventType = 'timesheetApp:timesheetUpdate';

                createController();
                expect($rootScope.$$listenerCount[eventType]).toEqual(1);

                $scope.$destroy();
                expect($rootScope.$$listenerCount[eventType]).toBeUndefined();
            });
        });
    });

});
