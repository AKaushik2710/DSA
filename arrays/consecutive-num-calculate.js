// app.js
const readline = require('readline');

// Your function
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let counter = 0;
    let maxCounter = 0;
    for (let x of nums) {
        if (x === 1) {
            counter++;
            maxCounter = maxCounter < counter ? counter : maxCounter;
        } else {
            counter = 0;
        }
    }
    return maxCounter;
};

// Setup readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Ask for input
rl.question("Enter an array of 0s and 1s (e.g., 1,1,0,1,1,1)\n ", (input) => {
  // Convert string input to array of numbers
  const nums = input.split(',').map(Number);
  
  // Call your function
  const result = findMaxConsecutiveOnes(nums);
  console.log("Maximum consecutive 1s:", result);

  rl.close();
});

