import { fakerEN_IN } from "@faker-js/faker"



/**
 * 
 * @param {number} numberOfMatches 
 */
export default async function getMatches(numberOfMatches = 10) {
    const promises = [];
    for (let i = 0; i < numberOfMatches; i++) {
        const promise = fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.json());
        promises.push(promise);
    }

    const results = await Promise.all(promises);
    const matches = results.map((match) => ({...match, ...getIndiaProfile()}));
    return matches;

}


function getIndiaProfile() {
    return {
        firstName: fakerEN_IN.person.firstName(),
        lastName: fakerEN_IN.person.lastName(),
        bio: fakerEN_IN.person.bio(),
        streetAddress: fakerEN_IN.location.streetAddress(),
        city: fakerEN_IN.location.city(),
    }
}


