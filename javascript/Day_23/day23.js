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