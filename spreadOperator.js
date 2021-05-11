//Spread Operator allows arrays and objects to be expanded into:

//elements in case of Array
//key-value pair in case of objects
 console.clear();

 let mArr1 = [1,2,3,4,5];
 console.log([...mArr1]);

 //[] new array with same elements
 let mArr2 = mArr1;
 console.log(mArr2);

 mArr2 = [...mArr1]
 mArr1.push(6)
 console.log(mArr1)
 console.log(mArr2)

 //let mArr3 = mArr1.concat(mArr2)
 //concatenaion
 let mArr3 = [...mArr1,...mArr2]
 console.log(mArr3)

 //Objects
 let mObj1 = {
     name: 'Pramila',
     lastName: 'Dalavai'
 }

 let mObj2 = {
     age: '45'
 }

 let mObj3 = {...mObj1 , ...mObj2}
 console.log(mObj3)