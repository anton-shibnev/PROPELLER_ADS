export class Form {
  constructor({ className, modal, player }) {
    this.className = className;
    this.modal = modal;
    this.player = player;
    this.$el = document.querySelector(`.${this.className}`);
    this.$input = this.$el.querySelector(`.${this.className}__input input`);
    this.$btn = this.$el.querySelector(`.${this.className}__btn`);

    this.email = this.$input.value;
    this.isSubmit = this.submitForm();

    this.submitForm();
    this.checkMail();
  }

  validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

  checkMail() {
    this.$input.addEventListener('input', () => {
      this.email = this.$input.value;

      this.validateEmail(this.email);
    });
  }

  submitForm() {
    this.$el.addEventListener('submit', (e) => {
      e.preventDefault();
      const isValid = this.validateEmail(this.email);

      this.isSubmit = isValid;

      if (this.isSubmit) {
        this.modal.hide();
        this.player.play();
      }

      return isValid;
    });
  }
}
