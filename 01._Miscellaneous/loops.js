// Different loops methods
// forEach, find, map, filter, reduce, sort, find


/**
 * ForEach sikre ikke referencial transparency 
 */

console.log("Hello are you there?")

const dogs = [
    {name: "Lassie", fameLevel: 13},
    {name: "Frida", fameLevel: 9},
    {name: "Beethoven", fameLevel: 8},
    {name: "Hachico", fameLevel: 18},
    {name: "Balto", fameLevel: 5},
];

const increasedPublicityDogs = dogs.map(dog => dog.fameLevel += 3);
const isDogsMales = dogs.map(dog => ({...dog, isMale: dog.name === "Lassie"}));

console.log(isDogsMales)

// const numbers = [1, 2, 3, 4, 5];

// const doubleNumbers = numbers.map(num => num * 2);
// console.log(numbers)
// console.log(doubleNumbers)