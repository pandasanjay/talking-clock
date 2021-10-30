class TalkingClock {
    constructor(clockType, formatter){
        this.clockType = clockType;
        this.formatter = formatter;
    }

    getTimeInWord(){
        this.formatter.setClockType(this.clockType)
        this.formatter.process()
        return this.formatter.get()
    }

    talk(){
        console.log(this.getTimeInWord())
    }
}

export default TalkingClock;