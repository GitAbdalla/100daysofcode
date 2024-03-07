const myEvent = require("events")
const util = require("util")

function personList() {
    this.list = []
    this.add = function (name) {
        this.list.push(name)
        this.emit("NewUserAdded")
    }
    this.display = function () {
        for (let p in this.list) {
            console.log(this.list[p])
        }
    }
}
util.inherits(personList, myEvent)
let p = new personList()
let p1 = new personList()

p.on("NewUserAdded", function () {
    console.log("new user added to pesron list")
})

p.add("ali")
p.add("kareem")
p1.add("ahmed")
p1.add("mahmoud")
p.display()
p1.display