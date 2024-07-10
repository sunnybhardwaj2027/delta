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


