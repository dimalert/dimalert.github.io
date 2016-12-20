'use strict';

angular.module('app')
.directive('article', function() {
    return {
        temlateUrl: 'templates/article.html',
        replace: true,
        controller: 'mainCtrl'
    };
});