#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
import talkingClock from "../src";
import { errorLog, resultLog } from "../src/utils/log";

const main = async () => {
  const args = process.argv.slice(2);
  const timeInput = args[0];
  try {
    resultLog(await talkingClock(timeInput));
  } catch (err) {
    errorLog(`Error: ${err.message}`);
  }
};
main();
