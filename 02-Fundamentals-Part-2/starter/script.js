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
function cutFruit(fruit) {
  return fruit * 4;
}

function fruitProcessor(apples, oranges) {
  const applecut = cutFruit(apples);
  const orangecut = cutFruit(oranges);
  const juice = `Juice with ${applecut} apples Pieces and ${orangecut} oranges Pieces`;
  return juice;
}
console.log(fruitProcessor(2, 3));
