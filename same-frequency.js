// add whatever parameters you deem necessary

// Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

// Examples:

// sameFrequency(182,281) // true
// sameFrequency(34,14) // false
// sameFrequency(3589578, 5879385) // true
// sameFrequency(22,222) // false


function frequencyCounter(num) {
    strNum = num.toString()
    const frequencyObj = {}
    for (let el of strNum) {
        frequencyObj[el] = frequencyObj[el] + 1 || 1;
    }
    return frequencyObj;
}

function sameFrequency(int1, int2) {
    let int1Frequency = frequencyCounter(int1)
    let int2Frequency = frequencyCounter(int2)
    for (let key in int1Frequency) {
        if (!int2Frequency[key]) return false;
        if (int1Frequency[key] !== int2Frequency[key]) return false;
    }
    return true;
}


module.exports = { sameFrequency, frequencyCounter };