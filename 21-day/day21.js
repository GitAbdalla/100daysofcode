// luxon module

import {DateTime} from "luxon";

 let now = DateTime.now();

// now = now.set({year:2025});
// // now = now.set({month:12});
// now = now.set({day:29});
// now = now.plus({month:12});

// console.log(now.toISO());

let end = DateTime.fromISO('2024-05-14');
let start = DateTime.fromISO('2024-10-14');

console.log(start.hasSame(end,'year'));

let d = new Date();
console.log(d.toISOString().replace('T'," ").replace('Z','')); // without modules




// const now = DateTime.now();
// console.log(now.toString());
// console.log(now.year);
// console.log(now.month);
// console.log(now.day);
// console.log(now.zoneName);

// console.log(now.toISO());
// console.log(now.toISODate());
// console.log(now.toISOTime());

// console.log(now.toLocaleString(DateTime.DATETIME_HUGE_WITH_SECONDS));
// console.log(now.toLocaleString(DateTime.DATE_FULL));

