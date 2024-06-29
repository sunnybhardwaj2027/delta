// array methods
// 1.forEach

let arr = [1, 2, 3 , 4 , 5];

let print = function(el) {
    console.log(el);
};

// by using name
arr.forEach(print);

// by using function definition

arr.forEach(function (el) {
    console.log(el);
});

// by using arrow function

arr.forEach((el) => {
    console.log(el);
});

// now example on object 

let array = [
    {
        name : "aman",
        marks : 95,
    },
    {
        name : "shradha",
        marks : 94.4,
    },
    {
        name : "rajat",
        marks : 92,
    },
];

array.forEach((student) => {
    console.log(student);
});

array.forEach((student) => {
    console.log(student.marks);
});

// 2.map

let num = [1, 2, 3, 4];

let double = num.map(function (el) {
    return el * 2;
});

console.log(double); // [2, 4, 6 , 8]

let students = [
    {
        name : "aman",
        marks : 95,
    },
    {
        name : "shradha",
        marks : 94.4,
    },
    {
        name : "rajat",
        marks : 92,
    },
];

let gpa = students.map(function (el){
    return el.marks / 10;
});

console.log(gpa);

// 3. filter

let nums = [2, 4, 1, 5, 6, 2, 7, 8, 9];

let even = nums.filter((el) => {
    return el % 2 == 0; //even - true, odd - false -- jab value true return hoga whi bas new array mein store hoga.
});

console.log(even); // [2, 4, 6, 2, 8]

// 4. every 

console.log([1, 2, 3, 4].every((el) => (el % 2 == 0))); // false
console.log([2, 4].every((el) => (el % 2 == 0))); // true

// 5. some

console.log([1, 2, 3, 4].some((el) => (el % 2 == 0))); // true
console.log([1, 3].some((el) => (el % 2 == 0))); // false


// 6. reduce methods

let final = [1, 2, 3, 4].reduce((res, el) => (res + el));
console.log(final);

// finding maximum in array (reduce method)

let numms = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];

let max = numms.reduce((max, el) => {
    if (el > max){
        return el;
    } else {
        return max;
    }
});

console.log(max);

// practice question

// 1. check if all numbers in our array are multiplies of 10 or not.

let num1 = [10, 20, 30, 40];

let ans = num1.every((el) => (el % 10 == 0));

console.log(ans);

// 2. create a function to find the min number in an array.

function getMin(num2){
    let min = num2.reduce((min, el) => {
        if (min < el){
            return min;
        } else {
            return el;
        }
    });

    return min;
    
}

let num2 = [10, 20, 30, 40, 5];

console.log(getMin(num2));
console.log(getMin([1, 2, 3, 4, -34]));

// default parameters

function sum (a, b = 2){
    return a + b;
}

console.log(sum(2)); // 4
console.log(sum(1, 3)); // 4

// spread

console.log(..."apnacollege");
console.log(Math.min(2,3,1));
let arrr = [1, 3, 4, 5];
console.log(Math.min(arrr)); // NaN

console.log(Math.min(...arrr)); // 1

console.log(...arrr); // 1 3 4 5

// spread (with array literals)

let arr2 = [1, 2, 3, 4, 5];
let newArr2 = [...arr2];

console.log(newArr2);
newArr2.push(6);
console.log(newArr2);
console.log(arr2);

let chars = [..."hello"];
console.log(chars); // ['h', 'e', 'l', 'l', 'o']

let odd = [1, 3, 5, 7, 9];
let evven = [2, 4, 6, 8, 10];

let numbers = [...odd, ...evven];
console.log(numbers); //[1, 3, 5, 7, 9, 2, 4, 6, 8, 10]

// spread (object literals)

const data = {
    email : "ironman@gmail.com",
    password : "abcd",
};

const dataCopy = {...data, id : 123, country : "India"};

console.log(dataCopy); // {email: 'ironman@gmail.com', password: 'abcd', id: 123, country: 'India'}

let arr5 = [1, 2, 3, 4, 5];
let obj1 = {...arr5};

let obj2 = {..."hello"};

console.log(obj1); // {0: 1, 1: 2, 2: 3, 3: 4, 4: 5}
console.log(obj2); // {0: 'h', 1: 'e', 2: 'l', 3: 'l', 4: 'o'}

// rest 

function sum(...args){
    return args.reduce((add, el) => (add + el));
}

console.log(sum(1,2,3,4)); // 10

function min(msg, ...args){
    console.log(msg);
    return args.reduce((min, el) => {
        if(min > el){
            return el;
        } else {
            return min;
        }
    });
}

console.log(min("hello", 10, 20, 30, 40, -2)); // hello // -2
console.log(min(10, 20, 30, 40, -2)); // 10 // -2

// destructuring 

let names = ["tony", "bruce", "peter", "steve", "abc", "xyz", "pyq"];
let [winner, runnerUp, ...others] = names;

console.log(winner); // tony
console.log(runnerUp); // bruce
console.log(others); // ['peter', 'steve', 'abc', 'xyz', 'pyq']


// destructuring (object)

const student = {
    name : "karan",
    class : 9,
    aga : 14, 
    subjects : ["hindi", "english", "math", "science"],
    username : "karan@123",
    password : 1234,
    city : "pune",
};

let {username : user , password : secret, city : place = "Mumbai"} = student;
console.log(user); // 'karan@123'
console.log(secret); // 1234
console.log(place); // 'pune'
