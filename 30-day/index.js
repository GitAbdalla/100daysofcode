// Async and Sync 
console.log("1");// run first

Promise.resolve().then(function(){console.warn("promise")}); //fifth

process.nextTick(function(){console.warn("newtick1")}); // third

for(let i =1; i <=100; i++){
    console.log(i);             // run second
}

process.nextTick(function(){console.warn("newtick2")}); // fourth