let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

btn.addEventListener("click", function(){
    let newTask = document.createElement("li");
    newTask.innerText = inp.value;
    ul.appendChild(newTask);

    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    newTask.append(delBtn);

    inp.value = "";
});

/*
let delBtns = document.querySelectorAll(".delete");

for (delBtn of delBtns){
    delBtn.addEventListener("click", function(){
        let par = this.parentElement;
        console.log(par);
        par.remove();
    });
};
*/ 

// isse nye wale jo task hm add kar rhe hai wo delete nhi ho rha hai isiliye hm uske parent pe eventListener lagayenge 
// event.target -- detect krta hai kaun sa element click hua hai 
// event.target.NodeName -- ye dega kya click hua hai jaise ki button -- "BUTTON" list -- "LI"

ul.addEventListener("click", function(event){
    if (event.target.nodeName == "BUTTON"){
        let deleteItem = event.target.parentElement;
        deleteItem.remove();
        console.log("deleted");
    }
});

