'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  orderDelivery: function (obj) {
    console.log(obj);
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(`Your Pizaa with ${mainIng} ${otherIng} Ingrident`);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  addess: 'B1, 2005, Ajnara',
  mainIndex: 2,
  starterIndex: 2,
});

restaurant.orderPizza('Masroom', 'Onion', 'olives');
restaurant.orderPizza('Masroom');

// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// console.log(restaurantName, hours, tags);

// const { menu = [], starterMenu: starter = [] } = restaurant;
// console.log(menu, starter);

// //mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// //nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(open, close);

// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[3];

// const [e, f, g] = arr;
// console.log(e, f, g);
// console.log(arr);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //switching variables
// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //nested array destructures
// const nested = [2, 3, [4, 5]];
// const [i, , j] = nested;
// console.log(i, j);
// const [k, l] = j;
// console.log(k, l);

// //default values
// const [p = 1, q = 1, w = 1] = [8, 9];
// console.log(p, q, w);

//Spread Operator
// const arr = [7, 8, 9];
// const badArr = [1, 2, arr[0], arr[1], arr[2]];

// const newArr = [1, 2, ...arr];
// console.log(badArr);
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// //copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //join 2 array
// const menu1 = [...restaurant.starterMenu, ...restaurant.mainMenu];
// console.log(menu1);

// const str = 'Pawan';
// console.log(...str);

// const ingredients = [
// prompt("Let's make pasta ingredient 1"),
// prompt("Let's make pasta ingredient 2"),
// prompt("Let's make pasta ingredient 3"),
// ];

// restaurant.orderPasta(...ingredients);

// const newRestaurant = { ...restaurant, founder: 'Pawan Kumar', foundIn: 1999 };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Rista Rent';
// console.log(restaurantCopy);

//Rest Pattern and Parameters
// const [a, b, ...other] = [1, 2, 3, 4, 5];
// console.log(a, b, other);

// const { sat, ...otherdays } = restaurant.openingHours;
// console.log(sat, otherdays);

// const add = function (...numbers) {
//   let sum = 0;

//   for (var i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(numbers);
//   console.log(sum);
// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 6];
// add(...x);
// const [, Pizzeria, , Organic, ...otherCat] = [
//   ...restaurant.categories,
//   ...restaurant.categories,
// ];
// console.log(Organic, Pizzeria, otherCat);

//logical operator
console.log(3 || 'Jones');

console.log('jones' && 23 && 'pawan');

if (restaurant.orderPizza) {
  restaurant.orderPizza('Spinach', 'mushrooms');
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

restaurant.numGuest = 0;

const g1 = restaurant.numGuest || 10;
const g2 = restaurant.numGuest ?? 10;
console.log(`Guest 1 = ${g1} Guest 2 = ${g2}`);

const rest1 = {
  name: 'Capri',
  numofguest: 20,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Pawan Kumar',
};

rest1.numerOfGuest = rest2.numofguest || 10;
rest2.numerOfGuest = rest2.numofguest || 10;
console.log(rest1.numofguest);
console.log(rest2.numerOfGuest);

//for of loop
for (const item of menu) console.log(item);
