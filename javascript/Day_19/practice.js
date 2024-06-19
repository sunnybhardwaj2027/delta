function hello(){
    console.log("hello");
}

hello();

function printName(){
    console.log("Apna college");
    console.log("Shradha khapra");
}

printName();

function isAdult(){
    let age = 13;
    if (age >= 18){
        console.log("Adult");
    } else {
        console.log("Not adult");
    }
}

isAdult();

function printPoem(){
    console.log("Twinkle Twinkle, little star");
    console.log("How i wonder whar you are.")
}

printPoem();

// create a function to roll a dice and always display the value of dice (1 to 6).

function rollDice(){
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

rollDice();

// fuction with arguments

function printInfo(name, age){
    console.log(`${name}'s age is ${age}.`);
}

printInfo("sunny",19);
printInfo("shradha");
printInfo(14);
printInfo();

// create a function that gives us average of 3 numbers.

function calculateAvg(a, b, c){
    let avg = (a + b + c) / 3;
    console.log(avg);
}

calculateAvg(2,4,6);
calculateAvg(2,5,6);

// create function that prints multiplication table of a number.

function printTable(num){
    for (let i = 1; i <= 10; i ++){
        console.log(`${num} * ${i} = ${num * i}`);
    }
}

printTable(2);

// return keyword

function sum(a, b){
    return a+b;
}

console.log(sum(2,3));
console.log(sum(1,sum(2,3)));

function issAdult(age){
    if(age >= 18){
        return "Adult";
    } else {
        return "Not adult";
    }
    console.log("bye bye"); // ek baar function ne kuchh return kar diya fir aage code mein kya likha hai usse koi farq nhi pdta.
}

console.log(issAdult(13));
console.log(issAdult(23));

// create a function that return sum of the value from 1 to n;

function printSum(num) {
    let sum = 0;
    for ( let i = 1; i <= num; i++){
        sum += i;
    }
    return sum;
}

console.log(printSum(5));

// create a function that returns the concatenation of all strings in an array.

let str = ["hi", "hello", "bye", "!"];

function conCat(str){
    let result = "";
    for (let i = 0; i < str.length; i++){
        result += str[i];
    }
    return result;
}

console.log(conCat(str));

// function scope

let sum1 = 54; // global scope -- ye khi se bhi accessible hai

function calcsum(a,b){
    let sum1 = a+ b; // function scope -- ye sirf fuction ke andar hi accessible hai agar same name ka var global bhi ho to bhi function ke andar isi ki priority jyada hogi but function ke bahar  ise koi nhi janta.
    console.log(sum1);
}

calcsum(1,3);
console.log(sum1);


// lexical scope


{
    let a = 25;  // block scope 
    const b = 23; // block scope
    var c = 343; // block scope does not applied on var keyword.
}

// console.log(a); // error -- a is not defined -- because of block scope.
console.log(c); // block does not work on var keyword.

let age = 25;

if (age >= 18) {
    let str1 = "Adult";
    console.log (str);
}

// console.log(str1); // error can't access str because it is not defined in block.

// practice ques.

let greet = "hello"; // global scope

function changeGreet(){
    let greet = "Namaste"; // function scope
    console.log(greet);

    function innerGreet(){
        console.log(greet); // lexical scope
    }

    innerGreet();
}

console.log(greet); // 'hello'
changeGreet(); // 'Namaste' 'Namaste'

// function expression

let sum2 = function(a, b){
    return a + b;
}

console.log(sum2(2,3));

let hello1 = function() {
    console.log("Hello");
}
hello1();

hello1 = function() { // like a normal variable we can perform all the thing.
    console.log("Namaste");
}
hello1();

// higher order functions

function multipleGreet(func, count){
    for (let i = 1; i <= count; i++){
        func();
    }
}

let greet1 = function(){
    console.log ("hello");
}

multipleGreet(greet1, 10);


// methods

const calculator = {
    num  : 55,
    add : function(a,b){
        return a + b;
    },
    sub : function(a, b){
        return a - b;
    },
    mul : function(a, b){
        return a * b;
    }
}

console.log(calculator.num); // 55
console.log (calculator.add);
console.log (calculator.add(1,3)); // 4