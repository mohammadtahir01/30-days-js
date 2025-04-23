
let obj=[
    {
        Name:"Tahir",
        Age:"35",
        City:"Bhopal"
    },
    {
        Name:"Rahul",
        Age:"24",
        City:"Hydrabad"
    },
    {
        Name:"Aman",
        Age:"30",
        City:"Bihar"
    },
]



let show1 = document.querySelector("#show3");

obj.map((e)=>{
    show1.innerHTML+=`

    <tr>
    <td>${e.Name}</td>
    <td>${e.Age}</td>
    <td>${e.City}</td>
    <tr>

    `
})
