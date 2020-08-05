// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

//Solution #1
/*
function reverseInt(n) {
    let revNum = 0;
    while(n != 0){
        revNum = revNum*10 + n%10;
        n = parseInt(n/10);
    }
    return revNum;
}
*/

//Solution #2
function reverseInt(n){
    return Math.sign(n) * parseInt(n.toString().split('').reverse().join(''));
}

module.exports = reverseInt;
