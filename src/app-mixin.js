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

    // @return Promise
    confirm (title = '', text = '') {
      return new Promise(done =>
        this.$f7.dialog.confirm(text, title,
            () => done(true ),
            () => done(false)
        )
      );
    },

    // @return Promise<Index>
    dialog (title = '', text = '', options = {}) {
      return new Promise(done =>
        this.$f7.dialog.create({
          title  : title,
          text   : text,
          onClick: (dialog, index) => done(index),
          ...options
        }).open()
      )
    },

    // @return Promise
    password (title = '', text = '') {
      return new Promise(done =>
        this.$f7.dialog.password(text, title,
            v  => done(v),
            () => done(false)
        )
      );
    },

    // @return Promise
    prompt (title = '', text = '', value = '') {
      return new Promise(done =>
        this.$f7.dialog.prompt(text, title,
            v  => done(v),
            () => done(false),
            value
        )
      );
    },

    // @return Promise
    preloader (promise, color) {
      preloaderCounter++;
      this.$f7.preloader.show(color);
      return promise
        .then(v => {
          --preloaderCounter || this.$f7.preloader.hide();
          return v;
        })
        .catch(e => {
          --preloaderCounter || this.$f7.preloader.hide();
          return Promise.reject(e);
        })
    },
