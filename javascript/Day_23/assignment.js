/*
Qs2. Create a button on the page using JavaScript. Add an event listener to the button
that changes the button’s color to green when it is clicked.
*/

let btn = document.createElement("button");
let body = document.querySelector("body");

body.prepend(btn);
btn.innerHTML = "click me!";

btn.addEventListener("click", function(){
    btn.style.color = "green";
});

/*
Qs3. Create an input element on the page with a placeholder ”enter your name” and an
H2 heading on the page inside HTML.
The purpose of this input element is to enter a user’s name so it should only input
letters from a-z, A-Z and space (all other characters should not be detected).
Whenever the user inputs their name, their input should be dynamically visible inside
the heading.
[Please note that no other character apart from the allowed characters should be
visible in the heading]
*/

function updateHeading(){
    let inputValue = input.value;
    let filteredInput = "";

    for (let i = 0; i < inputValue.length; i++){
        let char = inputValue[i];
        if ((char == " ") || (char >= "a" && char <= "z") || (char >= "A" && char <= "Z")){
            filteredInput += char;
        }
    }

    inputValue = filteredInput;
    

    document.getElementById("displayHeading").innerText = filteredInput;
}
let input = document.getElementById("nameInput");

input.addEventListener("input", updateHeading);

/*
Qs1. Try out the following events in Event Listener on your own :
- mouseout
- keypress
- Scroll
- load
*/

// mouseout
function handleMouseOut(){
    box.innerText = "Mouse has left box";
}

let box = document.getElementById("mouseout");
box.addEventListener("mouseout", handleMouseOut);

// keypress
function handleKeypress(event){
    console.log(`${event.code} is pressed`);
};

let inp = document.getElementById("keypress");
inp.addEventListener("keypress", handleKeypress);

// scroll 

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;
    document.getElementById('message').innerText = `You have scrolled ${scrollPosition} pixels.`;
});

// load 

window.addEventListener("load", function(){
    console.log("page loaded succesfully");

});