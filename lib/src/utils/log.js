/* eslint-disable no-console */
export const log = (color, text) => {
  console.log(color, text);
};

export const errorLog = (text) => {
  log("\x1b[31m%s\x1b[0m", text);
};

export const resultLog = (text) => {
  log("\x1b[32m%s\x1b[0m", text);
};
