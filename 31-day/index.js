// – Asynchronous – Flow Control Patterns .. 


// in series neested callbacks
let fs = require('fs');
fs.readFile('./01.txt', { encoding: 'utf-8' }, function (err, data) {
    let data_01 = "--" + data + "--";
    fs.writeFile('./new_01.txt', data_01, function (err) {
        fs.readFile('./02.txt', { encoding: 'utf-8' }, function (err, data) {
            let data_02 = "--" + data + "--";
            fs.writeFile('.//new_02.txt', data_02, function (err) {
                console.log('new_02.txt created.');
            })
        })
    })
})