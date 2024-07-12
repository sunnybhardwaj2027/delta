// selecting elements by class Name = getElementsByClassName("")

let smallImages = document.getElementsByClassName("oldImg");

console.dir(smallImages);
console.dir(smallImages[0]);

for (let i = 0; i < smallImages.length ; i ++){
    smallImages[i].src = "assets/4k-spider-man.jpg";
    console.log(`value of img no. ${i} is changed.`);
}

smallImages[0].src = "assets/creation_1.webp";
smallImages[1].src = "assets/creation_2.jpeg";
smallImages[2].src = "assets/creation_3.jpeg";

// selecting elements by tags Name = getElementsByTagName("")

console.log(document.getElementsByTagName("p"));
console.dir(document.getElementsByTagName("p")[1]);

// document.getElementsByTagName("p")[1].innerText = "abcd"; -- this will change the inner text to abcd

console.dir(document.querySelector("p")); // -- first paragraph
console.dir(document.querySelector("#description")); // -- paragraph with description id
console.dir(document.querySelector(".oldImg")); 
console.dir(document.querySelector("div a")); // -- first anchor tag in div

console.dir(document.querySelectorAll("p")); // -- all paragraph tag as a node list
console.dir(document.querySelectorAll("div a")); // -- all anchor tag in div element

// note - querySelector mein elemnts ko select waise hi krte hai jaise hm css mein krte hai

let para = document.querySelector("p");

console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);

let heading = document.querySelector("h1");

heading.innerText = "i am peter parker";
heading.innerText = "<b>Spider - Man</b>"; // -- this will print '<b>Spider - Man</b>' as it is so we can't use innerText for this purpose.

heading.innerHTML = `<u>${heading.innerText}</u>`; // -- this will make whatever text is written in h1 will be underlined.

heading.innerText = "Spider-Man";

// manipulating attributes

let img = document.querySelector("img");
console.log(img);

console.log(img.getAttribute("id")); // mainImg
img.setAttribute("id", "spidermanImg");
console.log(img.getAttribute("id")); // spidermanImg

img.setAttribute("id", "mainImg");

console.log(img.getAttribute("class")); // null
img.setAttribute("class", "images");

console.log(img.getAttribute("class"));
img.setAttribute("class", null);

console.log(img.getAttribute("class"));

// manipulating style

let heading1 = document.querySelector("h1");
console.dir(heading1);
console.dir(heading1.style);

// heading.style.color = "red";

let links = document.querySelectorAll(".box a");
console.dir(links);

for(link of links){
    link.style.color = "red";
}

// note -- jab hm javascript mein style khol ke dekhenge jaake to jo property css mein hmne set kar ke rkhi hai wo nhi dikhegi wha pe wha pe sirf whi style dikhti hai jo hmne inline mein set kri hai isiliye isko jyada use nhi krte hm

// classList property -- this will give an array of classes -- we use this property to manipulate styling

let headClass = document.querySelector("h1");
console.dir(headClass.classList); // length - 0 -- because there is no class 

headClass.classList.add("green"); // added a class property for h1 element.
console.dir(headClass.classList);
headClass.classList.add("underline"); // added second class property for h1 element.

console.dir(headClass.classList);

headClass.classList.remove("green"); // removed green class
console.log(headClass.classList.contains("green")); // false -- this will check that 'green' class is available or not.

console.log(headClass.classList.contains("underline")); // true

// note -- in case of class we don't use setAttribute because setAttribute that remove all the previous class and sets this one .

headClass.classList.toggle("green"); // this will add "green" class because there was no green class availble
headClass.classList.toggle("underline"); // this will remove "underline" class because there was underline class available. basically it toggles .

console.log(headClass.classList); // green

// Navigation 
// parentElement

let h4 = document.querySelector("h4");
console.log(h4.parentElement); // div

// children
console.log(h4.children); // HTMLcollection [] -- bcoz ther is no children of h4.
let box = document.querySelector(".box");
console.log(box.children); // HTMLcollection [2] [h4, ul]
console.log(box.childElementCount); // 2

// previousElementSibling/nextElementsibling

let imge = document.querySelector("img");
console.log(imge.previousElementSibling); // h1
imge.previousElementSibling.style.color = "orange";

