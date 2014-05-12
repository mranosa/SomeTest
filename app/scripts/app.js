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
    
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });