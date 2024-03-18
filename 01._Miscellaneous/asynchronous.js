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


Solution 3. Async/Await
 - Syntactic sugar
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


// function myPromise() {
//     return new Promise((resolve, rejsect) => {
//         setTimeout(() => {
//             const success = true; // condition example
//             success ? resolve("Something good") : rejsect("Something Bad");
//         }, 3000)
//     })
// }

// myPromise
// .then((result) => console.log(result))
// .catch((errorMessage) => console.log(errorMessage));


/**
 * Assignment:
 * Try to simulate the fetch function
 * call it myFetch, it should return the promise json()
 * so that you can call response.json() on it as much as possible try
 * to imagine how fetch works and simulate the underlying code
 * 
 */

// function myFetch(URL, options={}) {
//     return new Promise((resolve, reject) => {
//         resolve ({
//             json: () => new Promise((resolve, response) => {
//                 resolve({data: "It is working"});
//             })
//         })
//     })
// }


function myFetch(URL, options = {}) {
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();

        // Configure it: GET-request for the URL
        xhr.open(options.method || 'GET', URL, true);

        // Set headers if there are any
        if (options.headers) {
            Object.keys(options.headers).forEach(key => {
                xhr.setRequestHeader(key, options.headers[key]);
            });
        }

        // Handle the response
        xhr.onload = () => {
            if (xhr.status >= 200 && xhr.status < 300) {
                // Resolve the promise with the response text
                resolve({
                    json: () => Promise.resolve(JSON.parse(xhr.responseText)),
                    text: () => Promise.resolve(xhr.responseText)
                });
            } else {
                // Reject the promise if we got an error response
                reject(new Error(xhr.statusText));
            }
        };

        // Handle network errors
        xhr.onerror = () => {
            reject(new Error("Network Error"));
        };

        // Send the request
        if (options.body) {
            xhr.send(options.body);
        } else {
            xhr.send();
        }
    });
}



async function main() {
    const myPromiseResult = await myPromise();
}
