const clockContainer = document.querySelector(".js-clock"),
    clockTime = clockContainer.querySelector("h1");

function getTime(){
    const time = new Date();

    const hour = time.getHours();
    const minute = time.getMinutes();
    const seconds = time.getSeconds();

    clockTime.innerText = 
    `${hour < 10 ? `0${hour}` : hour} : ${
        minute < 10 ? `0${minute}` : minute} : ${
            seconds < 10 ? `0${seconds}` : seconds
    }`;
}

function init(){
    setInterval(getTime, 1000);
}
init();