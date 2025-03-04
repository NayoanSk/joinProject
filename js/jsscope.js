
let a = 10;
console.log(a)
function text(){
    console.log(a);
    let b = 20;
    if(true){
        console.log(b);
        let c = 30;
        console.log(c);
    }
}
text();

// arrow function exercise
let t = 1000;
let newFun1 = ()=>{
    console.log(t)
}
newFun1();
//or
let newFun = (a)=>{
    console.log(a);
}
newFun(5);
//or
let newFun2 = a =>{
    console.log(a);
}
newFun2(10);
//or
let newFun3 = a => console.log(a)
newFun3(15);
//or
let newFun4 = (a, b)=>{
    return a+b;
}
console.log(newFun4(10, 20));
//or 
let newFun5 = (a, b)=> a+b;
console.log(newFun5(15, 20));
// array destructure
let players = ["Sakib", "Kamal", "Rahim", "Sujon"];
// let [sa, ka, ra, su] = players;
let [, ka, , su] = players;
console.log(su);
//
let playInfo = {
    name : "Sakib",
    type : "All rounder",
    age  : 30,
    home : "Khulna",
    hobby : {
        reading : "Harry Porter",
        visiting : "Nepal",
        photography : "Land Scape"
    }
}
const playersss = ({hobby})=>{
    // let {name, type, age, home, hobby} = playersInfo;
    let {reading, visiting, photography} = hobby;
    console.log(photography);
}
playersss(playInfo);


