'use strict';

angular.module('app')
.service("dataService", function() {

        var scope = this;

        this.getArticles = function(callback) {
             fetch(URL)  
                .then(callback)  
                .catch(function(err) {  
                    console.log('Fetch Error :-S', err);  
                });
        }

});