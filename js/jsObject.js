let student = {
    Name : "Sumon",
    Roll : 30,
    Age : 21,
    friends:{
        name : "Sakil",
        Height : 4.5,
    },
    Subject : ["Math", "English", "Bangla"]
}
let {Name, Roll, Age, friends, Subject}= student;
console.log(student.Name);
console.log(student["friends"]);
console.log(Subject);
console.log(JSON.stringify(student));//convert into json
//Ex 02
let car ={};
car.make = "Toyota";
car.model = 2020;
car.year = 2025;
console.log(car);
car.year = 2000;
console.log(car);
//
const library = { books: [{ title: "The Hobbit", author: "J.R.R. Tolkien" }, 
                    { title: "1984", author: "George Orwell" }] 
                };
        console.log(library.books[1].title);
///
let calculator ={
    add : function(a, b){
        return a+b;
    },
    subtract : function(a, b){
        return a -b;
    },
    multiply : function(a, b){
        return a*b;
    }
}
console.log(calculator.add(20, 10));
console.log(calculator.subtract(20, 10));
console.log(calculator.multiply(20, 10));
/////
const product = { id: 123, name: "Laptop", priceNew: 1200 };
var {id, name, priceNew} = product;
console.log(name);
console.log(priceNew);
/////
const fruits = {apple:10, banana:20, orange:15};
console.log(Object.keys(fruits));
console.log(Object.values(fruits));
//////
var informationStu = [
    {
        sName : "Jakir",
        sId : 2013,
        sRoll : 211,
        sGroup : "science",
    }, 
    "This is individual information of a student",
    true, 
    12,
    stuBackground = ["gentel", "no offence", "punctual", "Human"]
]

console.log(informationStu[0]);
//

const player= [
    {
        Id : 221,
        ImgLink:"https://rb.gy/2iil5t",
        Name : "Rahim",
        Bating : "Right Handed",
        Respon : "Wicket Keeping",
        Average : 45.4,
        Matches : 350,
        Devue : "Dhaka"
    },
    {
        Id : 222,
        Name : "Sakib",
        ImgLink:"https://rb.gy/sc74kv",
        Bating : "Left Handed",
        Respon : "All rounder",
        Average : 55.4,
        Matches : 300,
        Devue : "Khulna"
    },
    {
        Id : 223,
        Name : "Riad",
        ImgLink:"https://rb.gy/raf7w6",
        Bating : "Right Handed",
        Respon : "All rounder",
        Average : 35.4,
        Matches : 355,
        Devue : "Chittagong"
    },
    {
        Id : 224,
        Name : "Tamim",
        ImgLink:"https://shorturl.at/dxuey",
        Bating : "Right Handed",
        Respon : "Batter",
        Average : 44.4,
        Matches : 350,
        Devue : "Chittagong"
    },
    {
        Id : 225,
        Name : "Rubel",
        ImgLink:"https://shorturl.at/CxcrG",
        Bating : "Right Handed",
        Respon : "Boller",
        Average : 25.4,
        Matches : 300,
        Devue : "Khulna"
    }
]
// console.log(player[0].Name)

let form = document.getElementById("form");
let newText = document.getElementById("newText");
form.addEventListener("submit", (e)=>{
    e.preventDefault();
let inputText = e.target.inputText.value;
let changeId = Number(inputText);
e.target.inputText.value = "";

for(let i = 0; i <player.length; i++){
    let rest = player[i];
    let {Id,ImgLink, Name, Bating, Respon, Average, Matches, Devue} = rest;
    // console.log(Name);
    if(changeId === Id){
        newText.innerHTML += htmlFunc(rest);
        break;
        }
    }
});
function htmlFunc(playerData){
    let {Id, ImgLink, Name, Bating, Respon, Average, Matches, Devue} = playerData;
    let htmlText = `
        <div class="roots">
            <img src="${ImgLink}" alt="">
            <h2>${Name}</h2>
            <h3>${Bating}</h3>
            <h4>${Respon}</h4>
        </div>
    `;
    return htmlText
}
////
let putText = document.getElementById("putText");
putText.addEventListener("change", ()=>{
    let inputValue = putText.value;
    putText.value = "";
    let yourTetx = document.getElementById("yourTetx");
    yourTetx.innerText += inputValue + "\n"; //niche niche anar jonno "\n" use korte hoi
})