// Select the button element from the DOM
let btn = document.querySelector("button");

// Add a click event listener to the button
btn.addEventListener("click", function (event){
    console.log(event); // Logs the event object, which includes details about the click event
    console.log("button was clicked"); // Logs a message to the console
});

// Select the input element from the DOM
let input = document.querySelector("input");

// Add a keydown event listener to the input field
input.addEventListener("keydown", function(event){
    console.log(event); // Logs the event object, which includes details about the keydown event
    console.log("key = ", event.key); // Logs the key that was pressed
    console.log("code = ", event.code); // Logs the code of the key that was pressed
    console.log("key was pressed"); // Logs a message to the console
});

// Select the element with id "game" from the DOM
let movement = document.querySelector("#game");

// Add a keydown event listener to the "game" element
movement.addEventListener("keydown", function(event){
    console.log("code = ", event.code); // Logs the code of the key that was pressed
    if (event.code == "ArrowUp"){
        console.log("character moves forward"); // Logs a message if the "ArrowUp" key is pressed
    } else if (event.code == "ArrowDown"){
        console.log("character moves backward"); // Logs a message if the "ArrowDown" key is pressed
    } else if (event.code == "ArrowRight"){
        console.log("character moves right"); // Logs a message if the "ArrowRight" key is pressed
    } else {
        console.log("character moves left"); // Logs a message for any other key press (assumed to be "ArrowLeft")
    }
});

// Select the form element from the DOM
let form = document.querySelector("form");

// Add a submit event listener to the form
form.addEventListener("submit", function (event){
    // alert("form submitted"); // This line is commented out to prevent the alert
    event.preventDefault(); // Prevents the default form submission behavior
    console.log("form submitted"); // Logs a message to the console
});

// Select the second form element with id "second" from the DOM
let form2 = document.querySelector("#second");

// Add a submit event listener to the second form
form2.addEventListener("submit", function (event){
    event.preventDefault(); // Prevents the default form submission behavior

    // Select the input fields by their ids
    let input = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.dir(input); // Logs the input element object
    console.log(input.value); // Logs the value of the input field
    console.log(pass.value); // Logs the value of the password field

    // Logs a message including the values of the user and password fields
    console.log(`Hi, ${user.value} your password is set to be ${pass.value}`);

    console.dir(form2); // Logs the form element object

    /*
    let input = this.elements[0]; // Selects the first element of the form
    let pass = this.elements[1]; // Selects the second element of the form
    */
    // This is the same as selecting the elements individually above
});

// Select the input element with id "more" from the DOM
let inp = document.querySelector("#more");

// Add a change event listener to the input field
inp.addEventListener("change", function(){
    console.log("change event"); // Logs a message when the change event occurs
    console.log("final value = ", this.value); // Logs the final value of the input field
});

// Add an input event listener to the same input field
inp.addEventListener("input", function(){
    console.log("input event"); // Logs a message when the input event occurs
    console.log(this.value); // Logs the current value of the input field as the user types
});
