

// let fruits={
//    name:"tahir",
//    age:12,
//    city:"bihar"
// }
  //for in loop

// for(let key in fruits){
//     console.log(key);
// }

// for(let key in fruits){
//     console.log(key," ",fruits[key]);
// }

// for of loop 
// let arr=["rahul","tahir","raja"];

// for(let val of arr){
//     console.log(val)
// }

//map  ek ek Element par perfrom krta h or ye new array return krta h 
// call back function aisa fun jo kisi ke pairameter ke andr pass hota h to use call back fun kahte h
//higher order  jo apne parameter me ek fun ko leta h to use higher order fun kahte h
// let num=[1,2,3,4,5,6,7,8];

// let newnum = num.map((event)=>{
//  return event*2;

// })
// console.log(newnum);

//filter works like map 
// let num=[1,2,3,4,5,6,7,8];

// let newnum = num.filter((event)=>{
//  return event > 5;

// })
// console.log(newnum);


//for each works same like map filter but it doesnt return it return string

let num=[1,2,3,4,5,6,7,8];

let newnum = num.forEach((event)=>{
//  return event > 5;
console.log(event*3)

})
console.log(newnum);