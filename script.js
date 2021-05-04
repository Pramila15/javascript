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

// //Numbers Data type
let radius = 10;
const pi = 3.14;
console.log(radius, pi)

// //math operators + - / * ** %
console.log(10 / 2)

let x = radius % 3;
console.log(x);
let y = pi * radius ** 2;

// //order of operations = B I D M A S
let likes = 10;
likes = likes + 1;
likes++;
console.log(likes);

//likes--
//likes += 10
//likes *= 12
//likes /= 2;
//likes -= 5

//NaN

//console.log(5 / 'hello')
console.log("the blog has" + likes + " " + "likes");

//template string
const title = 'Best reads of 2019';
const author = 'Mario';

//concatenation way
let q = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
console.log(q);

//template string way
let w = `the blog called ${title} by ${author} has ${likes} likes`;
console.log(w);

//creating html templates
//dynamic contents got from db - output in the brower
let html = `
<h1>${title}</h1>
<h2>${author}</h2>
<h3>${likes}</h3>

`
    ;

console.log(html);

//Arrays - collection of things
let ninjas = ['shaun', 'ryu', 'chun-li'];
console.log(ninjas);
console.log(ninjas[1]);
ninjas[1] = 'ken';
console.log(ninjas[1]);

let ages = [20, 25, 30, 35];
console.log(ages[2]);

let random = ['hi', 1];
console.log(random);

//array properties
//array methods

console.log(ninjas.length);
let abc = ninjas.join(',');
//comma in between them

console.log(abc);

let abc1 = ninjas.indexOf('ken');
console.log(abc1);

let abc2 = ninjas.concat([20, 25, 30]);
console.log(abc2);

//push new value into the array
let abc3 = ninjas.push('hello world');
console.log(abc3);
//alters the original array = destructive array

abc3 = ninjas.pop();
console.log(abc3);

// Null and undefined
//null = explicitly set a value with no value
// undefined =  for var that have not yet been defined
//let z;
let z = null;
console.log(z, z + 3, `the age is ${age}`);

//Boolean and comparisons
let email = 'pramiladalavai@gmail.com';
let names = ['a', 'b', 'c'];

let pq = email.includes('!');
let pq1 = names.includes('z');

console.log(pq);
console.log(pq1);

//comparison operators
let s = 25;
console.log(s == 25);
console.log(s == 30);
console.log(s != 30);
console.log(s < 25);
console.log(s > 25);
console.log(s <= 25);
console.log(s >= 25);
console.log(s != 25);

//lowercase letter < Uppercase letters

//Loose v/s Strict Comparison