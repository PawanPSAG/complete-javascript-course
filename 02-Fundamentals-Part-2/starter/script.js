// //Let, Var, const

// //Functions declaration
// function calAge(birthyear) {
//   const age = 2037 - birthyear;
//   return age;
// }

// //function expression
// const calAge1 = function (birthyear) {
//   const age = 2037 - birthyear;
//   return age;
// };

// //Note: we can call function declaration before defining
// //it but no function expression

// //Arrow function
// const calAge3 = (birthyear) => 2037 - birthyear;

// console.log(calAge3(1990));

// const retirementAge = (birthYear) => {
//   const age = 2023 - birthYear;
//   const retirement = 65 - age;
//   return retirement;
// };

// console.log(retirementAge(1990));

//function calling other function
// function cutFruit(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//   const applecut = cutFruit(apples);
//   const orangecut = cutFruit(oranges);
//   const juice = `Juice with ${applecut} apples Pieces and ${orangecut} oranges Pieces`;
//   return juice;
// }
// console.log(fruitProcessor(2, 3));
// const calAge = function (birthyear) {
//   return 2023 - birthyear;
// };
// const retirementAge = function (birthyear, name) {
//   const calAge1 = calAge(birthyear);

//   const retirement = 65 - calAge1;

//   return retirement > 0
//     ? `${name} retires in ${retirement}`
//     : `${name} already retired`;
// };

// console.log(retirementAge(1990, "Pawan"));
// console.log(retirementAge(1956, "Kaptan"));
//Array in Java Script
console.log("Array in Java Script");

const friends = ["Pawan", "Peter", "John", "Mike"];
// console.log(friends);

// const years = new Array(1990, 1992, 1997, 1994);
// console.log(years);
// console.log(friends[0]);
// console.log(friends[friends.length - 1]);

// friends[2] = "Mayank";
// console.log(friends);

// const firstName = "Pawan";
// const lastName = "Kumar";
// const data = [
//   firstName,
//   lastName,
//   2023 - 1990,
//   "developer",
//   friends,
//   ["Harsi", "Soru"],
// ];//console.log(data);
// friends.unshift("Jaya");
// console.log(friends);
// friends.shift();
// console.log(friends);
// friends.pop();
// console.log(friends);
// console.log(friends.indexOf("Pawan"));
// console.log(friends.includes("Pawan"));
// console.log(friends.includes("Maya"));

//Objects
console.log(Objects in Javascript);
