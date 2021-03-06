'use strict';

function DataService() {

  var articles = [];

  this.getArticles = function (callback) {
    fetch(URL)
      .then(callback)
      .catch(function (err) {
        console.log('Fetch Error :-S', err);
      });
  };
  
  this.getArt = function () {
    return articles;
  };

  this.setArticles = function (res) {
    articles = res;
    console.log(articles);
  };

  this.getArticle = function (id) {
    for (var i = 0; i < articles.length; i++) {
      if (articles[i].id === id) return articles[i];
    }
  };

  this.addPost = function (article) {
    article.id = 0;
    articles.unshift(article);
    for (let i = 0; i < articles.length; i++) {
      articles[i].id = i;
    }
  }
}
