function factorial(num){
    if (num <= 2) return num;

    let fact=1;
    for(let i = 2 ;i <= num; i++){
        fact*=i;
    }
    return fact;
}
function circleArea(radius){
    return 3.14 * radius ** 2;

}
exports.fact = factorial;
module.exports.circleArea=circleArea;