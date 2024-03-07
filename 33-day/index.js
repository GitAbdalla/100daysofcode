const fs = require('fs');

const filePath = "G:\\node.js\\100daysofcode-1\\day33\\read.txt";

console.log("Start Reading...");
let data = fs.readFileSync(filePath);
console.log("Data: " + data);
console.log("Read Ended...");
