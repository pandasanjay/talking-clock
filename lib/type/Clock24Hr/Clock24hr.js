import ClockType from "../ClockType";
import Validate24hr from "./Validation24hr";

class Clock24hr extends ClockType{
    constructor(timeText, validator = new Validate24hr()){
      super(timeText)
      this.name = "24hr"
      this.time = timeText;
      this.hours = ""
      this.minute = ""
      this.validator = validator
      
    }

    _process(){
        const [hours, minutes] = this.time.split(":") 
        this.hours = parseInt(hours, 10);
        this.minute = parseInt(minutes, 10);
        this.validator.validate(hours, minutes);
    }

    check() {
        if(super.check() && /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/.test(this.time)){
          this._process()
          return true
        }
        return false
    }
}

export default Clock24hr