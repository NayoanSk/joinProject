//example of string Method
let productTitle = "The Name of our coUntry is banGlaDesH";
console.log(productTitle.toLowerCase());
console.log(productTitle.toLocaleLowerCase());
console.log(productTitle.toUpperCase());
console.log(productTitle.toLocaleUpperCase());
// console.log(productTitle.trim());
console.log(productTitle.slice(4, 8) + "....");
console.log(productTitle.includes("our"));
console.log(productTitle.includes("Our"));
console.log(productTitle.includes("country"));
//
//example of Array Method forEach method
let newArrey = ["Sakib", "Tamim", "Rahim", 10, 20, 30];
// newArrey.forEach((value, index, all)=>{
//     console.log(index, value);
// })
//or
newArrey.forEach(myFun);
function myFun(){
    console.log(newArrey);
}
//
let testArr = [20, 30, 22, 25, 24, 28];
let sumsss = 0;
let testing = testArr.forEach((value)=>{
    sumsss += value;
    return sumsss;
})
console.log(testing); // forEach method kono kisu return kore na
// let testArr = [20, 30, 22, 25, 24, 28];
// testArr.forEach((value)=>{
//     if(value % 2 === 0){
//         console.log("Even");
//     }
//     else{
//         console.log("odd");
//     }
// })
//example of Array Method Map method
let newArreys = ["Sakib", "Tamim", "Rahim", 10, 20, 30];
let testArrs = newArreys.map((value, index, all)=>{
    return value
});
console.log(testArrs); // map() method return kore


//
let proInfo =[
    {
        id : 1225,
        name : "Mobile",
        ProLink : "https://surl.li/jpjgws",
        ProDes : "https://surl.li/keebuo",
        price : 11000
    },
    {
        id : 1226,
        name : "TV",
        ProLink : "https://surl.li/jpjgws",
        ProDes : "https://surl.li/keebuo",
        price : 15000
    },
    {
        id : 1227,
        name : "Freeze",
        ProLink : "https://surl.li/jpjgws",
        ProDes : "https://surl.li/keebuo",
        price : 19000
    },
    {
        id : 1227,
        name : "Woven",
        ProLink : "https://surl.li/jpjgws",
        ProDes : "https://surl.li/keebuo",
        price : 22000
    }
];

// let search = 1227;
// let arraySearch = proInfo.find((value)=>{
//     if(search === value.id){
//         return value;
//     }
// });
// console.log(arraySearch); //ete 1 ta value return korbe jodio id same dui tai, object return kore
//
let search = 1227;
let arraySearch = proInfo.filter((value)=>{
    if(search === value.id){
        return value;
    }
});
console.log(arraySearch); //ete 2 ta value return korbe jehetu id same dui tai, Array return kore