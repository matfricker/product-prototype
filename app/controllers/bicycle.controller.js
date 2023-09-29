(function() {
    'use strict';

    angular
        .module('app')
        .controller('BicycleController', BicycleController);
        
    BicycleController.$inject = ['$scope', 'CommonServices', 'BicycleService'];
    
    function BicycleController ($scope, CommonServices, BicycleService) {

        $scope.Quote = {};

        $scope.LengthOfCoverOptions = BicycleService.GetLengthOfCoverOptions();
        $scope.BicycleTypeOptions = BicycleService.GetBicycleTypeOptions();
        $scope.HelmetAndClothingValueOptions = BicycleService.GetHelmetAndClothingValueOptions();
        $scope.TypeOfCoverValueOptions = BicycleService.GetTypeOfCoverOptions();
        $scope.ClaimOptions = BicycleService.GetClaimsOptions();
        $scope.CoverStartDateOptions = CommonServices.GetCoverStartDates(30);
        $scope.DayOptions = CommonServices.GetDayOptions()
        $scope.MonthOptions = CommonServices.GetFullMonthOptions();
        $scope.DateOfBirthYearOptions = CommonServices.GetBirthdayYearOptions(18, 75);

        $scope.BicycleText = "bicycle";
        $scope.TotalBicycleValue = 0;
        $scope.ShowAddBicycle = true;

        // ADD BICYCLE
        $scope.AddBicycle = function() {
            if (angular.isUndefined($scope.Quote.Bicycles)) {
                $scope.Quote.Bicycles = [];
            }

            let identifier = Math.ceil(Math.random() * Math.pow(10, 10));

            $scope.Quote.Bicycles
                .push({
                    TempId: identifier,
                    MakeModel: $scope.Bicycle.MakeModel,
                    Value: $scope.Bicycle.Value,
                    Type: $scope.Bicycle.Type,
                    TypeName: CommonServices.GetBicycleType($scope.Bicycle.Type)
                });

            if ($scope.Quote.Bicycles.length > 3) {
                $scope.ShowAddBicycle = false;
            }
        
            $scope.TotalBicycleValue += parseInt($scope.Bicycle.Value, 10);

            $scope.Bicycle = {};
        };

        // REMOVE BICYCLE
        $scope.RemoveBicycle = function (index) {
            $scope.Quote.Bicycles.splice(index, 1);
            if ($scope.Quote.Bicycles.length <= 3) {
                $scope.ShowAddBicycle = true;
            }
        }

        $scope.CheckDateOfBirth = function () {
            if ($scope.DateOfBirthDay && $scope.DateOfBirthMonth && $scope.DateOfBirthYear) {
                $scope.Quote.DateOfBirth = new Date(Date.UTC($scope.DateOfBirthYear, $scope.DateOfBirthMonth, $scope.DateOfBirthDay));
                $scope.Quote.Age = CommonServices.GetAge($scope.Quote.DateOfBirth);
                $scope.Quote.InceptionAge = CommonServices.GetAgeAtInception($scope.Quote.DateOfBirth, $scope.Quote.CoverStartDate);
            }
        }

    };

})();
