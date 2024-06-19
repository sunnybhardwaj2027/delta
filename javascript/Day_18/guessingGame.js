const max = prompt("Enter the max number : ");

const random = Math.floor(Math.random() * max) + 1;

let guess = prompt("Guess the number : ");

while(true){
    if (guess == "quit"){
        console.log("user quit!");
        break;
    }

    if (guess == random){
        console.log("you are right! congrats!! random number was", random);
        break;
    } else if(guess < random){
        guess = prompt("hint: your guess was to small. please guess again.");
    } else {
        guess = prompt("hint: your guess was to large. please guess again.");
    }
}