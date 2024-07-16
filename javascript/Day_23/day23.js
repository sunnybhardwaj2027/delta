let btn = document.querySelector("button");
console.dir(btn);

/*
btn.onclick = function() {
    console.log("button was clicked");
}
*/
 
function sayHello() {
    console.log("hello!");
}
// btn.onclick = sayHello;

// note --- onclick ek element ke sath ek hi baar use kar skte hai ek dusra baar kiye to phle wala execute nhi hoga agar multiple even execute krwana chahte hai to addEvenListener(even, callback) ko use kro

// onmouseenter -- hower kroge function exectute hoga

btn.onmouseenter = function() {
    console.log("you hover on button");
}

// addEventListener(even, callback)
btn.addEventListener("click", sayHello);

let p = document.querySelector("p");
p.addEventListener("click", function(){
    console.log("parah was clicked");
});

let box = document.querySelector(".box");
box.addEventListener("mouseenter", function(){
    console.log("mouse enter in box");
});

btn.addEventListener("click", function(){
    console.dir(this);
    console.dir(this.innerText)
    this.style.backgroundColor = "blue";
});

// note -- yhi even listener se bhut saare element ke liye kaam karwana ho to hme baar baar almost same code ko likhna pdega.

let ps = document.querySelector("#sample");
let h1 = document.querySelector("h1");
let h3 = document.querySelector("h3");

function changeColor(){
    console.dir(this);
    console.dir(this.innerText)
    this.style.backgroundColor = "blue";
};

ps.addEventListener("click", changeColor);
h1.addEventListener("click", changeColor);
h3.addEventListener("click", changeColor);

