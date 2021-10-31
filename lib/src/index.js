import clockTypes from "./core/type";
import TalkingClock from "./core/TalkingClock";
import { getMinuteInTwoDigit } from "./utils/dateTimeUtils";

const getAllAvailableFormats = () =>
  Object.keys(clockTypes).map((key) => {
    const ClockTypeClass = clockTypes[key];
    const ClockType = new ClockTypeClass();
    return ClockType.format;
  });
export const getClockTypeFromTimeString = (timeString, formatterName) =>
  Object.keys(clockTypes)
    .map((key) => {
      const ClockTypeClass = clockTypes[key];
      const ClockType = new ClockTypeClass(timeString, formatterName);
      const isMatch = ClockType.check();
      return isMatch && ClockType;
    })
    .filter((data) => data)[0];

export const getCurrentTimeInString = () => {
  const date = new Date();
  const hour = date.getHours();
  const minute = getMinuteInTwoDigit(date);
  return `${hour}:${minute}`;
};

export default async function takingClock(timeString, formatterName = "en") {
  const finalTimeString = timeString || getCurrentTimeInString();
  const clockType = getClockTypeFromTimeString(finalTimeString, formatterName);
  if (clockType) {
    const talkingClock = new TalkingClock(clockType);
    return talkingClock.getTimeInWord();
  }
  throw new Error(
    `Time should be format like ${getAllAvailableFormats().join(" or ")}`
  );
}
