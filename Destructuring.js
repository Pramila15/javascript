//It allows us to unpack arrays or Objects into bunch of variables which makes working with arrays and objects a bit more convenient

//Syntax: 
let [a,b] = [1,2,3,4,5];
console.log(a,b)

const name = "Prmaila Dalavai";
const nameArr = name.split(' ')
console.log(nameArr)

// let firstname = nameArr[0]
// let lastName = nameArr[1]

// let [firstname , lastName] = nameArr
// console.log(firstname);
// console.log(lastName);

//obbj destructuring
const person = {
    f: 'Pramila',
    l: 'Dalavai'
}

//key must match
let {f,l} = person
console.log(f)

let firstName = 'John';
let lastName = 'Lark';

const personObj = {
    firstName,lastName
}
console.log(personObj)