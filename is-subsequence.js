// add whatever parameters you deem necessary

// isSubsequence
// Write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. In other words, the function should check whether the characters in the first string appear somewhere in the second string, without their order changing.

// Examples:

// isSubsequence('hello', 'hello world'); // true
// isSubsequence('sing', 'sting'); // true
// isSubsequence('abc', 'abracadabra'); // true
// isSubsequence('abc', 'acb'); // false (order matters)
// Constraints:

// Time Complexity - O(N + M)


function isSubsequence(str1, str2) {
    let pointer = 0
    let subSequence = ""
    for (let char of str2) {
        if (char === str1[pointer]) {
            subSequence = subSequence + char
            pointer++
        }
    }
    if (subSequence === str1) return true
    else return false
}


module.exports = isSubsequence;