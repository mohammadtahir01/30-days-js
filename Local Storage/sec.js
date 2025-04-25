

let send=()=>{
    let inp = document.querySelector("#name").value;
    let inp2 =document.querySelector("#Number").value;
    let inp3 = document.querySelector("#email1").value;

    localStorage.setItem("Name",inp)
    localStorage.setItem("Number",inp2);
    localStorage.setItem("Email",inp3);
    inp.value="";
    inp2.value="";
    inp3.value="";
    //  localStorage.clear();
}