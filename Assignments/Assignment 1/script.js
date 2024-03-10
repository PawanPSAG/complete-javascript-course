/*
Values and Variables
Declare variables called country, continent and population and assign their 
values according to your own country (population in millions).

Log their values to the console.
*/

const country = "India",
  continent = "Asia",
  population = 1400000000;
console.log(
  `country ${country} continent ${continent} population ${population}`
);

/*
Data Types
Declare a variable called isIsland and set its value according to your country. 
The variable should hold a Boolean value. Also declare a variable language, 
but don't assign it any value yet.

Log the types of isIsland, population, country and language to the console.
*/

var isIsland = true;
let language;
console.log(
  `country ${typeof country} isIsland ${typeof isIsland} language ${typeof language}`
);

/*
let, const and var
Set the value of language to the language spoken where you live 
(some countries have multiple languages, but just choose one).

Think about which variables should be const variables (which values will never 
    change, and which might change?). Then, change these variables to const.

Try to change one of the changed variables now, and observe what happens.
*/

isIsland = true;
language = "Hindi";

/*
Basic Operators﻿
If your country split in half, and each half would contain half the population, 
then how many people would live in each half?

Increase the population of your country by 1 and log the result to the console.

Finland has a population of 6 million. Does your country have more people than 
Finland?

The average population of a country is 33 million people. Does you country have 
less people than the average country?

Based on the variables you created, create a new variable description which contains 
a string with this format: 'Portugal is in Europe, and its 11 million people speak 
portuguese'.
*/

let populationOfEachCountry = population / 2;
console.log("populationOfEachCountry : ", populationOfEachCountry);

populationOfEachCountry += 1;
console.log("populationOfEachCountry : ", populationOfEachCountry);

const finlandPopulation = 60000000;
const avgPopulation = 33000000;

console.log(
  `Does your country have more people than Finland?  Finland Population : ${finlandPopulation} :${
    populationOfEachCountry < finlandPopulation ? true : false
  }`
);

console.log(
  `Does you country have 
    less people than the average country?  average population : ${avgPopulation} : ${
    populationOfEachCountry < avgPopulation ? true : false
  }`
);

/*
Strings and Template Literals
Recreate the description variable from the last assignment, 
this time using the template literal syntax.
*/

let description = `${country} is in ${continent}, and its 1.4 Billion people speak ${language}`;
console.log(description);

/*
Taking Decisions: if / else Statements
If your country's population is greater than 33 million, log a string like this to 
the console: "Portugal's population is 22 million below average" (the 22 is the 
    average of 33 minus the country's population).

After checking the result, change the population temporarily to 13 and then to 130. 
See the different results, and set the population back to original.
*/
