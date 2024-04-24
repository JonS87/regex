export class Validator {
  constructor (name) {
    this.name = name;
  }

  validateUsername() {
    return /[^-\w]/.test(this.name) === false && /[0-9]{4}/.test(this.name) === false && /^[0-9_-]/.test(this.name) === false && /[0-9_-]$/.test(this.name) === false;
  }
}
