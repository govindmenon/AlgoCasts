// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let startrow = 0;
    let startcol = 0;
    let endrow = n - 1;
    let endcol = n - 1;

    const resultMatrix = [];

    for(let i=0;i<n;i++){
        resultMatrix[i] = [];
    }

    let counter = 1;

    while(startrow <= endrow && startcol <= endcol){
        for(let i=startcol;i<=endcol;i++){
            resultMatrix[startrow][i] = counter;
            counter++;
        }
        startrow++;
        for(let i=startrow;i<=endrow;i++){
            resultMatrix[i][endcol] = counter;
            counter++;
        }
        endcol--;
        for(let i=endcol;i>=startcol;i--){
            resultMatrix[endrow][i] = counter;
            counter++;
        }
        endrow--;
        for(let i=endrow;i>=startrow;i--){
            resultMatrix[i][startcol] = counter;
            counter++;
        }
        startcol++;
    }

    return resultMatrix;
}

module.exports = matrix;
