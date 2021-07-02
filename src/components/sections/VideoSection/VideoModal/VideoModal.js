export class VideoModal {
  constructor({ className }) {
    this.className = className;
    this.$el = document.querySelector(`.${this.className}`);
  }

  show() {
    this.$el.classList.add(`${this.className}--active`);
  }

  hide() {
    this.$el.classList.remove(`${this.className}--active`);
  }
}
