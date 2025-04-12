

// prompt("4+3");

// function btn(){
//     var n = prompt("4+3");
// if(n==7){
//     alert("Correct!");
// }
// else{
//     alert("Incorrect!");
// }
// }

// var ab = prompt("Enter Your Name:");

// alert("Hello " + ab + " ! Welcome to the quiz game!");

// function click1(){
// var ab = prompt("Enter Your Name:");
// alert(" ! your name has " + ab.length + " characters.");
// }


//Dom it is a tree like structure of html elements where javascript run can the cantent of the html page

// function f1(){
//     let inp = document.querySelector("#p1");
//     inp.innerHTML="Hello Rahul";
// }
let inp = document.querySelector("#div");
let orange =()=>{
    inp.style.backgroundImage="url('Tahir.jpg')";
    inp.style.backgroundSize="cover";
}

let green =()=>{
    inp.style.backgroundColor="green";
    inp.style.backgroundImage="none";
}

let reset =()=>{
    inp.style.backgroundColor="white";
}