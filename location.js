const API_KEY = "ec091fd0e142b0fba2c3ca211c831486";
const LOCATION = "location";

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

function saveLocation(){ 
    navigator.geolocation.getCurrentPosition(suc, err);
    //localStorage.setItem(LOCATION, ));

    //latitude
    //longitude

    console.log("saveLocation");
}

function loadLocation(){

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