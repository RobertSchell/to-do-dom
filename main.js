/*
To-do List DOM Notes

* Users have the ability to add new todo items
- form
- text input box and submit button (get input from the user and add it to the list when they click submit)
- document.creatElement to create the list items
- .appendChild to add to our list

*Users have the ability to view todo items
- html list to keep track of our todo items
- querySelectorAll (or bubbling) can be utilized to access the array of the individual list items

Creating in HTML
- empty list
- form
- buttons
- text input

Dynamically Creating in JS
- list items
- eventListeners
- querySelector and querySelectorAll

*Allow users to clear all todo items
*/

//variables/querySelectors
let textBox = document.querySelector("#textBox");
let addButton = document.querySelector("#addButton");
let removeCompletedTasksButton = document.querySelector("#removeCompletedButton");
let removeAllButton = document.querySelector("#removeAllButton");
let emptyList = document.querySelector("ol");

//eventListener for addButton/strike through with checker for "" submission in textBox
addButton.addEventListener("click", function(event){
    event.preventDefault();
    if(textBox.value === ""){
        alert("Please enter a to-do item!")
    }else{
        let listItem = document.createElement("li");
        listItem.innerText = textBox.value;
        emptyList.appendChild(listItem);
//event listener for toggling strikethrough on ol li's    
        listItem.addEventListener("click", function(){
            if(listItem.style.textDecoration === "line-through"){
                listItem.style.textDecoration = "";
            }else if(listItem.style.textDecoration === ""){
                listItem.style.textDecoration = "line-through";
            }
});
        textBox.value = "";//resetting textBox to default value after submit/click event
    }
});

//eventListener for removeCompletedButton
removeCompletedTasksButton.addEventListener("click", function(event){
    event.preventDefault();
    let removeItems = document.querySelectorAll("#emptyList li");
    for(let i = 0; i < removeItems.length; i++){
        if(removeItems[i].style.textDecoration === "line-through"){
            emptyList.removeChild(removeItems[i]);
        }
    }
});

//eventListener for removeAllButton
removeAllButton.addEventListener("click", function(event){
    event.preventDefault();
    let items = document.querySelectorAll("#emptyList li");
    for (let i = 0; i < items.length; i++){
        emptyList.removeChild(items[i]);
    }
});





