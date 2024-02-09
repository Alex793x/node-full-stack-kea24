getRandomInt();

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRandomIntAnonymousFunction = function (min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

const getRandomIntArrowFunction = (min, max) => Math.floor(Math.random() * (max - min) + min);


const running = (name) => `${name} is running.`;
const eating = (name) => `${name} is eating.`;
const genericActionPerformer = (name, genericAction) => genericAction(name);

console.log(genericActionPerformer("Alex", running));

const eatingResult = genericActionPerformer("Louis", eating);
console.log(eatingResult);

console.log(genericActionPerformer("Louis", (name) => `${name} is eating.`));