// add whatever parameters you deem necessary

// Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair of values in the array where the average of the pair equals the target average. There may be more than one pair that matches the average target.

// Constraints:

// Time Complexity: O(N)

// Examples:

// averagePair([1, 2, 3], 2.5); // true
// averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8); // true
// averagePair([-1, 0, 3, 4, 5, 6], 4.1); // false
// averagePair([], 4); // false


function averagePair(sortedArray, targetAvg) {
    let left = 0
    let right = sortedArray.length - 1

    // while left is smaller than right - we haven't yet visited all values
    while (left < right) {
        // check average of values at left and right
        let checkAvg = (sortedArray[left] + sortedArray[right]) / 2
        // if average of values at pointer left and pointer right is target, then return true
        if (checkAvg === targetAvg) return true;
        // if check average is HIGHER than target average, move right pointer down
        else if (checkAvg > targetAvg) {
            right --;
        }
        // otherwise if too low move the left pointer up
        else {
            left ++;
        }
    }
    return false;
}

module.exports = averagePair;