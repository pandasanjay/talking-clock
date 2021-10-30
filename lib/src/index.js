import clockTypes from "./core/type"
import TalkingClock from "./core/TalkingClock";


const getAllAvailableFormats = () => Object.keys(clockTypes).map(key => {
        const ClockTypeClass = clockTypes[key]
        const ClockType = new ClockTypeClass()
        return ClockType.format;
    })
export const getClockTypeFromTimeString = (timeString, formatterName) => Object.keys(clockTypes).map(key => {
    const ClockTypeClass = clockTypes[key]
    const ClockType = new ClockTypeClass(timeString, formatterName)
    const isMatch = ClockType.check()
    return isMatch && ClockType
}).filter(data => data)[0]


export default async function takingClock(timeString, formatterName = "en") {
    const clockType = getClockTypeFromTimeString(timeString, formatterName);
    if (clockType) {
        const talkingClock = new TalkingClock(clockType);
        return talkingClock.getTimeInWord();
    }
    throw new Error(`Time should be format like ${getAllAvailableFormats().join(' or ')}`)
}