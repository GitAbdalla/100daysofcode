import {DateTime} from 'luxon'
import * as fs from 'fs'

let data = fs.readFileSync('./data.csv', {encoding: 'utf8', flag: 'r'});
let data_array = data.split('\n');
let new_data = '';

data_array.forEach( line => {
    let ln = line.split(',');

     let full = DateTime.fromFormat(`${ln[4]} ${ln[5]}`, 'MM/dd/yyyy t',{zone: ln[9]});
     let local_datetime = full.setLocale(`${ln[8]}-${ln[6]}`).toLocaleString(DateTime.DATETIME_FULL)
     let october =DateTime.fromFormat('2025-10-01 00:00:00','yyyy-MM-dd hh:mm:ss', {zone: ln[9]})
     
    let diff = october.diff(full,'year');
    let g= ln[1] == 'male' ? 'his' :'her';
    let tm =
`${ln[0]}- ${ln[2]} is born in ${ln[7]} on ${local_datetime}
${g} age in october 2025 will be almost ${Math.round(diff.years)}
${g} contact information: ${ln[3]}
-------
`

new_data+=tm;
} );
try{
    fs.writeFileSync('./newdata.txt',new_data,{encoding:'utf8'})
    console.log("successful")
}
catch(e){
    console.log(e)
}