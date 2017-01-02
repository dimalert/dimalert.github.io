(function (angular) {
    'use strict';

    angular.module('postAdding', ['posts'])
        .service('formService', FormService)
        .component('postAdding', {
            template: '<ng-outlet></ng-outlet>',
            $routeConfig: [
                { path: '/', name: 'FormPost', component: 'formPost', useAsDefault: true }
            ]
        })

        .component('formPost', {
            templateUrl: 'templates/form.html',
            controller: FormComponent
        })
})(window.angular);