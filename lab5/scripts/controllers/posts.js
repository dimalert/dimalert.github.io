'use strict';
var URL = 'https://api.nytimes.com/svc/topstories/v1/travel.json?api-key=7f64edc5d0804574800d7a8b9da058ad';

function PostsListComponent(dataService) {
  var selectedId = null;
  var ctrl = this;
  ctrl.articles = [];

  this.$routerOnActivate = function (next) {
    console.log('$routerOnActivate', this, arguments);
    // Load up the articles for this view
    ctrl.articles = dataService.getArt();
    if (ctrl.articles.length === 0) {

      dataService.getArticles(function (response) {
        if (response.status !== 200) {
          console.log('Looks like there was a problem. Status Code: ' + response.status);
          return;
        }
        response.json().then(function (data) {
          ctrl.articles = data.results;

          for (let i = 0; i < ctrl.articles.length; i++) {
            ctrl.articles[i].id = i;
            if (ctrl.articles[i].multimedia === "") {
              console.log(ctrl.articles[i].multimedia);
              ctrl.articles[i].multimedia = [, , , , { url: "mock/cap.jpg" }];
              console.log(ctrl.articles[i].multimedia);
            }
          }
          dataService.setArticles(ctrl.articles);
        });
      });

    }
    selectedId = next.params.id;
  };

  function Article() {
    this.title = "";
    this.url = "";
    this.multimedia = [, , , , { url: "mock/cap.jpg" }];
    this.abstract = "";
  }

  this.pushArticle = function () {
    ctrl.articles.shift(new Article());
  }

  this.isSelected = function (article) {
    return (article.id === selectedId);
  };

  this.onSelect = function (article) {
    this.$router.navigate(['PostDetail', { id: article.id }]);
  };


}

function PostDetailComponent(dataService) {
  var ctrl = this;
  ctrl.article = {};
  this.$routerOnActivate = function (next) {
    // Get the crisis identified by the route parameter
    var id = next.params.id;
    ctrl.article = dataService.getArticle(id);
  };

  this.gotoArticles = function () {
    var articleId = ctrl.articles && ctrl.article.id;
    // Pass along the hero id if available
    // so that the CrisisListComponent can select that hero.
    this.$router.navigate(['PostsList', { id: articleId }]);
  };


}

