// add whatever parameters you deem necessary

// Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given; otherwise, it should return false.

// Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

// Constraints:

// Time Complexity: O(M + N) - If M is the length of message and N is the length of letters:

// Examples:

// constructNote('aa', 'abc') // false
// constructNote('abc', 'dcba') // true
// constructNote('aabbcc', 'bcabcaddff') // true

function frequencyCounter(str){
    const frequencies = {}
    for (let char of str) {
        frequencies[char] = frequencies[char] + 1 || 1;
    }
    return frequencies;
}


function constructNote(msg, letters) {
    // if message is empty string return true
    if (msg === "") return true;
    // length of letters must be equal or greater than length of message
    if (letters.length < msg.length) return false;

    // make frequency counters for each string
    const msgFrequency = frequencyCounter(msg);
    const lettersFrequency = frequencyCounter(letters);

    // loop through counters to check for matching frequencies
	for (let key in msgFrequency) {
		// if the key is not in the message counter return false
		if (!lettersFrequency[key]) return false;
		// if there is a lower frequency of each letter in the letters string, return false
		if (lettersFrequency[key] < msgFrequency[key]) return false;
	}
    return true;
}
module.exports = { constructNote, frequencyCounter }
