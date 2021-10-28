class ClockType {
    constructor(timeText){
        this.name = ""
        this.hours = ""
        this.minute = ""
        this.time = timeText
     }

    check() {
        if(this.time === "" && typeof this.time !== "string"){
            throw new Error("Time is not a valid format")
        }
        return this
    }
}
export default ClockType