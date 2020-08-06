// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

//Solution #1
/*
function fib(n) {
    let result = [0,1]; 

    for(let i=2;i<=n;i++){
        result[i] = result[i-2] + result[i-1];
    }

    return result[n];
}
*/

//Solution #2
/*
function fib(n) {
    if(n<=1){
        return n;
    }

    return fib(n-1) + fib(n-2);
}
*/

//Solution #3

function fib(n, map = {0:0,1:1}) {
    if(map[n]){
        return map[n];
    }

    if(map[n-2] === undefined){
        map[n-2] = fib(n-2, map);
    }

    if(map[n-1] === undefined){
        map[n-1] = fib(n-1, map);
    }

    map[n] = map[n-2] + map[n-1];
    return map[n];
}


module.exports = fib;
