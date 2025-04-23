

let obj=[
    {
        name:"tahir",
        city:"bihar",
        age:21
    },
    {
        name:"rahul",
        city:"nawada",
        age:21
    },
    {
        name:"aman",
        city:"kolkata",
        age:21
    }
]

// console.log(obj[0].city)

// let show1 =document.querySelector("#show");
// show1.innerHTML=obj;  


let show1 =document.querySelector("#show");

obj.map((e)=>{
    show1.innerHTML +=` 
   <div> 
    <P> Name : ${e.name} </p>
    <p> City: ${e.city} </p>
    <p> Age: ${e.age} </p> 
    </div>`
})