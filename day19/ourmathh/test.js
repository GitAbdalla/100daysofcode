/* Test my index */

//const ourMath = require('./index')  -> won't work
 
import * as ourMath from "./index.js"

let average = ourMath.avg(1,2,3,4,5,6,7,8);
console.log(average);

let new_set = ourMath.uniontwosets([1,2,3], [2,3,4]);
console.log(new_set);

let inter_set = ourMath.intersection([1,2,4],[2,3,4]);
console.log(inter_set);

let max_value = ourMath.max(90,123,35);
console.log(max_value);
