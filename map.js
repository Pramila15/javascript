//IT iterates the array for us and we can pass a callback fuction to perform some operation on each
//item.The updated values can be returned by the callback function to create a new array

//Syntax
// Array.map((item) => {
//     //callback function body
// })

//const mArr = [1,2,3,4,5]
const mArr = [{
    name: 'Pramila',
    company: 'Artyfloraa',
    type: 'Small Business'
},
{
    name: 'Geeta',
    company: 'Artyfloraa',
    type: 'Small Business'
},
{
    name: 'Poorvi',
    company: 'Artyfloraa',
    type: 'Small Business'
},

]

//let newArr = []

// const doubleValues = (item) => {
//     return item*2
// }

// for(let i=0;i<mArr.length;i++){
//     //newArr.push(mArr[i]*2)
//     newArr.push(doubleValues(mArr[i]))
// }

let newArr = mArr.map((item,i) => {
    console.log(`Item at pos ${i}`)
    console.log(item)
    return {
        name: item.name,
    };
})

console.log(newArr)