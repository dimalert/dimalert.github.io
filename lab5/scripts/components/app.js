(function (angular) {
  'use strict';

  angular.module('app')
    .component('app', {
      template:
      '<nav>\n' +
      '  <a ng-link="[\'PostsList\']">List of Posts</a>\n' +
      //'  <a ng-link="[\'Form\']">Add new Post</a>\n' +
      '</nav>\n' +
      '<ng-outlet></ng-outlet>\n',
      $routeConfig: [
        { path: '/posts-list/...', name: 'PostsList', component: 'posts', useAsDefault: true }
        //{path: '/form/...', name: 'Form', component: 'post-adding' }
      ]
    });
})(window.angular);