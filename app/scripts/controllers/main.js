'use strict';

angular.module('someTestApp')
	.controller('MainCtrl', function($scope) {
		$scope.awesomeThings = [
			'HTML5 Boilerplate',
			'AngularJS',
			'Karma'
		];

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

			for(var i = 0; i < 6; i++) {
				dates.push(new Date(startDate.addDays(1)));
			}

			return dates;
		};

		$scope.datesOfTheWeek = $scope.getDatesOfTheWeek($scope.getSunday());
	});