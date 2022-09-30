let getUserLocation= new Promise(function(resolve, reject){
let ruse=document.querySelector('.ruse');
let geoOptions = {
    enableHighAccuracy: true,
    timeout: 27000,
    maximumAge: 30000
};
function showPosition(position) {
    ruse.innerHTML = position.coords.latitude+','+position.coords.longitude;
    resolve(ruse.style.display='none');
};

function geoError(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    ruse.innerHTML = `ERROR(${err.code}): ${err.message}`;
    reject(ruse.style.display='none') ;
};

function getLocation() {
    navigator.geolocation.getCurrentPosition(showPosition,geoError,geoOptions);
}
   getLocation()
});




