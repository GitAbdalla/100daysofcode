const { Console } = require("console")
const Alarm = require("./moduleAlarm")

let alarm1 = new Alarm("WorkAlarm", 3)

alarm1.on("alarmFired", () => {
    console.log("Wake up for Work...")
    alarm1.snooze(2)
})

alarm1.on("snoozeAlarmFired", () => {
    console.log("Please wake...")
    alarm1.stopSnooze()
})