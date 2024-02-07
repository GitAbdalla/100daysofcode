/* Test my index */

const ourMath = require('./index')

let average =ourMath.avg(1,2,3,4,5,6,7,8);
console.log(average);

let new_set=ourMath.uniontwosets([1,2,3], [2,3,4]);
console.log(new_set);