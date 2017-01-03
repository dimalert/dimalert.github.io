'use strict';

function FormComponent(formService) {
    var ctrl = this;

    function Article() {
        this.title = "";
        this.url = "";
        this.multimedia = [, , , , { url: "mock/cap.jpg" }];
        this.abstract = "";
    }

    ctrl.article = {};

    this.$routerOnActivate = function(next) {
        ctrl.article = new Article();
    };

    this.saveArticle = function() {
        if (ctrl.article.title === "" ||
            ctrl.article.url === "" ||
            ctrl.article.abstract === "") {
            alert("Fill in the gap!");
            return;
        }
        formService.addPost(ctrl.article);
        alert("Post was added!");
    }
}
