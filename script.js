const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";
const Blip = "blip";

function handleClick(){
  title.classList.toggle(CLICKED_CLASS);
}

function init(){
  title.addEventListener("click", handleClick);

  console.log(CLICKED_CLASS);
  console.log(Blip);
}

init();