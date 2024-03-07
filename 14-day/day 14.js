/* V8 engine 
  Strings – UTF-16
  Strings – important functions 
  */
 
let txt2= "call Marley do not call Emily. call Ramzy do not call Magdy";
 
function allIndexOf(str,pattern){
    let index=-1;
for( let i=0; i<str.length; i++){
    index=str.indexOf(pattern,i);
    if (index === -1)break;
    i=index;
    console.log(index);
}
}
allIndexOf(txt2,"do");
allIndexOf(txt2,"call");

console.log(txt2.substring(5,11)); // from index to index
console.log(txt2.substr(5,11)); // index and num of steps

//   let txt="Call Marley do not Call Emiley";

//   console.log(txt.length);
//   console.log(txt.indexOf("Marley"));
//   console.log(txt.lastIndexOf("Call"));
