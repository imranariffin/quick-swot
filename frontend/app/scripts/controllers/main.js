'use strict';

/**
 * @ngdoc function
 * @name frontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the frontendApp
 */
angular.module('frontendApp')
  .controller('MainCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    $scope.mainstuffs = [
    	{'name' : 'first item'},
    	{'name' : 'second item'},
    	{'name' : 'lol'},
    	{'name' : 'yay!'},
    	{'name' : 'wow!'}
    ];
  });
