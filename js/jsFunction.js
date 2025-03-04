
function myFunc(a , b){
    let sum = a + b;
    console.log(sum);
}
myFunc(10, 20);

function newFunc(callBack){
    callBack();
}
function changeFunc(){
    let x = 30;
    let y = 40;
    let z = x + y;
    console.log(z);
}
newFunc(changeFunc);

let myArray2 = ["Sakil", "Rajib", 50, false, ["Karim", "Laki"], 55];

let myArray = ["mamun", "sujon", 30, true, ["Rana", "Raju"], 35];
function arrFunc(arrayName, callArray){
    for(i = 0; i < arrayName.length; i++){
        console.log(arrayName[i]);
    }
    callArray();
}
function array3(){
    let x = 5;
    let y = 3;
    let z = x + y;
    console.log(z);
}
arrFunc("", array3);
arrFunc(myArray2, array3);
//Ex 01
function greet(name){
   return "Hello " + name;
}
console.log(greet("Rana"));
console.log(greet("Sumon"));
//Ex 02
let newArrs = [2, 3, 5, 6];
let newArrs2 = [20, 31, 52, 16];
function sumArray(arr){
    let sums = 0;
    for(i = 0; i < arr.length; i++){
        sums+= arr[i];
    }
    return sums;
}
console.log(sumArray(newArrs));
console.log(sumArray(newArrs2));
//Ex 03
let maxArray = [25, 28, 30, 35,50, 21];
let maxArray2 = [125, 218, 310, 325,500, 221];
function findMax(arr){
    let maxNum = arr[0];
    for(i = 0; i < arr.length; i++){
       if(maxNum < arr[i]){
        maxNum =  arr[i];
        }
    }
return maxNum;
}
console.log(findMax(maxArray));
console.log(findMax(maxArray2));
//Ex 04
function isEven(num){
    if(num % 2 === 0){
        return num + " This number is even and it's true";
    }
    else{
        return num + " This number is Odd";
    }
}
console.log(isEven(6));
console.log(isEven(5));
//Ex 05 
// for mumber
function reverseNumber(numb){
    let revesrs = 0;
    while (numb > 0){
        let digit = numb % 10;
        revesrs = revesrs*10 + digit;
        numb = Math.floor(numb / 10);
    }
    return revesrs;
}
console.log(reverseNumber(12345));
// for string 
function reverseString(str){
    let rest = str.split("").reverse().join("");
    return rest;
}
console.log(reverseString("Sumon"));
console.log(reverseString("Bangladesh"));
//
function revStr(newStr){
    let reves = "";
    for(i = newStr.length -1; i>= 0; i--){
        reves += newStr[i]
    }
    return reves;
}
console.log(revStr("Karim"));
//Ex 06
function factoFunc(facto){
    let numbrs = 1;
    for( i = 1; i < facto; i++){
        numbrs += numbrs*i;
    }
    return numbrs;
}
console.log(factoFunc(5));
console.log(factoFunc(4));
//
// function nestedfunc(){
//      console.log("We love Bnagladesh");
//     function innerFunc(){
//         console.log("I Love Bangladesh");
//     }
//     innerFunc();
// }
// nestedfunc();

//
function nestedfunc(){
    function innerFunc(){
        return "I Love Bangladesh";
    }
    console.log(innerFunc());
    return "We love Bnagladesh";
}
console.log(nestedfunc());
//
function testingFun(a, b){
    function insideFun(x , y){
        return a + b + x+ y;
    }
    return insideFun(4, 5);
}
console.log(testingFun (2, 3));
//
function firstFun(){
    for( i =0; i< 10; i++){
      console.log(i)
    }
    return i
}
function secondFun(){
    let p =15;
    let r =14;
    console.log(p + r);
    return firstFun();
}
console.log(secondFun());