export class Player {
  constructor({ className, limit, modal, form }) {
    this.className = className;
    this.limit = limit;
    this.modal = modal;
    this.form = form;
    this.$el = document.querySelector(`.${this.className}`);
    this.$video = this.$el.querySelector(`.${this.className}__video`);
    this.$playBtn = this.$el.querySelector(`.${this.className}__play`);
    this.$icons = [...this.$el.querySelectorAll(`.${this.className}__icon`)];

    this.currentTime = 0;
    this.step = 1000;

    this.toggleVideo();
    this.checkCurrentTime();
  }

  checkCurrentTime() {
    this.$video.addEventListener('timeupdate', () => {
      setTimeout(() => {
        this.currentTime = Math.floor(this.$video.currentTime);

        if (this.currentTime === this.limit) {
          this.pause();
          this.modal.show();
        }

        if (this.formSubmit) {
          this.play();
          this.modal.hide();
        }
      }, this.step);
    });
  }

  toggleIcon() {
    this.$icons.forEach(($icon) => {
      $icon.classList.toggle(`${this.className}__icon--active`);
    });
  }

  pause() {
    this.$video.pause();
    this.toggleIcon();
  }

  play() {
    this.$video.play();
    this.toggleIcon();
  }

  toggleVideo() {
    this.$playBtn.addEventListener('click', () => {
      if (this.$video.paused) {
        this.play();
      } else {
        this.pause();
      }
    });
  }
}
