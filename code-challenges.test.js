// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided. 
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray

const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]


describe("removeShuffle", () => {
  it(`Takes in an array, removes the first item from the array and shuffles the remaining content.`, () => {
    const colors1 = ["purple", "blue", "green", "yellow", "pink"];
    const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"];

    expect(removeShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]));
    expect(removeShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre",]));
  });
});

// Test Suites: 1 failed 
// ReferenceError: removeShuffle is not defined. This is considered a good fail.


// b) Create the function that makes the test pass.

// PSEUDOCODE:

// Use the .shift() method to remove the first value from the array.
// Use a for loop to loop through through the elements beginning with the last element and working backwards from there.
// Utilize the Math.Floor and Math.Random methods to create and store a random index that won't be higher than current index.
// Use a temporary array to store the value of current index and switch the values.
// Return the new shuffled array.

const removeShuffle = (arr) => {
  arr.shift();
  for (let i = arr.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    const temp = arr[i];
    arr[i] = arr[r];
    arr[r] = temp;
  }
  return arr;
};



// // --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the net total of votes.

// // a) Create a test with expect statements for each of the variables provided.

const votes1 = { upVotes: 13, downVotes: 2 }
// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }
// Expected output: -31

describe("netVotes", () => {
  it(`Takes in an object that contains up votes and down votes and returns the net total of votes.`, () => {
    const votes1 = { upVotes: 13, downVotes: 2 };
    const votes2 = { upVotes: 2, downVotes: 33 };

    expect(netVotes(votes1)).toEqual(11);
    expect(netVotes(votes2)).toEqual(-31);
  });
});

// // Test Suites: 2 failed
// // ReferenceError: netVotes is not defined. This is considered a good fail.

// // b) Create the function that makes the test pass.

// // PSEUDOCODE:
// // Using dot notation create a temporary array to store the values using Object.values.
// // Next, using bracket notation access the array data, and remove the first value from the second to get the value of the net total.
// // Return value of net total.

const netVotes = (obj) => {
  let tempArr = Object.values(obj);
  return tempArr[0] - tempArr[1];
};



// // --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// // a) Create a test with an expect statement using the variables provided.

const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]


describe("delDup", () => {
  it(`Takes in two arrays as arguments and returns one array with no duplicate values.`, () => {
    const dataArray1 = ["array", "object", "number", "string", "Boolean"];
    const dataArray2 = ["string", "null", "Boolean", "string", "undefined"];

    expect(delDup(dataArray1, dataArray2)).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined",]);
  });
});

// // Test Suites: 2 failed, delDup is not defined. This is considered a good fail.



// // b) Create the function that makes the test pass.


// // PSEUDOCODE:
// // I'll use a spread operator and the Set object although there are other ways to render the same result.
// // Set object can't have duplicate values so I will use the spread operator which will turn the Set Object into an array.


const delDupe = (arr1, arr2) => {
  return [...new Set([...arr1, ...arr2])];
};