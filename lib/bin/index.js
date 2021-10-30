#!/usr/bin/env node
/* eslint-disable import/no-extraneous-dependencies */
import talkingClock from "../src";
import { errorLog, resultLog } from "../src/utils/log";

const talk = async (timeInput) => {
    const date = new Date();
    const hour = date.getHours()
    const minute = (date.getMinutes() < 10 ? "0" : "") + date.getMinutes()
    const time = timeInput || `${hour}:${minute}`
    return talkingClock(time)
}
const main = async () => {
    const args = process.argv.slice(2)
    try{
        resultLog(await talk(args[0]))
    } catch(err) {
        errorLog(`Error: ${err.message}`)
    }
}
main();