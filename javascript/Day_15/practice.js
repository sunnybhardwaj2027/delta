// 1.Traffic light system

let color = "red";

if (color === "red"){
    console.log("Stop!");
}

if (color === "yellow"){
    console.log("Slow down!");
}

if (color === "green"){
    console.log("Go!");
}

// 2. Create a system to calculate popcorn price based on the size customer asked for.

let size = "XL";

if (size === "XL"){
    console.log("Price is Rs. 250");
} else if(size == "L"){
    console.log("Price is Rs. 200");
} else if(size == "M"){
    console.log("Price is Rs. 100");
} else {
    console.log("Price is Rs. 50");
}

// Nested if else

let marks = 45;

if (marks >= 33){
    console.log("Pass!");
    if (marks >= 80){
        console.log("Grade : O");
    } else {
        console.log("Grade : A");
    }
} else {
    console.log("Better luck next time!");
}

// 3. a "Good string" is a ftring that starts with the letter 'a' and has length > 3 . write a program to find if string is good or not.

let str = "apple";

if (str[0] === "a" && str.length > 3){
    console.log("Good String!");
} else {
    console.log("Not a Good string!")
}

// truthy and falsy
// falsy -- false, 0, "", null, undefined, NaN etc. truthy -- other than falsy

if (true){
    console.log("It has a true value.");
} else {
    console.log("It has a false value.");
}

// switch statement

let col = "yellow";

switch(col){
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow down");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Broken light");
}

// 4. using switch statement print days of week.

let day = 1;

switch(day){
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Wrong day!");
}


// alert message.

alert("Something is wrong!");
alert("This is a alert message!");
console.error("This is an error message!");
console.warn("This is a warning message!");


// prompt.

let FirstName = prompt("Enter you name");
let lastName = prompt("Enter last name")

console.log(`Welcome ${FirstName} ${lastName}!`);