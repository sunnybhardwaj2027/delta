// Select the button element from the DOM
let btn = document.querySelector("button");

// Use console.dir to log the button element as a JavaScript object
console.dir(btn);

/*
btn.onclick = function() {
    console.log("button was clicked");
}
*/

// Define a function to log a message to the console
function sayHello() {
    console.log("hello!");
}

// btn.onclick = sayHello; // This line is commented out

// Note: The `onclick` property can only be used once per element. 
// If set multiple times, only the last one will be executed.
// To handle multiple events on the same element, use addEventListener(event, callback).

// onmouseenter: Executes when the mouse hovers over the element
btn.onmouseenter = function() {
    console.log("you hover on button");
}

// Add an event listener for the "click" event using addEventListener
btn.addEventListener("click", sayHello);

// Select the paragraph element from the DOM
let p = document.querySelector("p");

// Add a click event listener to the paragraph element
p.addEventListener("click", function(){
    console.log("parah was clicked");
});

// Select the element with class "box" from the DOM
let box = document.querySelector(".box");

// Add a mouseenter event listener to the box element
box.addEventListener("mouseenter", function(){
    console.log("mouse enter in box");
});

// Add another click event listener to the button element
btn.addEventListener("click", function(){
    console.dir(this); // Log the button element as a JavaScript object
    console.dir(this.innerText); // Log the inner text of the button
    this.style.backgroundColor = "blue"; // Change the background color of the button to blue
});

// Note: To apply the same event listener to multiple elements, 
// you don't need to write the same code repeatedly.

let ps = document.querySelector("#sample");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

// Define a function to change the background color of the clicked element
function changeColor(){
    console.dir(this); // Log the element that was clicked
    console.dir(this.innerText); // Log the inner text of the clicked element
    this.style.backgroundColor = "blue"; // Change the background color of the clicked element to blue
};

// Add the changeColor function as a click event listener to multiple elements
ps.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);
