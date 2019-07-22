const BGbody = document.querySelector("body");

const imageAdd = 4;

function loadImg(numb){
    const img = new Image();
    img.src = `img/img${numb+1}.jpg`;
    img.classList.add("BGpaint");
    BGbody.prepend(img);
}

function init(){
    loadImg(parseInt(Math.random()*imageAdd));
}

init();