// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";
const result = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(result)

// add those two numbers and show the result
// you cannot touch line 1 neither line 2


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.10";
const anotherNumberTwo = "2.30";

// make it keep two decimals
const anotherResult = parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)
const anotherResult2 = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2)

console.log(anotherResult.toFixed(2))
console.log(anotherResult2)


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals
const avg = (one + two + three) / 3;
console.log(avg)





// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
const character = letters.charAt(2);
const character2 = letters.substring(2,3);
const character3 = letters.replace("ab","");
const character4 = letters[2];

 console.log(character);
 console.log(character2);
 console.log(character3);
 console.log(character4);





// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";

// capitalize the J in Javascript
const newFact = fact.replace("j", "J");
const newFact2 = fact.charAt(0).toUpperCase().concat(fact.slice(1));
const newFact3 = fact.substring(0, 1).toUpperCase().concat(fact.slice(1));
const newFact4 = fact[0].toUpperCase().concat(fact.slice(1));

console.log(newFact)
console.log(newFact2)
console.log(newFact3)
console.log(newFact4)


// --------------------------------------


