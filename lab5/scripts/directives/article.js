'use strict';

angular.module('app')
.directive('article', function() {
    return {
        templateUrl: 'templates/article.html',
        replace: true,
        controller: 'mainCtrl'
    };
});