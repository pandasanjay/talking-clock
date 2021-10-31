class Process24hr {
  constructor(clockType) {
    this.clockType = clockType;
  }

  getProcessedHour(hh = this.clockType.hours) {
    if (hh === 24) {
      return 0;
    }
    if (hh > 12) {
      return hh - 12;
    }
    if (hh === 0) {
      return 12;
    }
    return hh;
  }

  getRemainingMinute(mm = this.clockType.minute) {
    return 60 - mm;
  }

  getNextHour(hh = this.clockType.hours) {
    return hh + 1;
  }

  isMidnight() {
    return this.clockType.minute === 0 && this.clockType.hours === 0;
  }

  isOclock() {
    return this.clockType.minute === 0;
  }

  isMinutePast() {
    return this.clockType.minute > 0 && this.clockType.minute < 30;
  }

  isHalfPast() {
    return this.clockType.minute === 30;
  }

  isMinuteTo() {
    return this.clockType.minute > 30 && this.clockType.minute < 60;
  }
}

export default Process24hr;
