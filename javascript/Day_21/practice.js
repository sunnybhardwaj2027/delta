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







