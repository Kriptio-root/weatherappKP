getUserLocation.then(
    function () {

        const apiKey = '253a62e11b44e7229b6e645fb00fbba4';
        const comma = ',';
        let element = document.querySelector('.ruse');
        let oneDayData;
        let fiveDaysData;
        const lon = document.querySelector('.ruse').textContent.split(',')[1];
        const lat = document.querySelector('.ruse').innerHTML.split(',')[0];

        let oneDayLink = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        let fiveDaysLink=`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        getWeather(oneDayLink,fiveDaysLink,oneDayData,fiveDaysData);
    }
).catch(
    function (reason) {
        let ruse = document.querySelector('.ruse');
        ruse.style.display = 'block';
        ruse.innerHTML=reason;
    });
function getWeather(oneDayLink,fiveDaysLink,oneDayData,fiveDaysData) {
    fetch(oneDayLink)
        .then(oneDayData=>{
            return oneDayData.text();
        }).then(oneDayData=>{
        buildOneDayBlock(oneDayData);
    });
    fetch(fiveDaysLink)
        .then(fiveDaysData=>{
            return fiveDaysData.text();
        }).then(fiveDaysData=>{
        buildFiveDayBlock(fiveDaysData)
    });
}

// function getWeather(oneDayLink,fiveDaysLink,oneDayData,fiveDaysData) {
//     const oneDayRequest = new XMLHttpRequest();
//     const fiveDaysRequest = new XMLHttpRequest();
//     oneDayRequest.open("GET", oneDayLink, true);
//     oneDayRequest.send();
//     oneDayRequest.onload = function () {
//         oneDayData=this.responseText;
//         buildOneDayBlock(oneDayData);
//
//     }
//     fiveDaysRequest.open("GET", fiveDaysLink, true);
//     fiveDaysRequest.send();
//     fiveDaysRequest.onload = function () {
//         fiveDaysData=this.responseText;
//         buildFiveDayBlock(fiveDaysData)
//     }
// }
