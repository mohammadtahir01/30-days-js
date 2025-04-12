// let inp2=document.querySelector("#p2");
// let count=0;
// let Increment=()=>{
// count++;
// inp2.innerHTML=count;
// }

// let Decrement=()=>{
//     count--;
//     if(count<0){
//         inp2.innerHTML=count;
//     }else{
//         inp2.innerHTML=count;
//     }
   
// }

// let Reset =()=>{
//     inp2.innerHTML="0";
// }




let inp2=document.querySelector("#p2");
let count=0;
let Increment=()=>{
count++;
inp2.innerHTML=count;
}

let Decrement=()=>{
    count--;
   
    if(count > -1){
       inp2.innerHTML=count;
    }else{
        alert("YOU CAN NOT DECREMENT BELOW 0");
        // count = 0;
    }
   
}

let Reset =()=>{
    inp2.innerHTML="0";
}