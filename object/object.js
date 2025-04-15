

let text = "tahir"; //string
let fruits = ["tahir", 25,"bhopal"] //this is array

// let obj = {
//     name:"tahir",
//     city:"bhopal",
//     age:21
// }
// console.log(obj);   //it prints full value
// console.log(obj.name); // it prints what you want from this object
// obj.collage=("RNTU"); // it is inserting value in obj
// console.log(obj);
// obj.age=24; //it is updating value

// delete obj.age;    //it is deleting value from the obj


// console.log(obj);



// destructring of object

// let student={name:"tahir",age:25,city:"kolkata"};

// let {name,age,city}=student;

// console.log(student);

// console.log(name);
// console.log(age);
// console.log(city);



// spread oprator(...)

// let student1 = {name:"rahul",age:21};
// let student2 = {name:"raja",age:25};

// let combinedstudent ={...student1,...student2};
// let combinedstudent ={
//     student1: {...student1},
//     student2: {...student2}};

// console.log(combinedstudent);


let f1=()=>{
    let inp = document.querySelector("#show")

    if(inp.style.display==="flex"){
        inp.style.display="none";
    }else{
        inp.style.display="flex";
    }
}