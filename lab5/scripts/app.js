(function (angular) {
  'use strict';

  angular.module('app', ['ngComponentRouter', 'posts', 'post-adding'])
    .config(function ($locationProvider) {
      $locationProvider.html5Mode({
        enabled: true
      });
    })

    .value('$routerRootComponent', 'app');

})(window.angular);