'use strict';

angular.module('someTestApp')
	.controller('MainCtrl', function($scope) {
		$scope.getSunday = function() {
			var currentDay = new Date(),
				sundayDate = currentDay.getDate() - currentDay.getDay(),
				tempDate = new Date();

			tempDate.setDate(sundayDate);

			return new Date(tempDate);
		};

		$scope.getDatesOfTheWeek = function(sunday) {
			var startDate = sunday,
				dates = [
					new Date(startDate)
				];

			for (var i = 0; i < 6; i++) {
				dates.push(new Date(startDate.addDays(1)));
			}

			return dates;
		};

		$scope.datesOfTheWeek = $scope.getDatesOfTheWeek($scope.getSunday());


		$scope.sampleData = [{
			name: 'Eat',
			start: $scope.datesOfTheWeek[0],
			accepted: $scope.datesOfTheWeek[1],
			inProgress: $scope.datesOfTheWeek[3],
			done: $scope.datesOfTheWeek[5]
		}, {
			name: 'Sleep',
			start: $scope.datesOfTheWeek[2],
			accepted: $scope.datesOfTheWeek[3],
			inProgress: $scope.datesOfTheWeek[5],
			done: $scope.datesOfTheWeek[6]
		}, {
			name: 'Drink',
			start: $scope.datesOfTheWeek[0],
			accepted: $scope.datesOfTheWeek[2],
			inProgress: $scope.datesOfTheWeek[4],
			done: $scope.datesOfTheWeek[6]
		}];

	});