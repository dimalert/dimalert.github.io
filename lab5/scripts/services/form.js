'use strict';

function FormService(dataService) {
    this.addPost = function(article) {
        dataService.addPost(article);
    }
}