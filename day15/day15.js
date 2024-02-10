/*  Strings – important functions – part 02 */

let txt= "call Marley do not call Emily. call Ramzy do not call Magdy";

console.log(txt.replace("Marley","metwally"));
console.log(txt.replace("Mohamed","metwally")); // if not found same txt
console.log(txt.replace(" ","-")); // only first space
console.log(txt.replace(/\s/g,"-")); // regular expression


console.log(txt.split("do"));
console.log(txt);
console.log(txt.toUpperCase());       /* important note : all changes in txt is new copy of the original txt until we change the original 

like: txt=txt.replace(/\s/g,"-"));  */

console.log(txt.toLowerCase());

console.log(txt.startsWith("call"));
console.log(txt.startsWith("do"));

let txt2="    call marley   ";
console.log(txt2.trim());
console.log(txt2.trimStart());
console.log(txt2.trimEnd());

