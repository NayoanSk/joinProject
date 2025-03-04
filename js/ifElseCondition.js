
// if else condition exercise
/* check a given number is positive or negative */
let number = -10;
if(number > 0 ){
    console.log(number + " is positive");
}
else{
    console.log(number + " is negative");
}
/* check a given number is even or odd */
let num2 = 25;
if(num2 % 2 === 0){
    console.log(num2 + " is even");
}
else{
    console.log(num2 + " is odd");
}
/* transforms a numerical grade to a letter grade*/
let num3 = 65;
if(num3 >= 50 && num3 <= 59){
    console.log("B")
}
else if(num3 >= 60 && num3 <= 69){
    console.log("A-")
}
else if(num3 >= 70 && num3 <= 79){
    console.log("A")
}
else if(num3 >= 80 && num3 <= 99){
    console.log("A+")
}
else{
    console.log("Under Grade");
}
/* calculates the ticket price based on age*/
let age = 70;
let ticketPrice;
if(age < 12){
    ticketPrice = 5;
}
else if(age >= 12 && age < 18){
    ticketPrice = 10;
}
else if(age >= 18 && age < 60){
    ticketPrice = 20;
}
else {
    ticketPrice = 15;
}
console.log("Ticket Price is $" + ticketPrice);
/*determines if a year is a leap year*/
let year = 2022;
let results;
if(year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)){
    results = "The " +  year + " is a Leap Year";
}
else{
     results = "The " +  year + " is a not a Leap Year"
}
console.log(results);
// if(year % 4 === 0){
//     if(year % 100 !== 0){
//         if(year % 400 === 0){
//             results = "The " +  year + " is a Leap Year";
//         }
//         else{
//             results = "The " +  year + " is a not a Leap Year";
//         }
//     }
//     else{
//         results = "The " +  year + " is a not a Leap Year";
//     }
// }
// else{
//      results = "The " +  year + " is a not a Leap Year";
// }
// console.log(results);

/*calculates a discount based on the purchase amount*/
let price = 160;
let discounts;
if(price >= 100){
    discounts = (price * 20)/100;
}
else if(price >= 50 && price < 100){
    discounts = (price * 10)/100;
}
else{
    discounts = 0;
}
console.log("You get $" + discounts + " discount");

/*greets the user based on the time of day*/
let timeNow = new Date();
let hoursNow = timeNow.getHours();
let Greetings;
if(hoursNow >= 0 && hoursNow < 4){
    Greetings = "Late Night";
}
else if(hoursNow >= 4 && hoursNow < 6){
    Greetings = "Early Morning";
}
else if(hoursNow >= 6 && hoursNow < 12){
    Greetings = "Good Morning";
}
else if(hoursNow >= 12 && hoursNow < 18){
    Greetings = "Good Aternoon";
}
else if(hoursNow >= 18 && hoursNow < 22){
    Greetings = "Good Evening";
}
else{
    Greetings = "Nothing";
}
console.log(Greetings);
/*calculates the Body Mass Index (BMI)*/
let weight = 55;
let height = 1.75;
let bmi = weight / (height*height);
let roungBmi = bmi.toFixed(2);
let category;
if(roungBmi < 18.5 ){
    category = "Under Weight";
}
else if(roungBmi < 24.9){
    category = "Normal Weight";
}
else if(roungBmi < 28.9){
    category = "Over Weight";
}
else{
    category = "Obese";
}
console.log(category);
/*number guessing game*/
let secretNum = 7;
let inputNum = 9;
let outPut ;
if(secretNum === inputNum){
    outPut = inputNum + " you choose the right number";
}
else if(secretNum > inputNum){
    outPut = inputNum + " you choose the lower number";
}
else if(secretNum < inputNum){
    outPut = inputNum + " you choose the Upper number";
}
console.log(outPut);
//ternary example
let guessNum = 20;
let inputs = 20;
let drawNum = (guessNum === inputs) ? "you are right" : "you are wrong";
console.log(drawNum);

function myFuncs(n){
    let sums = [];
if(n === 1){
    sums = [0];
}
else if(n === 2){
    sums = [0, 1];
}
else {
    sums = [0, 1];
    for(i = 2; i < n; i++){
        sums.push(sums[i- 2]  + sums[i- 1] );
    }
}
return sums;
}
console.log(myFuncs(10));



