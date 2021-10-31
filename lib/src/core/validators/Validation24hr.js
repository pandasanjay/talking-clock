class Validation24hr {
  constructor(clockType) {
    this.error = "";
    this.clockType = clockType;
  }

  _validateHour(hh) {
    if (!(hh >= 0 && hh < 24)) {
      this.error = "Hour must be in with in the range of 0 - 23";
    }
    return this;
  }

  _validateMinute(mm) {
    if (!(mm >= 0 && mm < 60)) {
      this.error = "Minute must be with in the range of 0 - 59";
    }
    return this;
  }

  checkInputFormat() {
    return /^[0-9]{1,2}:[0-9]{2}$/.test(this.clockType.time);
  }

  validate(hh = this.clockType.hours, mm = this.clockType.minute) {
    return this._validateHour(hh)._validateMinute(mm).throwErrorIfAny();
  }

  throwErrorIfAny() {
    if (this.error) {
      throw new Error(this.error);
    }
  }
}

export default Validation24hr;
