
let show2 = document.querySelector("#show");
let inp = document.querySelector("#p1");
let stop12;
let count2 = 0;
let data=()=>{
    stop12 = setInterval(() => {
        let time = new Date()
         let timeset = `${time.getHours().toString().padStart(2,"0")} : ${time.getMinutes().toString().padStart(2,"0")} : ${time.getSeconds().toString().padStart(2,"0")}`;
         count2++;
         
         if(count2 == 5){
            clearInterval(stop12);
            // show2.innerHTML="time stop"
            // return;
         }
         show2.innerHTML=timeset
    }, 1000);
}