let names = ["Amin", "Sujon", "Karim", "Rana"];
let i = 0;
while(i < names.length){
    console.log(names[i]);
    i++;
}
//Ex 01
let p = 1;
while(p<=10){
console.log(p)
p++;
}
//Ex 02
let r = 2;
while(r <= 20){
    if(r % 2 === 0){
        console.log(r)
    }
    r++;
}
//Ex 03
let sum2 = 0;
let k = 1;
while(k <= 10){
    sum2 += k;
    k++;
}
console.log(sum2);
//Ex 04
let g = 10;
while(g >= 1){
    console.log(g);
    g--;
}
//Ex 05
let facto = 1;
let m = 1;
while(m <= 5){
    facto *= m;
    console.log(facto);
    m++;
}
//Ex 06
let numbers = 45678;
let reversedNum = 0;
while(numbers > 0){
    let digit = numbers % 10;
    reversedNum = reversedNum*10 + digit;
    numbers = Math.floor(numbers / 10)
}
console.log(reversedNum);