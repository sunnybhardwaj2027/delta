// Selecting elements by class name using getElementsByClassName()
let smallImages = document.getElementsByClassName("oldImg");

// Logging the HTMLCollection of elements with class "oldImg"
console.dir(smallImages);
// Logging the first element of the collection
console.dir(smallImages[0]);

// Looping through the collection and changing the src attribute of each image
for (let i = 0; i < smallImages.length ; i ++){
    smallImages[i].src = "assets/4k-spider-man.jpg";
    console.log(`value of img no. ${i} is changed.`);
}

// Changing the src attribute of individual images
smallImages[0].src = "assets/creation_1.webp";
smallImages[1].src = "assets/creation_2.jpeg";
smallImages[2].src = "assets/creation_3.jpeg";

// Selecting elements by tag name using getElementsByTagName()
console.log(document.getElementsByTagName("p"));
// Logging the second paragraph element
console.dir(document.getElementsByTagName("p")[1]);

// Changing the inner text of the second paragraph element
// document.getElementsByTagName("p")[1].innerText = "abcd";

// Selecting elements using querySelector()
console.dir(document.querySelector("p")); // Selects the first paragraph element
console.dir(document.querySelector("#description")); // Selects the element with id "description"
console.dir(document.querySelector(".oldImg")); // Selects the first element with class "oldImg"
console.dir(document.querySelector("div a")); // Selects the first anchor tag inside a div element

// Selecting multiple elements using querySelectorAll()
console.dir(document.querySelectorAll("p")); // Selects all paragraph elements
console.dir(document.querySelectorAll("div a")); // Selects all anchor tags inside div elements

// Note: querySelector and querySelectorAll work like CSS selectors

// Selecting a paragraph element using querySelector
let para = document.querySelector("p");

// Logging the inner text, text content, and HTML content of the paragraph
console.log(para.innerText);
console.log(para.textContent);
console.log(para.innerHTML);

// Selecting an h1 element using querySelector
let heading = document.querySelector("h1");

// Changing the inner text of the h1 element
heading.innerText = "i am peter parker";
// Trying to set HTML content using innerText (won't work)
heading.innerText = "<b>Spider - Man</b>";

// Setting HTML content using innerHTML
heading.innerHTML = `<u>${heading.innerText}</u>`; // Underlines the text

// Changing the inner text of the h1 element again
heading.innerText = "Spider-Man";

// Select the first img element on the page
let img = document.querySelector("img");
console.log(img);

// Get the value of the id attribute of the img element
console.log(img.getAttribute("id")); // mainImg

// Set the id attribute of the img element to "spidermanImg"
img.setAttribute("id", "spidermanImg");
console.log(img.getAttribute("id")); // spidermanImg

// Set the id attribute of the img element back to "mainImg"
img.setAttribute("id", "mainImg");

// Get the value of the class attribute of the img element (should be null)
console.log(img.getAttribute("class")); // null

// Set the class attribute of the img element to "images"
img.setAttribute("class", "images");

// Get the value of the class attribute of the img element (should be "images")
console.log(img.getAttribute("class"));

// Set the class attribute of the img element to null (removing the class)
img.setAttribute("class", null);

// Get the value of the class attribute of the img element (should be null again)
console.log(img.getAttribute("class"));

// Select the first h1 element on the page
let heading1 = document.querySelector("h1");
console.dir(heading1);
console.dir(heading1.style);

// Select all a elements within elements with the class "box"
let links = document.querySelectorAll(".box a");
console.dir(links);

// Loop through the selected a elements and set their text color to red
for(link of links){
    link.style.color = "red";
}

// Note: When we inspect the style property in JavaScript, it only shows inline styles, not styles set in CSS files.

// Select the first h1 element on the page
let headClass = document.querySelector("h1");
console.dir(headClass.classList); // length - 0, because there is no class

// Add the class "green" to the h1 element
headClass.classList.add("green");
console.dir(headClass.classList);

// Add the class "underline" to the h1 element
headClass.classList.add("underline");
console.dir(headClass.classList);

// Remove the class "green" from the h1 element
headClass.classList.remove("green");
console.log(headClass.classList.contains("green")); // false, because "green" class is removed

console.log(headClass.classList.contains("underline")); // true, because "underline" class is still present

// Note: When working with classes, we don't use setAttribute because it removes all previous classes and sets the new one.

// Toggle the class "green" on the h1 element (adds it if it's not present, removes it if it is)
headClass.classList.toggle("green");
headClass.classList.toggle("underline"); // removes "underline" class because it was present
console.log(headClass.classList); // ["green"]

// Navigation
// Select the first h4 element on the page
let h4 = document.querySelector("h4");
console.log(h4.parentElement); // div, the parent element of the h4 element

// Get the child elements of the h4 element (should be an empty HTML collection)
console.log(h4.children); // HTMLcollection []

// Select the element with the class "box"
let box = document.querySelector(".box");
console.log(box.children); // HTMLcollection [h4, ul], the child elements of the.box element
console.log(box.childElementCount); // 2, the number of child elements of the.box element

// Select the first img element on the page
let imge = document.querySelector("img");
console.log(imge.previousElementSibling); // h1, the previous sibling element of the img element
imge.previousElementSibling.style.color = "orange"; // set the text color of the h1 element to orange

// Creating a new paragraph element
let newP = document.createElement("p"); 
// Setting the inner text of the new paragraph
newP.innerText = "Hi, I am new P";

// Selecting the body element
let body = document.querySelector("body");
// Appending the new paragraph to the body (it will appear at the end of the body)
body.appendChild(newP);

// Selecting an element with the class "box"
let box2 = document.querySelector(".box");
// Moving the new paragraph to be the last child of the selected box element
box2.appendChild(newP);

// Creating a new button element
let btn = document.createElement("button");
// Setting the inner text of the button
btn.innerText = "click me!";
// Appending the button to the box element
box2.appendChild(btn);

// Appending additional text to the new paragraph
newP.append(" this is new text.");
// Appending the button as a child of the new paragraph
newP.append(btn); // Now the button is inside the new paragraph

// Appending more text to the new paragraph
newP.append(" don't click me!");

// Prepending the new paragraph to the box element (it will appear at the beginning)
box2.prepend(newP);

// Selecting the first paragraph element in the document
let P = document.querySelector("p");
// Inserting the button before the selected paragraph
P.insertAdjacentElement("beforebegin", btn);
// Inserting the button at the beginning of the selected paragraph
P.insertAdjacentElement("afterbegin", btn);
// Inserting the button at the end of the selected paragraph
P.insertAdjacentElement("beforeend", btn);
// Inserting the button after the selected paragraph
P.insertAdjacentElement("afterend", btn);

// Removing the button from the body
body.removeChild(btn);
// Inserting the button again after the selected paragraph
P.insertAdjacentElement("afterend", btn);
// Removing the button from the document
btn.remove();
// Removing the new paragraph from the document
newP.remove();
