(function (angular) {
  'use strict';

  angular.module('app', ['ngComponentRouter', 'posts', 'postAdding'])
    .config(function ($locationProvider) {
      $locationProvider.html5Mode({
        enabled: true
      });
    })

    .value('$routerRootComponent', 'app');

})(window.angular);