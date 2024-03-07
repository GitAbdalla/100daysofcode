const { Console } = require("console")
const  Alarm = require("./moduleAlarm")

let alarm1 = new Alarm("WorkAlarm",20)

alarm1.on("alarmFired",() =>{
    console.log("Wake up for Work...")
})