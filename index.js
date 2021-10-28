import talkingClock from "./lib";

const main = async () => {
    const date =  new Date();
    const hour = date.getHours()
    const minute = date.getMinutes()
    console.log(`${hour}:${minute}`)
    console.log(await talkingClock(`${hour}:${minute}`))
}
main();