new Vue({
  el: '#app',
  data: function() {
    return {
      movie: "",
      lang: "",
      default_langs: ["ru", "ua", "en"]
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
