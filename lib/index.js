import clockTypes from "./type"
import TalkingClock from "./core/TalkingClock";

export const getClockTypeFromTimeString = (timeString) => Object.keys(clockTypes).map(key => {
        const ClockTypeClass = clockTypes[key]
        const ClockType = new ClockTypeClass(timeString)
        return ClockType.check() && ClockType
    }).filter(data => data)[0]
export const getFormatterByType = (clockTypeName, formatterName) => import(`./formatter/${clockTypeName}/${formatterName}`).then((data) => data.default)

export default async function takingClock(timeString, formatterName = "Eng") {
    const clockType = getClockTypeFromTimeString(timeString);
    const Formatter = await getFormatterByType(clockType.name, formatterName)
    const talkingClock = new TalkingClock(clockType, new Formatter());
    return talkingClock.getTimeInWord();
}