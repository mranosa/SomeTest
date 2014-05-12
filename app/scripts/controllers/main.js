'use strict';

angular.module('someTestApp')
	.controller('MainCtrl', function($scope, Calendar) {
		var datesOfTheWeek = Calendar.getDatesOfTheWeek(Calendar.getSunday());

		$scope.sampleData = [{
			name: 'Eat',
			start: datesOfTheWeek[0],
			accepted: datesOfTheWeek[1],
			inProgress: datesOfTheWeek[3],
			done: datesOfTheWeek[5]
		}, {
			name: 'Sleep',
			start: datesOfTheWeek[2],
			accepted: datesOfTheWeek[3],
			inProgress: datesOfTheWeek[5],
			done: datesOfTheWeek[6]
		}, {
			name: 'Drink',
			start: datesOfTheWeek[0],
			accepted: datesOfTheWeek[2],
			inProgress: datesOfTheWeek[4],
			done: datesOfTheWeek[6]
		}];

	});