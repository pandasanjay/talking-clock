import ClockType from "../ClockType";
import Validate24hr from "./Validation24hr";

class Clock24hr extends ClockType{
    constructor(timeText, Validator = Validate24hr){
      super(timeText)
      this.name = "24hr"
      this.format = "h(h):mm"
      this.time = timeText;
      this.hours = ""
      this.minute = ""
      this.validator = new Validator(this)
      
    }

    _process(){
        const [hours, minutes] = this.time.split(":") 
        this.hours = parseInt(hours, 10);
        this.minute = parseInt(minutes, 10);
        this.validator.validate();
    }

    check() {
        if(super.check() && this.validator.checkInputFormat()){
          this._process()
          return true
        }
        return false
    }
}

export default Clock24hr