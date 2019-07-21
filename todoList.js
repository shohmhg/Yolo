const toDoList = document.querySelector(".js-list"),
    toDoInput = toDoList.querySelector("input"),
    doList = document.querySelector(".js-dolist");

const toDoListName = "toDoList";
const textColor = "css-textColor"
const nothing = "";

const toDoListArray = [];

function saveText(text){
    //localStorage.setItem(toDoListName, text);

    console.log(`saveText ${text}`);
}

function saveListArray(text){
//    const listAct = localStorage.getItem(toDoListName);

    const li = document.createElement("li");
    const delBtn = document.createElement("button");
    const span = document .createElement("span");

    const id = toDoListArray.length + 1;

    delBtn.innerText = `X`;
    span.innerText = `${text}`;
    span.classList.add(textColor);

    li.appendChild(delBtn);
    li.appendChild(span);
    li.id = id;
    
    doList.appendChild(li);

    const toDoListObject = {
        text : text,
        id : id
    };
    
    toDoListArray.push(toDoListObject);

    localStorage.setItem(toDoListName, JSON.stringify(toDoListArray));
}

function showText(){    
    const getList = localStorage.getItem(toDoListName),
        parseList = JSON.parse(getList);

    parseList.forEach(function(value){
        saveListArray(value.text);
    });

    console.log(`showText ${parseList}`);
}

function setText(evt){
    evt.preventDefault();

    const text = toDoInput.value;

    saveListArray(text);
    toDoInput.value = null;

    console.log(`setText ${text}`);
}

function enter(){
    const check = localStorage.getItem(toDoListName);

    toDoList.addEventListener("submit", setText); //saveText    
    if(check !== null){
        showText();
    }
}

function init(){
    enter();
}

init();
