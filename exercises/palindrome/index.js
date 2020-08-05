// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

//Solution #1
/*
function palindrome(str) {
    if(str == str.split('').reverse().join('')){
        return true;
    }
    return false;
}
*/

//Solution #2
/*
function palindrome(str){
    for(let i=0;i<(str.length/2);i++){
        if(str[i] != str[str.length - 1 - i]){
            return false;
        }
    }
    return true;
}
*/

//Solution #3
function palindrome(str){
    return str.split('').every((elem, index) => elem == str[str.length - 1 - index]);
}

module.exports = palindrome;
