let input = document.createElement("input");
let body = document.querySelector("body");
body.appendChild(input);

let btn = document.createElement("button");
btn.innerText = "click me!";
body.appendChild(btn);

input.placeholder = "username";
btn.setAttribute("id", "btn");

let button = document.querySelector("#btn");
button.style.color = "white";
button.style.backgroundColor = "blue";

let h1 = document.createElement("h1");
body.prepend(h1);
h1.innerText = "DOM practice";
h1.style.textDecoration = "underline";
h1.style.color = "purple";

let p = document.createElement("p");
body.append(p);
p.innerHTML = "Apna College <b>Delta</b> Practice";