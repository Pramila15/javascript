/* It is just a string which allows embedding expressions inside it. 
To create a template string you dont use single or double quotes, 
you use back ticks.The expresssions are embedded by 
wrapping them inside ${}. */

// example

const name = 'World';
const mGreetings = `Hello ${name}`;
console.log(mGreetings);

const firstName = "Pramila"
const lastName = "Dalavai"

const getFullName = (firstName,lastName) => {
    return `${firstName} ${lastName}`;
}

console.log(getFullName(firstName,lastName))