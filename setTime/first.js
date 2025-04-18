

// setTimeout apne andr ek function leta h or ek delay leta h  (setTimeout(function,delay))
// setTineout sinkronas h q ki ye time leta h isliye

//call back function or highter fun v kah sakte h
console.log("Hi");
// function fun(){

//     setTimeout(()=>{
//        let inp = document.querySelector("#h1");

//        inp.innerHTML="Hi tahir"

//     },2000)
// }


// console.log("Hello")

// setInterval(function.Interval) 
// setInterval value ko br br (repeat krta h )

// let count=0;
// function fun(){

//     setInterval(() => {
//        count++;
//        console.log(count)
//     },2000)
// }

let count=0;
let stop1;
function fun(){

   stop1= setInterval(() => {
       let inp = document.querySelector("#h1");
       count++;
       inp.innerHTML=`count ${count}`;
    },1000)
}



// clearInterval(set-interval-name)

let stopp=()=>{
    clearInterval(stop1);
}
