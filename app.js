$(function() {
  let compatibleBrowser = typeof Object['__defineSetter__'] === 'function';
  if (compatibleBrowser) {
    new Vue({
      el: '#app',
      data: function() {
        return {
          movie: "",
          lang: "",
        }
      },
      methods: {
        searchMovie() {
          let yoho = document.getElementById("yohoho");
          yoho.dataset.title = this.movie;
          yoho.dataset.language = this.lang;
          yo();
        }
      }
    })
  } else {
    let search = $("#search").click(function() {
      let name = $("#movieName").val();
      let lang = $("#movieLang").val();
      let yoho = document.getElementById("yohoho");
      yoho.dataset.title = name;
      yoho.dataset.language = lang;
      yo();

    })
  }
});
