class Hero {
  constructor() {
    this.video = document.querySelector('.js-hero-video');

    window.onresize = () => {
      this.setup();
    };

    this.setup();
  }

  setup() {
    if (window.screen.width < 1024) {
      this.video.removeAttribute('autoplay');
    } else {
      this.video.setAttribute('autoplay', true);
    }
  }
}

export default () => new Hero();
