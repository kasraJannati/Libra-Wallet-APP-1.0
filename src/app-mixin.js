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
