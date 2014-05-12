'use strict';

angular.module('someTestApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute'
])
  .config(function($routeProvider) {
    Date.prototype.addDays = function(days) {
      this.setDate(this.getDate() + days);
      return this;
    };

    Date.prototype.isSameDay = function(date) {
      return this.getDate() === date.getDate() 
        && this.getMonth() === date.getMonth()
        && this.getFullYear() === date.getFullYear();
    };

    Date.prototype.isWithin = function(from, to) {
      return this.getDate() >= from.getDate() && this.getDate() <= to.getDate()
        && this.getMonth() >= from.getMonth() && this.getMonth() <= to.getMonth()
        && this.getFullYear() >= from.getFullYear() && this.getFullYear() <= to.getFullYear()
    };

    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });