//recursion

let arr =[
    [1,2,3,4],
    5,
    6,
    [7,8,9],
    10,
    11,
    [12,13,14,15]
];

let data = "";
function process_array(ar){
    if (Array.isArray(ar)){
        ar.forEach( (e) =>{
            process_array(e);
        }); 
    }else{
        data = data + ","+ ar;
    }
}
process_array(arr);
console.log(data);