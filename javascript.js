const numbers = [5, 12, 8, 130, 44];
const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
const colors = ["red", "green", "blue", "yellow"];
const ages = [3, 10, 18, 20, 33];
const mixedArray = [1, [2, 3], [4, [5, 6]], 7];

fruits.push("fig");
console.log(fruits);

fruits.pop();
console.log(fruits);

colors.shift();
console.log(colors);

colors.unshift("purple");
console.log(colors);

const doubleNumbers = numbers.map(numbers => numbers * 2);
console.log(doubleNumbers);

const greaterThanTen = numbers.filter(numbers => numbers > 10)
console.log(greaterThanTen);

const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(totalSum);

const firstAdult = ages.find(ages => ages >= 18);
console.log(firstAdult);

const firstEvenIndex = numbers.findIndex(numbers => numbers % 2 === 0);
console.log(firstEvenIndex);

const hasCherry = fruits.includes("cherry");
console.log(hasCherry);

const hasAgeGreaterThan30 = ages.some(age => age > 30);
console.log(hasAgeGreaterThan30);

const allPositive = numbers.every(number => number > 0);
console.log(allPositive);


colors.sort();
console.log(colors);

numbers.sort((a, b) => a - b);
console.log(numbers);

fruits.splice(1, 2);
console.log(fruits);

const combinedArray = fruits.concat(colors);
console.log(combinedArray); 

const firstTwoColors = colors.slice(0, 2);

console.log(firstTwoColors);
console.log(colors);

const flattenedArray = mixedArray.flat(Infinity);
console.log(flattenedArray);
















