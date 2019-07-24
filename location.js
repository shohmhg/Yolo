const API_KEY = "ec091fd0e142b0fba2c3ca211c831486";
const LOCATION = "location";

const weather = document.querySelector('.wl');

function suc(position){
    const loco = {
        latitude : position.coords.latitude,
        longitude : position.coords.longitude
    }
    localStorage.setItem(LOCATION, JSON.stringify(loco));
    console.log(position, loco);
}

function err(){
    console.log("errorcallloaction");
}

function getWeather(lat, lon){
    fetch(
         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
         ).then(function(response){
             return response.json();
         }).then(function(json){
             const temperature = json.main.temperature;
             const name = json.main.name;

             weather.innerText = `${temperature} @ ${name}`;
         });
}

function saveLocation(){ 
    navigator.geolocation.getCurrentPosition(suc, err);
    //localStorage.setItem(LOCATION, ));

    console.log("saveLocation");
}

function loadLocation(){
    const currentlocation = localStorage.getItem(LOCATION);
    const cl = JSON.parse(currentlocation);
    getWeather(cl.latitude, cl.longitude);

    console.log("loadLocation", currentlocation, JSON.parse(currentlocation));
}

function init(){
    const currentlocation = localStorage.getItem(LOCATION);

    if(currentlocation === null){
        saveLocation();
        loadLocation();
    }else{
        loadLocation();
    }
}

init();