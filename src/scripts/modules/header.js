class Header {
  constructor() {
    this.nav = document.querySelector('.js-header');
    if (!this.nav) return;

    if (!this.nav.classList.contains('is-active')) {
      window.onscroll = () => {
        this.setup();
      };

      this.setup();
    }
  }

  setup() {
    if (
      document.body.scrollTop > 80 ||
      document.documentElement.scrollTop > 80
    ) {
      this.nav.classList.add('is-active');
    } else {
      this.nav.classList.remove('is-active');
    }
  }
}

export default () => new Header();
