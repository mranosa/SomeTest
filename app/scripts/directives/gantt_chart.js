'use strict';

angular.module('someTestApp')
	.directive('ganttChart', function() {
		return {
			templateUrl: '/partials/gantt_chart.html',
			restrict: 'E',
			scope: {
				data: '='
			},
			controller: function($scope, $element, Calendar) {
				$scope.datesOfTheWeek = Calendar.getDatesOfTheWeek(Calendar.getSunday());
				$scope.weekInfo = [];

				$scope.initWeekInfo = function() {
					angular.forEach($scope.data, function(item, index) {
						var dayBeforeAccepted = new Date(item.accepted.getTime()),
							dayBeforeInProgress = new Date(item.inProgress.getTime()),
							currNewObject = {
								name: item.name,
								classArray: []
							};

						dayBeforeAccepted.setDate(dayBeforeInProgress.getDate() - 1);
						dayBeforeInProgress.setDate(dayBeforeInProgress.getDate() - 1);

						angular.forEach($scope.datesOfTheWeek, function(currDate, index) {
							var currClass = '';
							if(currDate.isWithin(item.start, dayBeforeAccepted)) {
								currClass = 'danger';
							}
							if(currDate.isWithin(item.accepted, dayBeforeInProgress)) {
								currClass = 'warning';
							}
							if(currDate.isWithin(item.inProgress, item.done)) {
								currClass = 'success';
							}
							currNewObject.classArray.push({name: currClass});
						});

						$scope.weekInfo.push(currNewObject);
					});
				};

				$scope.initWeekInfo();
			}
		};
	});