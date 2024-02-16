/* create my first module */

export function avg(...nums){
    let result=0;
    for(let i=0; i < nums.length; i++){
        result += nums[i];
    }
    result /= nums.length;
    return result;
}

export function uniontwosets(first_set,second_set){
    let new_set=[];
    for(let i=0; i < first_set.length; i++){
        new_set.push(first_set[i]);
    }
    for(let i=0; i<second_set.length; i++){
        if(new_set.includes(second_set[i])){
            continue;
        }
        new_set.push(second_set[i]);
    }
    return new_set;
}

export function intersection(first_set, second_set){
    let new_set=[];
    for(let i=0; i<first_set.length; i++){
        if (second_set.includes(first_set[i])){
            new_set.push(first_set[i]);
        }
    }
    return new_set;

}

export function max(...nums){
    let max= Number.NEGATIVE_INFINITY;
    for(let i=0; i<nums.length; i++){
        if(nums[i] > max){
            max = nums[i];
        }
    }
    return max;
}