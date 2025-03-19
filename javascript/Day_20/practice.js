// 'this' keyword

const student = {
    name : "shradha",
    age : 23,
    eng : 95,
    math : 93,
    phy : 97,
    getAvg(){
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`${this.name} get avg marks = ${avg}`);
    }
}

student.getAvg();

function getAvg(){
    console.log(this);
}

getAvg(); // window

// try and catch

console.log("hello");
console.log("hello");
// console.log(a);-- ye dala hota to baaki ka code execute nhi hota -- isliye try and cathch 
try {
    console.log(a);
} catch {
    console.log("variable a doesn't defined");
}

// dusre tarike se bhi use kar skte hai

try {
    console.log(b);
} catch(err) {
    console.log("variable b doesn't defined");
    console.log(err);
}
console.log("hello");
console.log("hello");

// miscellaneous topics

// arrow functions

const sum = (a , b) => {
    console.log(a+b);
}

const cube = (n) => {  // agar ek hi argument ho to parenthesis optional hai baaki case mein must hai.
    return n * n * n;
}

const pow = (a, b) => {
    return a ** b;
}

sum(2,4);
console.log(cube(3));
console.log(pow(2, 3));

// arrow function(implicit return)

const summ = (a, b) => (a + b);
const cubee = (n) => (n * n * n);
const mul = (a , b) => (a * b);

console.log(summ(2, 3));
console.log(cubee(4));
console.log(mul(3, 4));

// setTimeout function 

console.log("Hi there!");

setTimeout(() => {
    console.log("Apna college");
}, 4000);

console.log("welcome to");

// setInterval function
/*
let id = setInterval(() => {
    console.log("Apna college");
}, 2000);

console.log(id);
*/

// 'this' with arrow function

const studentt = {
    name : "aman",
    marks : 95,
    prop : this, // global scope -- window
    getName : function() {
        console.log(this); // object -- bcoz it's normal function ise call student lga rhi hai.
        return this.name;
    },

    getMarks : () => {
        console.log(this); // window -- bcoz it's an arrow function iska parent hai studentt aur wo ek variable jisko call window function lga rha hai
        return this.marks; // undefined -- bcoz yha pe this window hai aur window marks ko nhi janta wo studentt ke andar aata hai
    },

    getInfo1 : function(){
        setTimeout(() => {
            console.log(this); // studentt -- bcoz setTimeout ka parents getInfo aur usko call studentt kar rha hai.
        },2000);
    },

    getInfo2 : function(){
        setTimeout(function() {
            console.log(this); // window -- setTimeout ko call window kar rha hai
        },2000);
    }

};

console.log(studentt.prop);
console.log(studentt.getName());
console.log(studentt.getMarks());
console.log(studentt.getInfo1());
console.log(studentt.getInfo2());

// practice ques

// 1. write an arrow function that returns the square of a number..

let square = (n) => (n * n);
console.log(square(11));

// 2. write a function that prints "hellow world" 5 times at interval of 2sec.

let id2 = setInterval(() => {
    console.log("Hello world");
}, 2000);

setTimeout(() => {
    clearInterval(id2);
    console.log("clear interval Ran");
}, 10000);