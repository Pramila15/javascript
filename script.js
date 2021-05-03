//Alert
alert('hello world')

//VAR , LET , CONST
let age = 25;
let year = 2000;
console.log(age, year);

age = 75;
//change the value
console.log(age);

//old way of creating variable
var score = 75;
console.log(score);

//camelCase
let myAge = 25;
console.log(myAge);

//cant override value
const points = 50;
//points = 20;
console.log(points);

// Single line comment
/* Multiline comment */

//Data Types
/*
1. Number 
2. String
3. Boolean
4. Null
5. Undefined
6. Object
7. Symbol
*/

//Strings
console.log('hello world');
let email = 'pramila@gmail.com';
console.log(email);

let firstName = 'Pramila';
let lastName = 'Dalavai';

//string concatenation
console.log(firstName + lastName);

//getting characters
let fullName = firstName + lastName;
console.log(fullName[2]);

//string length
console.log(fullName.length);

//string methods
console.log(fullName.toLowerCase());
console.log(fullName.toUpperCase());

let index = email.indexOf('@');

let result = email.lastIndexOf('n');
let res = email.slice(0, 10);
console.log(result);
console.log(res);

let sub = email.substr(0, 10);
console.log(sub);

let rep = email.replace('m', 'W');
console.log(rep);