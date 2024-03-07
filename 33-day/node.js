// Sync

const second = () => {
    console.log("How are you doing")
}

const first = () => {

    console.log("Hey there")
    second()
    console.log("The end")
}


first()

console.log("-------------")
// Async
const third = () => {
    setTimeout(() =>{
        console.log("Async hey there")
    },2000)
}
const fourth = () => {

    console.log("Hey there")
    third()
    console.log("The end")
}
fourth()