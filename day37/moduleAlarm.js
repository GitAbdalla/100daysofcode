const evenEmitter = require("events")
class Alarm extends evenEmitter{
    constructor(name,intervalInSec){
        super()
        this.name=name
        this.interval=intervalInSec

        setTimeout(() => {
            this.emit("alarmFired")
        }, intervalInSec *1000);
    }
}
module.exports = Alarm