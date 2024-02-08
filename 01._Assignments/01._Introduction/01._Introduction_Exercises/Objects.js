// --------------------------------------
// Objects
// --------------------------------------
// Exercise 1 - Retrieve value from object by key

const myObject = { message: "Hello, earthling! I bring peace." };
const messageOfObject = myObject.message;
console.log(messageOfObject);

// Log the message 

// --------------------------------------
// Exercise 2 - Defining an object. 

// Create an object that has your name and age. 
const newObject = {
    name: "Alex",
    age: 30
}

console.log(newObject)

// --------------------------------------
// Exercise 3 - Add a key-value pair 

const stackOverflow = {};

// make a rule called isAllowed and let the value be true
stackOverflow.isAllowed = true;

console.log(stackOverflow)
// --------------------------------------
// Exercise 4 - Remove a property 

const thisSong = { description: "The best song in the world." };

// remove the property "description" and add a property called "about" that should say "Just a tribute." 
delete thisSong.description;
thisSong.about = "Just a tribute";

console.log(thisSong)


// --------------------------------------

