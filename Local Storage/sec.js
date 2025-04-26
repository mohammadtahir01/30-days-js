

let send=()=>{
    let inp = document.querySelector("#name").value;
    let inp2 =document.querySelector("#Number").value;
    let inp3 = document.querySelector("#email1").value;
    let inp4 = document.querySelector("#pass").value;
    let inp5 = document.querySelector("#cpass").value;

    localStorage.setItem("Name",inp)
    localStorage.setItem("Number",inp2);
    localStorage.setItem("Email",inp3);
    localStorage.setItem("Password",inp4);
    localStorage.setItem("Confrom Password",inp5);
   
    //  localStorage.clear();


    location.href = "indexLogin.html";
    return false
}

let sendData=()=>{
    let signname1 = document.querySelector("#sinname").value;
    let signemail1 = document.querySelector("#sinemail").value;

    let myname = localStorage.getItem("Name");
    let myEmail = localStorage.getItem("Email")

    if(signname1 === myname && signemail1 === myEmail){
       location.href="home.html"
       return false
    }   
}  
    
    
