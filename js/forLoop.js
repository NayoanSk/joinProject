
// let newArr = [20, 23, 24, 26, 27, 29];
// for(i = 0; i < newArr.length; i++){
//     if(newArr[i] % 2 !== 0){
//         console.log(newArr[i]);
//     }
// }
// for(i = 10; i < 20; i++){
//     if(i % 1 == 0 && i % i == 0 && i % 2 !== 0 && i % 3 !== 0){
//         console.log(i);
//     }
// }
//sum of 1 to 10
let sum = 0;
for(i = 0; i <= 10; i++ ){
    sum += i;
}
console.log(sum);

function newFunc(n){
    let sums = [];
    if(n === 1){
        sums = [0];
    }
    else if(n === 2){
        sums = [0, 1];
    }
    else{
        sums = [0, 1];
        for(i = 2; i < n; i++){
            let res = sums.push(sums[i - 2] + sums[i - 1]);
            console.log(res)
        }
    }
    return sums;
}

console.log(newFunc(5));

for( i = 0; i<20; i++){
    if(i % 3 !== 0){
        console.log(i);
    }
}
// for loop exercise
for(i = 0; i <= 20; i++){
    console.log(i);
}
//E02
for( i = 0; i <= 30; i++){
    if(i % 2 === 0){
        console.log(i)
    }
}
//E03
for( i = 0; i <= 30; i++){
    if(i % 2 !== 0){
        console.log(i)
    }
}
//E04
for(i = 5; i <= 50; i=i+5){
   console.log(i);
}
//E05
for(let i = 10; i >= 1; i--){
    console.log(i);
}
//E06
function sumFunc(n){
    let inputNum = 0;
    for(i = 0; i <= n; i++){
        inputNum += i;
    }
    return inputNum;
}
console.log(sumFunc(5));
//E07
function facFunc(n){
    let factorial = 1;
    for(i = 1; i <= n; i++){
        factorial = factorial*i;
    }
    return factorial;
}
console.log(facFunc(5));
//E08
let testArray = [8, 6, 5, 9, 4];
let sum1 = 0;
for(i = 0; i <testArray.length; i++){
    sum1 += testArray[i];
}
console.log(sum1);
//E09
let largeArray = [20, 25, 60, 32, 35, 40];
// largeArray.push(80);
let largeItem =largeArray[0];
for(i = 0; i < largeArray.length; i++){
    if(largeItem < largeArray[i]){
        largeItem = largeArray[i];
        console.log(largeItem);
    }
}
//E10- patteren
let pattern = "";
    for(j=1; j<=5; j++){
        pattern += "*";
        console.log(pattern);
    }
//E11
//using for loop
// let num = 12345;
let revesrse = 0;
for(num = 12345; num > 0; num = Math.floor(num /10)){
    let digit = num % 10;
    revesrse = revesrse *10 + digit;
}
console.log(revesrse);

///////////using while loop
let numberss = 12345;
let revers = 0;
while(numberss > 0){
    let digits = numberss % 10;
    revers = revers *10 + digits;
    numberss = Math.floor(numberss / 10);
}
console.log(revers);