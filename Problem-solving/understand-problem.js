// Problem 1:
/* We work for a company building a smart home thermometer. Our most recent task is this:
   "Given an array of temperatures of one day, calculate the temperature amplitude.
   Keep in mind that sometimes there might be a sensor error."
*/

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what do do?

// 2. Breaking up into sub problem
// -1. How to ignore errors?
// -2. Find max value in temp array
// -3. Find min value in temp array
// -4. Substract min from max (amplitude) and return it

const calcTempAmplitude = (tempArray) => {
    // 2.2
    let maxTempValue = tempArray[0];
    // 2.3
    let minTempValue = tempArray[0];

    tempArray.forEach(element => {
        // 2.1
        if (typeof element != 'number') {
            continue; // non andrà sotto, bensi ricomincera da sopra con il prossimo elemento dell'array
        }
        // 2.2
        if (maxTempValue < element) {
            maxTempValue = element;
        }
        // 2.3
        if (minTempValue > element) {
            minTempValue = element;
        }
    });
    // 2.4
    return maxTempValue - minTempValue;
}

console.log(calcTempAmplitude(temperatures));

// Problem 2:
// Function should now receive 2 arrays of temperature

// 1. Understanding the problem
// - With 2 arrays, we need to implement function twice? Answer: No, just merge 2 arrays

// 2. Breaking up into sub problem
// -1. How to merge 2 array?

const calcTempAmplitude = (tempArray1, tempArray2) => {
    const temperatures = tempArray1.concat(tempArray2);
    // 2.2
    let maxTempValue = tempArray[0];
    // 2.3
    let minTempValue = tempArray[0];

    temperatures.forEach(element => {
        // 2.1
        if (typeof element != 'number') {
            continue; // non andrà sotto, bensi ricomincera da sopra con il prossimo elemento dell'array
        }
        // 2.2
        if (maxTempValue < element) {
            maxTempValue = element;
        }
        // 2.3
        if (minTempValue > element) {
            minTempValue = element;
        }
    });
    // 2.4
    return maxTempValue - minTempValue;
}


console.log(calcTempAmplitude(temperatures, [1, -2, 4, 8, 2, -7]));