/*
Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement
*/

const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;

let markBMI = markMass / markHeight ** 2;
let johnBMI = johnMass / johnHeight ** 2;
let markHigherBMI = markBMI > johnBMI;
console.log("Mark BMI " + markBMI);
console.log("Mark BMI " + johnBMI);
console.log("markHigherBMI " + markHigherBMI);

if (markHigherBMI) {
  console.log(
    `Mark's BMI${markBMI} is higher than John's!" or "John's${johnBMI} BMI is higher than Mark's!`
  );
} else {
  console.log(
    `John's BMI${johnBMI} is higher than John's!" or "Mark's${markBMI} BMI is higher than Mark's!`
  );
}
