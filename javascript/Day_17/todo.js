let todo = [];

let req = prompt("Please enter your request : ");

while (true){
    if (req == "quit"){
        console.log("quitting app!");
        break;
    }

    if (req == "list"){
        console.log("_______________");
        for (let i = 0; i < todo.length; i++){
            console.log(i, todo[i]);
        }
        console.log("_______________");
    } else if (req == "add"){
        let task = prompt("Please enter the task you want to add : ");
        todo.push(task);
        console.log("task added!");
    } else if (req == "delete"){
        let idx = prompt("Please enter the task index : ");
        todo.splice(idx,1);
        console.log("task deleted!");
    } else {
        console.log("wrong task!");
    }

    req = prompt("Please enter your request : ")
}