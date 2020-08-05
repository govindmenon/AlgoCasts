// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

//Solution #1
/*
function chunk(array, size) {
    const resultArr = [];
    let tempArr = [];
    for(let i=0;i<array.length;i++){
        tempArr.push(array[i]);
        if((i+1)%size == 0){
            resultArr.push(tempArr);
            tempArr = [];
        }
    }
    if(tempArr.length > 0){
        resultArr.push(tempArr);
    }

    return resultArr;
}
*/

//Solution #2
/*
function chunk(array, size) {
    const resultArr = [];

    for(let element of array){
        let lastElement = resultArr[resultArr.length - 1];
        if(!lastElement || lastElement.length == size){
            resultArr.push([element]);
        }else{
            lastElement.push(element);
        }
    }

    return resultArr;
}
*/

//Solution #3
function chunk(array, size) {
    const resultArr = [];
    let index = 0;

    while(index < array.length){
        resultArr.push(array.slice(index,index+size));
        index += size;
    }

    return resultArr;
}

module.exports = chunk;
