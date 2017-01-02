(function (angular) {
  'use strict';

  // angular.module('app', ['ngComponentRouter', 'posts', 'post-adding'])
  angular.module('app', ['ngComponentRouter', 'posts'])
    .config(function ($locationProvider) {
      $locationProvider.html5Mode({
        enabled: true
      });
    })

    .value('$routerRootComponent', 'app');

  //angular.module('post-adding', []);
})(window.angular);