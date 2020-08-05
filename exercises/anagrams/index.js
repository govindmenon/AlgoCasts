// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

//Solution #1
/*
function anagrams(stringA, stringB) {
    const charMapA = buildCharMap(stringA.replace(/[^A-Za-z]/g,"").toLowerCase());
    const charMapB = buildCharMap(stringB.replace(/[^A-Za-z]/g,"").toLowerCase());

    if(Object.keys(charMapA).length != Object.keys(charMapB).length){
        return false;
    }

    for(let char in charMapA){
        if(charMapA[char] != charMapB[char]){
            return false;
        }
    }

    return true;
}


function buildCharMap(str){
    const charMap = {};
    for(let char of str){
        charMap[char] = charMap[char] + 1 || 1;
    }
    return charMap;
}
*/

function anagrams(stringA, stringB) {
    if(cleanSortString(stringA) == cleanSortString(stringB)){
        return true;
    }
    return false;
}

function cleanSortString(str){
    return str.replace(/[^\w]/g,"").toLowerCase().split('').sort().join('');
}

module.exports = anagrams;
