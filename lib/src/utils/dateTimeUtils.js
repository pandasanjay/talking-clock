export const getMinuteInTwoDigit = (date) =>
  (date.getMinutes() < 10 ? "0" : "") + date.getMinutes();
