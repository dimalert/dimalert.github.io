'use strict';
var datat = {};
var URL = 'https://api.nytimes.com/svc/topstories/v1/travel.json?api-key=7f64edc5d0804574800d7a8b9da058ad';
var myApp = angular.module('app', [])
    .controller("MainCtrl", function($scope){
         window.onload = function() {
             fetch(URL)  
                    .then(function(response) {  
                        if (response.status !== 200) {  
                            console.log('Looks like there was a problem. Status Code: ' +  
                            response.status);  
                            return;  
                        }
                    // Examine the text in the response  
                        response.json().then(function(data) {  
                              $scope.articles = data.results;
                              
                              for(let i = 0; i < $scope.articles.length; i++) {
                                  if($scope.articles[i].multimedia === "" ) {
                                      console.log($scope.articles[i].multimedia);
                                      $scope.articles[i].multimedia = [,,,,{url: "static/cap.jpg"}];
                                      console.log($scope.articles[i].multimedia);
                                  }
                              }
                              
                              $scope.$apply();
                              console.log(data);
                        });  
                    }  
                )  
                .catch(function(err) {  
                    console.log('Fetch Error :-S', err);  
                });
            
        }
    });
    myApp.controller("FormCtrl", function($scope){
        $scope.is_articleAdded = false;
        
        function Article() {
            this.title = "";
            this.url = "";
            this.multimedia = [,,,,{url: "static/cap.jpg"}];
            this.abstract = "";
        }
        
        $scope.article_adding = new Article();
        
        $scope.saveArticle = function() {
          $scope.articles.push($scope.article_adding);
          $scope.article_adding = new Article();
          $scope.is_articleAdded = false;
        };
    });





    