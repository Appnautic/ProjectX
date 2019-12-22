class Parallax {
  constructor() {
    this.parallaxContainer = document.querySelector('.js-parallax');
    this.layers = this.parallaxContainer.children;

    this.setup();

    window.addEventListener('scroll', () => {
      this.setup();
    });

    window.addEventListener('resize', () => {
      this.setup();
    });
  }

  setup() {
    const rect = this.parallaxContainer.getBoundingClientRect();
    const top = rect.top - window.innerHeight;
    const h = this.parallaxContainer.offsetHeight;

    let layer = null;
    let speed = null;
    let yPos = null;

    if (top < 0) {
      for (let i = 0; i < this.layers.length; i += 1) {
        layer = this.layers[i];
        speed = layer.getAttribute('data-speed');
        yPos = Math.round(-(((top + h) * (100 - speed)) / 100));

        layer.setAttribute('style', `transform: translateY(${yPos}px)`);
      }
    }
  }
}
export default () => new Parallax();
