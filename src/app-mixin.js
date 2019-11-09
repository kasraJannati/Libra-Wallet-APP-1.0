var preloaderCounter = 0;

export default {
/*
  created (a,b) {
    console.log('YOYO created root', this)
  },*/

  methods: {
    //
    setBackButtonHandler: function() {
      /*self = this;
      $(window).on('lifecycle', function (event) {
        console.log('back-button')
        self.$f7router.back();
        if (event.detail.type == 'back-button') {
          self.$f7router.back();
        }
      });*/
    },

    // @return Promise
    alert (title = '', text = '') {
      return new Promise(done =>
        this.$f7.dialog.alert(text, title, done)
      );
    },
