class Validation24hr {
    constructor() {
       this.error = ""
    }

    _validateHour(hh) {
        if(!hh && hh !== 0){
            this.error = "Hour can't be undefined, empty or null";
        } else if(!(hh >=0 && hh < 24)){
            this.error = "Hour must be in with in the range of 0 - 23"
        }
        return this
    }

    _validateMinute(mm){
        if(!mm && mm !== 0){
            this.error = "Minute can't be undefined, empty or null";
        } else if(!(mm >= 0 && mm < 60)) {
            this.error = "Minute must be with in the range of 0 - 59"
        }
        return this
    }

    validate(hh, mm){
        return this._validateHour(hh)
        ._validateMinute(mm)
        .throwError()
    }

    throwError(){
        if(this.error){
            throw new Error(this.error)
        }
    }
}

export default Validation24hr;