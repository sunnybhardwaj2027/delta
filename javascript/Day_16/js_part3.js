// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].For example: for array [7, 9, 0, -2] and n=3.Print, [7, 9, 0]

let arr = [1,2,3,4,5,6];

let len = 3;
console.log(arr.slice(0,3));

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any positive number].For example: for array [7, 9, 0, -2] and n=3.Print, [9, 0, -2]

let n = 3;
console.log(arr.slice(-3));

// Qs3. Write a JavaScript program to check whether a string is blank or not.

let str = prompt("Please enter a string: ");

if (str.length == 0){
    console.log("String is empty!");
} else {
    console.log("String is not empty!");
}

// Qs4. Write a JavaScript program to test whether the character at the given (character) index is lower case.
let index = 3;
if (str[index] == str[index].toLowerCase()){
    console.log(`${str[index]} is lowercase letter.`);
} else {
    console.log(`${str[index]} is Not lowercase letter.`);
}

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string

let originalString = str;
console.log(originalString);
console.log(originalString.trim());

// Qs6. Write a JavaScript program to check if an element exists in an array or not

let arrr = [44, 25 , 345, "hello", "c"];

let item = 25;

if (arrr.indexOf(item) != -1){
    console.log("element exist in this array");
} else {
    console.log("element does not exist in this array");
}