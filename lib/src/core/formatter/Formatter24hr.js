import { template, getTemplate } from "../../utils/templateUtils"
import numberToWord from "../../utils/numberToWord"
import Process24hr from "../processors/Process24hr"

class Formatter24hr {
    constructor(clockType, lang) {
        this.lang = lang || "en"
        this.template = getTemplate(clockType.name, this.lang)
        this.processor = new Process24hr(clockType);
        this.clockType = clockType
        this.hhInWord = ""
        this.hrNextInWord = "";
        this.mmInWord = "";
        this.mmRemainInWord = "";
        this.details = {
            tplKey: "",
            data: {}
        }
    }

    getHourInWord() {
        return numberToWord(this.template.numberInWord, this.processor.getProcessedHour())
    }

    getNextHourInWord() {
        return numberToWord(this.template.numberInWord, this.processor.getProcessedHour(this.processor.getNextHour()))
    }

    getMinuteInWord() {
        return numberToWord(this.template.numberInWord, this.clockType.minute)
    }

    getRemainingMinuteInWord() {
        return numberToWord(this.template.numberInWord, this.processor.getRemainingMinute())
    }

    get() {
        return template(this.template[this.details.tplKey], this.details.data)
    }

    process() {
        this.hhInWord = this.getHourInWord()
        this.hrNextInWord = this.getNextHourInWord();
        this.mmInWord = this.getMinuteInWord();
        this.mmRemainInWord = this.getRemainingMinuteInWord();
        this._processTimeInWord()
    }

    _processTimeInWord() {
        if (this.processor.isMidnight()) {
            this.details.tplKey = "midnight"
        } else if (this.processor.isOclock()) {
            this.details = {
                tplKey: "oclock",
                data: {
                    hourInWord: this.hhInWord
                }
            }
        } else if (this.processor.isHalfPast()) {
            this.details = {
                tplKey: "halfpast",
                data: {
                    hourInWord: this.hhInWord
                }
            }
        } else if (this.processor.isMinutePast()) {
            this.details = {
                tplKey: "minutepast",
                data: {
                    hourInWord: this.hhInWord,
                    minuteInWord: this.mmInWord
                }
            }
        } else if (this.processor.isMinuteTo()) {
            this.details = {
                tplKey: "minuteto",
                data: {
                    hourNextInWord: this.hrNextInWord,
                    minuteRemainInWord: this.mmRemainInWord
                }
            }
        }
    }


}

export default Formatter24hr;