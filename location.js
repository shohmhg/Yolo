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