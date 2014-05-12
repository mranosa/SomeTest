'use strict';

angular.module('someTestApp')
  .factory('Calendar', function() {
    
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

    var Calendar = function() {

    };

    Calendar.prototype = {
      getSunday: function(credentials) {
        var currentDay = new Date(),
          sundayDate = currentDay.getDate() - currentDay.getDay(),
          tempDate = new Date();

        tempDate.setDate(sundayDate);

        return new Date(tempDate);
      },
      getDatesOfTheWeek: function(sunday) {
        var startDate = sunday,
          dates = [new Date(startDate)];

        for (var i = 0; i < 6; i++) {
          dates.push(new Date(startDate.addDays(1)));
        }

        return dates;
      }
    };

    return new Calendar();
  });