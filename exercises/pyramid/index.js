// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

//Solution #1
function pyramid(n) {
    const total = n*2 - 1;

    for(let i=0;i<n;i++){
        let nHash = (i+1)*2 - 1;
        let nSpace = total - nHash;

        console.log(" ".repeat(nSpace/2)+"#".repeat(nHash)+" ".repeat(nSpace/2));
    }
}

module.exports = pyramid;
