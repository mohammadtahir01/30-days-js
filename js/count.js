// let inp2=document.querySelector("#p2");
// let count=0;
// let Increment=()=>{
// count++;
// inp2.innerHTML=count;
// }

// let Decrement=()=>{
//     count--;
//     if(count<0){
//         inp2.innerHTML=count;
//     }else{
//         inp2.innerHTML=count;
//     }
   
// }

// let Reset =()=>{
//     inp2.innerHTML="0";
// }




let inp2=document.querySelector("#p2");
let count=0;
let Increment=()=>{
count++;
inp2.innerHTML=count;
}

let Decrement=()=>{
    count--;
   
    if(count > -1){
       inp2.innerHTML=count;
    }else{
        alert("YOU CAN NOT DECREMENT BELOW 0");
        // count = 0;
    }
   
}

let Reset =()=>{
    inp2.innerHTML="0";
}





// #include <iostream>
// #include<vector>
// #include<algorithm>
// using namespace std;
// int main()
// {
//    vector<int>v{1,2,3,-4,5,6,7,8};
//    int n = v.size()+1; 
//    int total = n*(n + 1)/2;
//    int miss = 0;
//    for(int i=1; i<v.size(); ++i){
//       if(v[i] != i+1){
//           miss = v[i];
//         //   return 0;
//       }
//    }
//    int j = total-miss;
//    cout<<j;
//    return 0;
   
// }