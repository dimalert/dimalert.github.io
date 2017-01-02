(function(angular) {
    'use strict';

    angular.module('posts', [])
        .service("dataService", DataService)

    .component('posts', {
        template: '<ng-outlet></ng-outlet>',
        $routeConfig: [
            { path: '/', name: 'PostsList', component: 'postList', useAsDefault: true },
            { path: '/:id', name: 'PostDetail', component: 'postDetail' }
        ]
    })

    .component('postList', {
        templateUrl: 'templates/postsList.html',
        bindings: {
            $router: '<'
        },
        controller: PostsListComponent,
        $canActivate: function($nextInstruction, $prevInstruction) {
            console.log('$canActivate', arguments);
        }
    })

    .component('postDetail', {
        templateUrl: 'templates/postDetail.html',
        bindings: { $router: '<' },
        controller: PostDetailComponent,
        $canActivate: function($nextInstruction, $prevInstruction) {
            console.log('$canActivate', arguments);
        }
    });
})(window.angular);