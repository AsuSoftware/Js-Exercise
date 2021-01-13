/*
 * Given an array of forecasted maximum temperatures, the thermometer displays a string with these temperatures.
   Example: [17, 21, 23] will print "... 17°C in 1 days, .. 21°C in 2 days ... 23°C in 3 days ..."
   
   Create a function 'printForecast' wich takes in an array 'arr' and logs a string like the above to the console.
   Use the problem solving framework: Understand the problem and break it up into sub-problems!

   TEST DATA 1: [17, 21, 23]
   TEST DATA 2: [12, 5, -5, 0, 4]
*/

// 1. Understanding the problem
// - What is forecast maximum temperatures? Answer: Is a prevision of maximum temperature for the current day
// - If the input isn't an array?
// - If in that array have an error? Maybe for the broken senzor?
// - If in that array are a string?
// - How to know what number of day are for that particular value from array?


// 2. Breaking up into sub problem
// -1. Find if the input is an array
// -2. Skip error if is present in array
// -3. Convert string in number if the type of value from array are string
// -4. Count the number of days
// -5. Return the string message with result

testData1 = [17, 21, 23];
testData2 = [12, 5, -5, 0, 4];

const printForecast = (collectionOfTemp) => {
    if (Array.isArray(collectionOfTemp)) {
        let numberOfDays = 0;
        let message = '';

        collectionOfTemp.forEach(element => {
            if (typeof element == 'number') {
              numberOfDays++;
              message += `${element}°C in ${numberOfDays} days${(collectionOfTemp[collectionOfTemp.length-1] == element ? '.' : ', ')}`;
            }
        });
        return message;
    } else {
        return 'Sorry but the input values are not in the format that we expected!';
    }
}

console.log("First test: " + printForecast(testData1));
console.log("Second test: " + printForecast(testData2));