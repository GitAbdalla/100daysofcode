const evenEmitter = require("events")
class Alarm extends evenEmitter {
    constructor(name, intervalInSec) {
        super()
        this.name = name
        this.interval = intervalInSec

        setTimeout(() => {
            this.emit("alarmFired")
        }, intervalInSec * 1000);
    }
    snooze(intervalInSec) {
        this.snoozeInterval = setInterval(() => {
            this.emit("snoozeAlarmFired")
        }, intervalInSec * 1000);
    }
    stopSnooze() {
        clearInterval(this.snoozeInterval)
    }
}
module.exports = Alarm