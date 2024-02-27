/* Selection Sort
   Time Complexity: O(n^2)
*/
function findsmallest(arr){
    let smallest = arr[0] ;
    let smallest_index = 0;
    for(let i=0 ; i<arr.length(); i++){
        if (arr[i] < smallest){
            smallest=arr[i];
            smallest_index=i;
        }
    }
    return smallest_index;
}
function selectionSort(arr){
    newArr=[]
    for(let i = 0; i< arr.length(); i++){
        smallest=findsmallest(arr);
        newArr.append(arr.pop(smallest))
 return newArr

    }
}
console.log( selectionSort[5, 3, 6, 2, 10])