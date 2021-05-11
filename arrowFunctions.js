// clarity and code reduction
function greetings(name){
    return `Welcome ${name}`
}

console.log(greetings('John'))

// const mGreetings = (name,age) => {
//     return `Welcome ${name} ${age}`
// }

const mGreetings = name => `Welcome ${name} ${age}`;

console.log(mGreetings('John',25))