const markHeigth = 1.69;
const johnHeight = 1.95;
const markWeighs = 78;
const johnWeighs = 92;

/*
 * 1. Calculate bmi for Mark and John (bmi = (mass / height) ** 2)
 * 2. Create a boolean witch store weather Mark has a highter bmi than John
*/

// 1.
const markBmi = markWeighs / markHeigth**2;
const johnBmi = johnWeighs / johnHeight**2;

console.log("Mark's Bmi: " + markBmi + "\nJohn's Bmi: " + johnBmi);

// 2.
const markHighterBmi = markBmi > johnBmi;

console.log("Mark's Bmi are greater than John's Bmi? : " + markHighterBmi);