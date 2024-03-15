/*
asynchronous code:
Browser event handlers, network calls, buffers / streams, 
working with files / directories, setTimeout /setInterval, databases

Solution 1. Callbacks
Problem: Callback hell, Pyramid of Doom

Solution 2. Promises
states:
1: pending
2: fulfilled
    - resolved
    - rejected
*/

new Promise((resolve, reject) => {
    setTimeout(() => {
        try {
            throw new Error("some error");
            resolve("Everything OK");
        } catch (error) {
            // console.log(error);
            reject(error);
        }
    }, 2000)
})
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.log(errorMessage));

console.log("I'm walking here");



/**
 * Assignment:
 * Create a promisified function that is,
 * a function that returns a promise, it should either resolve
 * or reject after 3 seconds
 */


function myPromise() {
    return new Promise((resolve, rejsect) => {
        setTimeout(() => {
            const success = true; // condition example
            success ? resolve("Something good") : rejsect("Something Bad");
        }, 3000)
    })
}

myPromise
.then((result) => console.log(result))
.catch((errorMessage) => console.log(errorMessage));


