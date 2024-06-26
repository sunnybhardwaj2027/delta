// write an arrow function named arrowAverage that accept an array of numbers and returns the average of those numbers.

let arrayAverage = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum / arr.length;
}

arr = [1,2,3];

console.log(arrayAverage(arr));

// 2. write an arrow function named even() that takes single value as arugument and return it's is even or not.

let even = (n) => {
    if (n % 2 == 0){
        return "even";
    } else {
        return "odd";
    }
}

console.log(even(5));

// other methods

let num = 3;
let isEven = (num) => (num % 2 == 0);
console.log(isEven(num)); // false

// 3. what is output of following code.

object = {
    message : 'Hello, world!',

    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000); // undefined 