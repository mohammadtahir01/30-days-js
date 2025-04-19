

// let mydate = new Date()
// console.log(mydate)


setInterval(() => {
let mydate = new Date()
let imp = document.querySelector("#show")
    // count++;    
    imp.innerHTML=`
    ${mydate.getHours()}:
    ${mydate.getMinutes()}:
    ${mydate.getSeconds()}
    `   
},1000)  

// console.log(mydate.getDay())
// console.log(mydate.getDate())
// console.log(mydate.getDay())
// console.log(mydate.getHours())
// console.log(mydate.getMinutes())
// console.log(mydate.getSeconds())

// let arr=["sun","mon","tue","wed","thue","fri","sat"];
// console.log(arr[mydate.getDay()])

