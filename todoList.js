const toDoList = document.querySelector(".js-list"),
    toDoInput = toDoList.querySelector("input"),
    doList = document.querySelector(".js-dolist");

const toDoListName = "toDoList";
const textColor = "css-textColor"

function saveText(text){
    localStorage.setItem(toDoListName, text);

    console.log(`saveText ${text}`);
}

function showText(){
    const listName = localStorage.getItem(toDoListName);

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document .createElement("span");

    delBtn.innerText = `X`;
    span.innerText = `${listName}`;
    span.classList.add(textColor);

    li.appendChild(delBtn);
    li.appendChild(span);
    
    doList.appendChild(li);

    console.log(`showText ${listName}`);
}

function setText(evt){
    evt.preventDefault();

    const text = toDoInput.value;

    saveText(text);
    showText();
    toDoInput.value = null;

    console.log(`setText ${text}`);
}

function enter(){
    toDoList.addEventListener("submit", setText);
}

function init(){
    enter();
}

init();
