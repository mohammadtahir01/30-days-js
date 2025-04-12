// function first1(){
//     let inp = document.querySelector("#tag1");
//    inp.innerHTML = "Hello World!";
// }   
// first1();

// write a program to find the sum of positive numbers in an array.
let arr=[-5,10,20,-3,7];
let sum=0;

for(let i=0; i<arr.length; ++i){
    if(arr[i]>0){
        sum=sum+arr[i];
    }
   
}
console.log(sum);


// react js home work

function outer(){
    let a=10;
    function inner(){
        let b=20;
        console.log(a+b);
    }
    inner();
}
outer();

// we can also use return statement to call the inner function.

inner=outer(); // here outer function is called and it returns the inner function.
// now we can call the inner function.

function outer(){
    let a=10;
    function inner(){
        let b=20;
        console.log(a+b);
    }
    return inner;
}
// outer();



// let ok= function(){ //aisa function jiska koi name hi nhi hota h
//     console.log("Hello World!");    
// }
// ok()

//IIFE (Immediately Invoked Function Expression)
// IIFE is a function that runs as soon as it is defined. It is also called self executing function.
// (
// function(){
//     console.log("Hello World!");
// }
// )();


// arrow function   

// let ok=()=>{
//     console.log("Hello World!");
// }
// ok();
// arrow function with parameters
let sum1 = (a,b)=>{
    return a+b;
};
console.log(sum1(10,20)); // 30