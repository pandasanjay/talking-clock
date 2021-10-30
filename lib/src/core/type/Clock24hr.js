import Formatter24hr from "../formatter/Formatter24hr";
import Validate24hr from "../validators/Validation24hr";

class Clock24hr {
    constructor(timeText, lang, Validator = Validate24hr,  Formatter = Formatter24hr){
      this.name = "24hr"
      this.format = "h(h):mm"
      this.time = timeText;
      this.hours = ""
      this.minute = ""
      this.validator = new Validator(this)
      this.formatter = new Formatter(this, lang)
      
    }

    _process(){
        const [hours, minutes] = this.time.split(":") 
        this.hours = parseInt(hours, 10);
        this.minute = parseInt(minutes, 10);
        this.validator.validate();
        this.formatter.process()
    }

    check() {
        if(this.validator.checkInputFormat()){
          this._process()
          return true
        }
        return false
    }

    talk() {
      return this.formatter.get()
    }
}

export default Clock24hr