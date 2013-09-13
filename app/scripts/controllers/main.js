'use strict';

angular.module('jqMobileTestApp')
  .controller('MainCtrl', function ($scope) {
    $scope.texts = [];
    $scope.push = function($event) {
      $scope.texts.push($scope.newText);
      $scope.newText = '';
      $event.preventDefault();
    };
  });
