//extra arg are ignored
//const nsum = (num1,num2) => console.log(num1+num2)
//const nsum = (...args) => console.log(args)


//sum of ele
// const nsum = (...args) => {
//     let sum =0 ;
//     for(let i=0;i<args.length;i++){
//         sum += args[i]
//     }
//     console.log(sum)
// }
// nsum(1,2,3,4,5);

//rest operator must be in the end
const nsum = (num1,num2,...args) => {
    console.log(num1);
    console.log(num2);
    let sum = num1+num2 ;
    for(let i=0;i<args.length;i++){
        sum += args[i]
    }
    console.log(sum)
}
nsum(1,2,3,4,5);