'use strict';

angular.module('jqMobileTestApp', ['ui'])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(false);
    $locationProvider.hashPrefix("!");
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      });
    //prevent reloading the same page
    $(document).bind("pagebeforechange", function (e, data) {
      var to = data.toPage,
        from = data.options.fromPage;

      if (to && to.attr && from && from.attr && to.attr("id") === from.attr("id")) {
        e.preventDefault();
      }
    });
  });
