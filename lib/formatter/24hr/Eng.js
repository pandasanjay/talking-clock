import numberToWord from "../../utils/numberToWord";

class Eng {
    constructor(clockType){
        this.clockType = clockType;
        this.hhInWord = ""
        this.htNextInWord = ""
        this.mmInWord = ""
        this.mmRemainInWord = ""
        this.inWord = ""
    }

     _midnight(){
         this.inWord = "Midnight";
     }

     _oClock(){
         this.inWord = `${this.hhInWord} o'clock`
     }

     _halfPast(){
         this.inWord = `Half past ${this.hhInWord}`
     }

     _minutePast(){
         this.inWord = `${this.mmInWord} past ${this.hhInWord}`
     }

     _minuteTo(){
         this.inWord = `${this.mmRemainInWord} to ${this.hhInWordNext}`
     }

     _processTimeInWord() {
         if(this.clockType.minute === 0 && this.clockType.hours === 0){
             this._midnight()
         } else if(this.clockType.minute === 0) {
             this._oClock()
         } else if(this.clockType.minute === 30) {
             this._halfPast()
         } else if(this.clockType.minute > 0 && this.clockType.minute <30) {
             this._minutePast()
         } else if(this.clockType.minute > 31 && this.clockType.minute < 60){
             this._minuteTo()
         }
     }

     _handelHour(hh){
         if(hh > 12) {
             return hh - 12
         } if (hh === 0){
             return 12;
         }
         return hh
     }

     _handelNextHour(hh){
         let hourText = ""
         const nextHr = hh + 1;
         if( nextHr === 24) {
             hourText =  "Midnight";
         } else {
             hourText = numberToWord(this._handelHour(nextHr))
         }
         return hourText
     }

     setClockType(clockType){
         this.clockType = clockType
     }

     process() {
         this.hhInWord = numberToWord(this._handelHour(this.clockType.hours))
         this.hhInWordNext = this._handelNextHour(this.clockType.hours)
         this.mmInWord = numberToWord(this.clockType.minute)
         this.mmRemainInWord = numberToWord(60 - this.clockType.minute)
         this._processTimeInWord()
     }

     get(){
        return this.inWord
     }
}

export default Eng