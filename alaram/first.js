
let count =0;
let stop3;
let set1=()=>{
    let inp = document.querySelector("#alaramtime").value;
    let inp1 = document.querySelector("#show");
    let mus = document.querySelector("#music1")

    stop3 = setInterval(()=>{
    let time = new Date()
   
        let setalam=`${time.getHours().toString().padStart(2,"0")}:${time.getMinutes().toString().padStart(2,"0")}`;
        
        if(setalam==inp){
         count++;
         inp1.innerHTML="alaram is ringing";
         mus.play();
          if(count == 5){
            clearInterval(stop3);
            mus.pause();

           }
           
        }else{
            inp1.innerHTML="set alaram";
        }
    },1000)
}

// let stop2=()=>{
//     clearInterval(stop3);
//     let alarm2 = document.querySelector("#music1");
//     alarm2.pause(); 
// }