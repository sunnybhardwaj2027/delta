// learn about default argument of addEventListener 
let btn = document.querySelector("button");

btn.addEventListener("click", function (event){
    console.log(event); // pointer event -- type(click)
    console.log("button was clicked");
});

let input = document.querySelector("input");

input.addEventListener("keydown", function(event){
    console.log(event);
    console.log("key = ", event.key);
    console.log("code = ", event.code);
    console.log("key was pressed");
});

let movement = document.querySelector("#game");
movement.addEventListener("keydown", function(event){
    console.log("code = ", event.code); // arrowUp, arrowDown, arrowRight, arrowLeft
    if (event.code == "ArrowUp"){
        console.log("character moves forward");
    } else if (event.code == "ArrowDown"){
        console.log("character moves backward");
    } else if (event.code == "ArrowRight"){
        console.log("character moves right");
    } else {
        console.log("character moves left");
    }
});

// form events

let form = document.querySelector("form");

form.addEventListener("submit", function (event){
    // alert("form submitted");
    event.preventDefault();
    console.log("form submitted");
});

// extracting form data

let form2 = document.querySelector("#second");

form2.addEventListener("submit", function (event){
    event.preventDefault();

    let input = document.querySelector("#user");
    let pass = document.querySelector("#pass");
    console.dir(input);
    console.log(input.value);
    console.log(pass.value);

    console.log(`Hi, ${user.value} your passwor is set to be ${pass.value}`);

    console.dir(form2);

    /*
    let input = this.elements[0];
    let pass = this.elements[1];
    */
   // this is same we did on upper part.
});