'use strict';
var datat = {};
var URL = 'https://api.nytimes.com/svc/topstories/v1/travel.json?api-key=7f64edc5d0804574800d7a8b9da058ad';
var myApp = angular.module('app', [])
    .controller("MainCtrl", function($scope, $http){
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
                              $scope.items = data;
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





    