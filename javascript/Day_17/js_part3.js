// Qs1. Write a JS program to delete all occurrences of element ‘num’ in a given array.Example : if arr = [1, 2, 3, 4, 5, 6, 2, 3] & num = 2.Result should be arr = [1, 3, 4, 5, 6, 3]

let arr = [1, 2, 2,  3, 4, 5, 6, 2, 3]; // i took this as array which is different from question but best for  understanding the deep concept.
let num = 2; 

for (let i = 0; i < arr.length ; i ++){
    if (arr[i] == num){
        arr.splice(i,1);
        i -= i; // this line is important.
    }
}

console.log(arr);

// Qs2. Write a JS program to find the no of digits in a number.Example : if number = 287152, count = 6

let number = 287152;
let count = 0;

while (number >= 1){ 
    count++;
    number = number / 10;
}

console.log(count);

// alternate method

number = 287152;
let copy = number;
count = 0;

while (copy > 0){
    count++;
    copy = Math.floor(copy/10); // Math.floor.() -- the use of this function is this will give the closest integral value.
}

console.log(count);

// Qs3. Write a JS program to find the sum of digits in a number.Example : if number = 287152, sum = 25

let sum = 0;
copy = 287152;

while (copy > 0){
    sum = sum + copy % 10;
    copy = Math.floor(copy/10);
}

console.log(sum);

// Qs4. Print the factorial of a number n.

let n = 5;
let factorial = 1;
let k = 1;

while (k <= n){
    factorial *= k;
    k++;
}

console.log(`factiorial of ${n} is ${factorial}.`);

// Qs5. Find the largest number in an array with only positive numbers

arr = [2, 5, 10, 7, 4, 8, 2, 9];
let largest = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] > largest){
        largest = arr[i];
    }
}

console.log(`largest element in this array is ${largest}`);