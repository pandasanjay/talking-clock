import { capitalize } from "./utils/stringUtils";
import clockTypes from "./type"
import TalkingClock from "./core/TalkingClock";


const getAllAvailableFormats = () => Object.keys(clockTypes).map(key => {
        const ClockTypeClass = clockTypes[key]
        const ClockType = new ClockTypeClass()
        return ClockType.format;
    })
export const getClockTypeFromTimeString = (timeString) => Object.keys(clockTypes).map(key => {
    const ClockTypeClass = clockTypes[key]
    const ClockType = new ClockTypeClass(timeString)
    const isMatch = ClockType.check()
    return isMatch && ClockType
}).filter(data => data)[0]
export const getFormatterByType = (clockTypeName, formatterName) => import(`./formatter/${clockTypeName}/${formatterName}`).then((data) => data.default)

export default async function takingClock(timeString, formatterName = "Eng") {
    const clockType = getClockTypeFromTimeString(timeString);
    if (clockType) {
        try{
            const Formatter = await getFormatterByType(clockType.name, capitalize(formatterName))
            const talkingClock = new TalkingClock(clockType, new Formatter());
            return talkingClock.getTimeInWord();
        } catch {
            throw new Error(`"${formatterName}" is not a valid language type`)
        }
        
    }
    throw new Error(`Time should be format like ${getAllAvailableFormats().join(' or ')}`)
}