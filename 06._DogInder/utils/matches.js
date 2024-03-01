import { fakerEN_IN } from "@faker-js/faker"



/**
 * 
 * @param {number} numberOfMatches 
 */
export default function getMatches(numberOfMatches = 10) {
    const matches = [];
    for (let i = 0; i < numberOfMatches; i++) {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then((response) => response.text())
            .then((result) => matches.push(result.message));
    }

    return matches;

}


function getIndiaProfile() {
    return {
        firstName: fakerEN_IN.person.firstName(),
        lastName: fakerEN_IN.person.lastName(),
        bio: fakerEN_IN.person.bio(),
        streetAddress: fakerEN_IN.location.streetAddress(),
        city: fakerEN_IN.city()
    }
}


