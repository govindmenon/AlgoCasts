// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
    for(let i=0;i<arr.length-1;i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}

function selectionSort(arr) {
    for(let i=0;i<arr.length-1;i++){
        let min_index = i;
        for(let j=i+1; j< arr.length;j++){
            if(arr[min_index] > arr[j]){
                min_index = j;
            }
        }

        if(min_index != i){
            let temp = arr[i];
            arr[i] = arr[min_index];
            arr[min_index] = temp;
        }
    }
    return arr;
}

function mergeSort(arr) {
    if(arr.length == 1){
        return arr;
    }

    const centre = Math.floor(arr.length/2);
    return merge(mergeSort(arr.slice(0,centre)), mergeSort(arr.slice(centre)));
}

function merge(left, right) {
    const result = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift());
        } else {
            result.push(right.shift());
        }
    }
    return [...result,...left,...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };
