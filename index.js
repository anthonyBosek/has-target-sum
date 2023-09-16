function hasTargetSum(array, target) {
  let rounds = array.length - 1;
  for (let i = 0; i < rounds; i++) {
    const [num1, ...rest] = array;
    for (let j = 0; j < rest.length; j++) {
      if (num1 + rest[j] === target) {
        return true;
      }
    }
    array.shift();
  }
  return false;
}

/*
  Flatiron lesson crazy refactor solution!!! 

  function hasTargetSum(array, target) {
    const seenNumbers = new Set();
    for (const number of array) {
      const complement = target - number;
      if (seenNumbers.has(complement)) return true;
      seenNumbers.add(number);
    }
    return false;
  }
  
*/

/* 
  Write the Big O time complexity of your function here:

  O(n²) - Quadratic
    • Nested for-loops/iterators

*/

/* 
  Add your pseudocode here:

  **rounds = array length as constant for number of iterations
  1. loop through origional array
  2. destructure first value from the rest of the values
  3. loop through the rest
  4. check if first value + rest[i] value === target
  5. if yes return true
  6. goto next rest value
  7. if first value + any rest value !== target, shift first value
  8. repeat steps 1-7
  9. if no combination of num1 + num2 === target, return false

*/

/*
  Add written explanation of your solution here:

  I used the first loop to capture a num1 value, the second loop was
  used to iterate through the rest of the array to get num2 values.
  The if statement checks if num1 + num2 is equal to target, if true -
  the return stops the iterations and returns true to validate the solution.
  Each iteration of the first for loop allows to start at a new value for num1
  and repeat this process. If the loop gets to the end with no solution, it
  returns false to resolve the algorithm.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 8, 0], 18));

  // console.log("");

  // console.log("Expecting: true");
  // console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  // console.log("");

  // console.log("Expecting: false");
  // console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
