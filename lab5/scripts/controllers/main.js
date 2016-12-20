'use strict';

var URL = 'https://api.nytimes.com/svc/topstories/v1/travel.json?api-key=7f64edc5d0804574800d7a8b9da058ad';

angular.module('app')
.controller("mainCtrl", function($scope, dataService) {
         
        dataService.getArticles(function(response) {  
                if (response.status !== 200) {  
                    console.log('Looks like there was a problem. Status Code: ' +  
                    response.status);  
                    return;  
                }
                response.json().then(function(data) {  
                    $scope.articles = data.results;
                                
                    for(let i = 0; i < $scope.articles.length; i++) {
                        if($scope.articles[i].multimedia === "" ) {
                            console.log($scope.articles[i].multimedia);
                            $scope.articles[i].multimedia = [,,,,{url: "mock/cap.jpg"}];
                            console.log($scope.articles[i].multimedia);
                        }
                    }
                        
                    $scope.$apply();
                });  
            }  
        );

});

