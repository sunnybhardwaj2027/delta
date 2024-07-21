let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lists = document.querySelectorAll("li");

div.addEventListener("click", function(){
    console.log("div was clicked");
});

ul.addEventListener("click", function(){
    event.stopPropagation(); // agar ye nhi use krte to bubbling hota means agar ul ke block mein click krte to ul wala bhi print hota aur uske parents div wala bhi pring hota but stop propagation ko use kar ke ham use rok skta hai.
    console.log("ul was clicked");
});

for (list of lists){
    list.addEventListener("click", function(){
        event.stopPropagation();
        console.log("li was clicked"); 
    });
};
