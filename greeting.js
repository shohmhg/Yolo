const form = document.querySelector(".js-form"),
    name = form.querySelector("input"),
    greeting = document.querySelector(".js-greeting");

const USER_LS = "cool";
const SHOWING_ON = "showing";

function saveName(text){
    localStorage.setItem(USER_LS, text);
}

function write(event){
    event.preventDefault();
    const currentValue = name.value;
    showingName(currentValue);
    saveName(currentValue);
}

function inputName(){
    form.classList.add(SHOWING_ON);
    form.addEventListener("submit", write);
    //localStorage.setItem(USER_LS, "text");
}

function showingName(text){
    form.classList.remove(SHOWING_ON);
    greeting.classList.add(SHOWING_ON);

    greeting.innerText = `hello ${text}`;

    console.log("showingName on");
}

function getName(){
    const currentUser = localStorage.getItem(USER_LS);

    if (currentUser === null){  

        inputName();

        console.log(currentUser);
    } else {
        showingName(currentUser);
        console.log(currentUser);
    }
}

function init(){
    getName();
}

init();