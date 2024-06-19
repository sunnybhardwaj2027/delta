// for loop 

let i;
for (i = 1; i <= 5; i++){
    console.log(i);
}

// print all odd numbers between 1 to 15.

for (i = 1; i <= 15; i+=2){
    console.log(i);
}

// print all even numers between 2 to 20.

for (i = 2; i <= 20; i += 2){
    console.log(i);
}

// infinite loop

// for(i = 1; i >= 1; i++){
//     console.log(i);
// }

// print multiplication table of 5.

// let n = prompt("Enter any number: ");

// for (i = 1; i <= 10; i++){
//     console.log(`${n} * ${i} = ${n * i}`);
// }

// nested loop

for (i = 1; i <= 3; i++){
    console.log(`outer loop ${i}`);
    for(let j = 1; j <= 3; j++){
        console.log(j);
    }
}

// while loop 

i = 1;
while(i <= 5){
    console.log(i);
    i++;
}

// favourite movie

// const favouriteMovie = "avatar";
// let guess = prompt("Guess my favourite my movie:");

// while(guess != favouriteMovie){
//     if (guess == "quit"){
//         console.log("you quit!");
//         break;
//     }
//     guess = prompt("Wrong guess. Please try again!");
// }

// if (guess == favouriteMovie){
//     console.log("congrats!!");
// }


// break keyword -- we use break keyword to get out of the loop

i = 1;
while (i <= 5){
    if (i == 3){
        break;
    }
    console.log(i);
    i++;
}

// loops with array.

let fruits = ["mango" , "apple", "banana", "litchi", "orange"];

for (i = 0; i < fruits.length; i++){
    console.log(i, fruits[i]);
}

// nested loops with array

let heroes = [["iron man", "spider man", "thor"] , ["superman", "batman", "wonder woman"]];

for (i = 0; i < heroes.length; i++){
    console.log(`List #${i}`);
    for (let j = 0; j < heroes[i].length; j++){
        console.log(heroes[i][j]);
    }
}

// for of loop

fruits = ["mango" , "apple", "banana", "litchi", "orange"];

for (fruit of fruits){
    console.log(fruit);
}

for (char of "apnacollege"){
    console.log(char);
}

// nested for of loop

for (list of heroes){
    for (hero of list){
        console.log(hero);
    }
}