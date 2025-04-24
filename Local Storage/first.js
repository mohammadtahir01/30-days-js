

// let send1=()=>{
//     localStorage.setItem("Name","Rahul")
//     localStorage.setItem("Age","25");

//     // localStorage.clear();
//     location.reload();
// }
// let inp = document.querySelector("#show");

// let name=localStorage.getItem("Name");
// let age=localStorage.getItem("Age");

// inp.innerHTML=`${name} : ${age}`


// cleardata=()=>{
//     localStorage.removeItem("Name");
//     location.reload();
// }

let send1=()=>{
    let inp = document.querySelector("#inp2").value;
    // let inp3= document.querySelector("#show");

    localStorage.setItem("Name",inp);
    // let name1=localStorage.getItem("Name");
    // console.log(`Name: ${name1}`)


}