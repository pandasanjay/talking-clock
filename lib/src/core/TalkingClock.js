class TalkingClock {
  constructor(clockType) {
    this.clockType = clockType;
  }

  getTimeInWord() {
    return this.clockType.talk();
  }
}

export default TalkingClock;
