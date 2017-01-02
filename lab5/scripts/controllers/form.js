'use strict';

angular.module('app')
    .controller("formCtrl", function ($scope, dataService) {
        $scope.is_articleAdded = false;

        function Article() {
            this.title = "";
            this.url = "";
            this.multimedia = [, , , , { url: "mock/cap.jpg" }];
            this.abstract = "";
        }

        $scope.article_adding = new Article();

        $scope.saveArticle = function () {
            if ($scope.article_adding.title === ""
                || $scope.article_adding.url === ""
                || $scope.article_adding.abstract === "") {
                alert("Fill in the gap!");
                return;
            }
            $scope.articles.push($scope.article_adding);
            $scope.article_adding = new Article();
            $scope.is_articleAdded = false;
        };
    });