#!/usr/bin/env node
import talkingClock from "talking-clock";

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
        console.log(await talk(args[0]))
    } catch(err) {
        console.error(`Error: ${err.message}`)
    }
}
main();