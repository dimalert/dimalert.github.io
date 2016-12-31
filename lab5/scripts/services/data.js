'use strict';
var URL = 'https://api.nytimes.com/svc/topstories/v1/travel.json?api-key=7f64edc5d0804574800d7a8b9da058ad';

function DataService() {

  var articles = [];

  this.getArticles = function(callback) {
    fetch(URL)  
      .then(callback)  
      .catch(function(err) {  
        console.log('Fetch Error :-S', err);  
      });
  };
  this.getArt = function() {
    return articles;
  };
  
  this.setArticles = function(res) {
    articles = res;
    console.log(articles);
  };
  
  this.getArticle = function(id) {
    for (var i = 0; i < articles.length; i++) {
      if (articles[i].id === id) return articles[i];
    }
  };

}