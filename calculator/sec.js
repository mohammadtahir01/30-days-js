//javascript sinkronas h line by line chalta h 
// a sinkrons ye line by line nhi chlta h (pairlali chalta h) jo chota fun jaldi excute krta h fr bra fun ko excute krta h
let store='';

let cal=(val)=>{
    store = store + val;
    let inp = document.querySelector("#show");
    inp.innerHTML = store;
}

let solve = () => {
    let inp = document.querySelector("#show");
    try {
        store = eval(store).toString(); // Evaluate the expression and convert to string
        inp.innerHTML = store;
    } catch (error) {
        inp.innerHTML = "Error"; // Handle invalid expressions
        store = ""; // Reset the store
    }
};


// let solve=()=>{
//     let inp = document.querySelector("#show");
//     store=eval(store);
//     store.toString();
//     inp.innerHTML=store;
// }

let clear1=()=>{
    document.querySelector("#show").innerHTML="";
}

let del=()=>{
    let inp = document.querySelector("#show");
    store = store.slice(0,-1);
    inp.innerHTML = store || " ";
}