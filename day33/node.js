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