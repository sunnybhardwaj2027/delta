// Q1

let num = 20;

if (num % 10 == 0){
    console.log("good");
} else {
    console.log("bad");
}

// Q2

let usersName = prompt("Enter your name");
let age = prompt("Enter you age");

alert(`${usersName} is ${age} years old`);

// Q3 

let quarter = 1;

switch(quarter){
    case 1:
        console.log("January, February, March");
        break;

    case 1:
        console.log("April, May, June");
        break;

    case 1:
        console.log("July, August, September");
        break;

    case 1:
        console.log("October, November, December");
        break;

    default:
        console.log("Not a quarter! ");
}


// Q4.

let string = "apples";

if ((string[0] === "a" || string[0] === "A") && string.length > 5){
    console.log("Good string.");
} else {
    console.log("Not a good string.")
}


// Q5 

let a = 3, b = 7, c = 6;

if (a > b){
    if (a > c){
        console.log(`${a} is largest`);
    } else {
        console.log(`${c} is largest`);
    }
} else {
    if (b > c){
        console.log(`${b} is largest`);
    } else {
        console.log(`${c} is largest`);
    }
}

// Q6 

let num1 = 42;
let num2 = 2352;

if (num1 % 10 == num2 % 10){
    console.log(`num1 and num2 has same last digit which is ${num1%10}.`);
} else{
    console.log(`num1 and num2 has not same last digit.`);
}