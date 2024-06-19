// trim method 

let str = "   mess   ";
console.log(str.trim());

let password = prompt("Enter your password:");
let newPassword = password.trim();

alert(`Your new password is ${newPassword}`);

//toUpperCase() and toLowerCase()

let string = "Random String";

console.log(string.toUpperCase());
console.log(string.toLowerCase());

// string methods with arguments.

let msg = "ILoveCoding";

console.log(msg.indexOf("Love")); // 1 -- it gives the indes of first letter only.
console.log(msg.indexOf("o")); // 2 -- it gives the index of first found.
console.log(msg.indexOf("l")); // -1 -- means not found
console.log(msg.indexOf("LOve")); // -1 

// method chaining

let strr = "   Hello   ";

console.log(strr.trim().toUpperCase());


// slice method 

console.log(msg.slice(1,4));
console.log(msg.slice(5));
console.log(msg.slice(-2));

// replace method

console.log(msg.replace("Love","do")); // IdoCoding
console.log(msg.replace("o","x")); // IlxveCoding -- sirf first occurence hi replace hoga

// repeat method

let msg1 = "hello";

console.log(msg1.repeat(3)); // hellohellohello

// practice question 
// 1.

let msg2 = "help!"

console.log(msg2.trim().toUpperCase());

// 2.

let Name = "ApnaCollage";

console.log(Name.slice(4).replace("l","t"));

// array(data structure)

let student1 = "sunny";
let student2 = "nancy";
let student3 = "bittu";

// if there is so many data then we have to make lot of variables because of that we use array.

let students = ["sunny", "nancy", "bittu"];
console.log(students);

let nums = [2,4,6,8];

console.log(typeof(nums)); // object-- we will see this letter

let info = ["shradha", 23 , 89.9]; // Mixed array -- in array we can store different types of data.
let empArr = []; // we can declare an empty array also.

console.log(empArr.length);

// arrays are mutable.

let fruits = ["mango", "apple", "litchi"];
fruits[0] = "banana";
console.log(fruits);

fruits[10] = "papaya"; // here papaya will be at 10th index and previous 7 position will be vacant.
console.log(fruits);

// array methods.

let cars = ["audi", "bmw", "maruti", "xuv"];

cars.push("toyota"); // add in the end.
console.log(cars);

cars.push("ferari");
console.log(cars);

let deletedCars = cars.pop();
console.log(deletedCars); // pop function deletes the end elements and returns it also it is important.

cars.pop(); // delete last elements
console.log(cars);

cars.unshift("toyota"); // add in the start of array.
console.log(cars);

cars.unshift("ferari");
console.log(cars);

let deletedCarsf = cars.shift(); // ferari -- delete from start of the array and returns it also.
console.log(deletedCarsf);
console.log(cars);

cars.shift();
console.log(cars);

// practice question
// for the given start state of an array, change it to final form using methods. start: ['january', 'july', 'march', 'august']  to final: ['july', 'june', 'march', 'august'].

let months = ["January", "July", "March", "August"];

months.shift(); // delete january
months.shift(); // delete july

months.unshift("June"); // add june
months.unshift("July"); // add july

console.log(months);

// indexOf method.

let primary = ["red", "yellow", "blue"];

console.log(primary.indexOf("yellow")); // 1
console.log(primary.indexOf("green")); // -1
console.log(primary.indexOf("Yellow")); // -1

// concat method

let secondary = ["orange", "green", "violet"];

let allColors = primary.concat(secondary);

console.log(primary); // primary ya secondary mein koi change nhi aayega.
console.log(secondary);
console.log(allColors);

// reverse method

console.log(primary.reverse());
console.log(primary); // ye method primary array mein hi change kar diya.
primary.reverse();

// slice in arrays.

console.log(allColors.slice());
console.log(allColors.slice(2));
console.log(allColors.slice(2,3));
console.log(allColors.slice(-2));
console.log(allColors.slice(9));

// splice in arrays.

console.log(allColors);

console.log(allColors.splice(4)); // ['green', 'violet']
console.log(allColors);

console.log(allColors.splice(0,1)); // ['red']
console.log(allColors);

console.log(allColors.splice(0,1,"black","grey")); // ['yellow']
console.log(allColors);  // ['black', 'grey', 'blue', 'orange']

// sort in array

let days = ["sunday", "monday", "wednesday", "tuesday"];

console.log(days.sort()); // ['monday', 'sunday', 'tuesday', 'wednesday']
console.log(days); // ['monday', 'sunday', 'tuesday', 'wednesday'] -- iska mtlb ye days array mein hi change kiya  hai


let squares = [25, 16, 4, 49, 36, 9];
console.log(squares.sort());  // [16, 25, 36, 4, 49, 9] -- isne kiya kra phle isne numbers ko string bna diya phir isne string ke unicodes ko sort kiya hai isiliye sorting method javascript mein tabhi use krna hai jab array ke elements string ho ya phir character ho.

// practice question
//1. for the given start state of an array, change it to final form using methods. start: ['january', 'july', 'march', 'august']  to final: ['july', 'june', 'march', 'august'] -- do it by splice method

let months2 = ['january', 'july', 'march', 'august'];

console.log(months2.splice(0,2,"july","June"));  // ['january', 'july'] -- splice method returns deleted element 
console.log(months2);

//2. return the index of the "javascript" from the given array if it was reversed. lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'].

let lang = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];

console.log(lang.reverse().indexOf("javascript"));

// array refernce(important)

let originalArray = [1, 2, 3];
let newArray = originalArray;

newArray[0] = 99;

console.log(originalArray); // Outputs: [99, 2, 3]
console.log(newArray);      // Outputs: [99, 2, 3]

// constant array

const a = 10;
// a =16; -- error

const array = [1,2,3];
array.push(4);// we can do this because we are not changing the address.
console.log(array);

array.pop(4);
console.log(array);

//array = cars; // this will through an error because we can't assign anything to const var because we are changing the address by doing this.


// Nested arrays (multidimensional arrays)

nums = [[1,2], [3,4], [5,6]];
console.log(nums.length);

// ques --create a nested array to show the tic-tac-toe game state.

let game = [['X',null,'O'], [null,'X',null], ['O',null,'X']];


