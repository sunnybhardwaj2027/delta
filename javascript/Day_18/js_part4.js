// Qs1. Create a program that generates a random number representing a dice roll.[The number should be between 1 and 6].

let random = Math.floor(Math.random() * 6) + 1;

console.log(random);

// Qs2. Create an object representing a car that stores the following properties for the car: name, model, color.Print the car’s name

let car = {
    name : "lamborghini",
    model : "zen6",
    color : "black"
};

console.log(car.name);
console.log(car["name"]);

// Qs3. Create an object Person with their name, age and city.Edit their city’s original value to change it to “New York”.Add a new property country and set it to the United States

let Info = {
    name : "elon musk",
    age : 50,
    city : "Bihar"
};

Info.city = "New york";
Info.country = "United States";

console.log(Info);