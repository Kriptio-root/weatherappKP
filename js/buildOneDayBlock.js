function buildOneDayBlock(oneDayData) {
    oneDayData = JSON.parse(oneDayData);
    const oneDayTable = document.querySelector('.oneDay__table').children[0];
    const weatherIcon = document.querySelector('.oneDay__temp-img').children[0];
    const oneDayTemp = document.querySelector('.oneDay__temp');
    const oneDayLocation = document.querySelector('.oneDay__location');
    const oneDayPhenomena = document.querySelector('.oneDay__temp-phenomena');
    const oneDayTime = document.querySelector('.oneDay__temp-date-time');
    const oneDayDate = document.querySelector('.oneDay__temp-date-date');
    const icon = oneDayData.weather[0].icon;
    const iconSizeX2 = 2;
    let windDirection;
    let oneDayCity = oneDayData.name;
    let oneDayCountry = oneDayData.sys.country;
    let iconLink = buildIconRequest(icon, iconSizeX2);
    weatherIcon.src = iconLink;
    oneDayLocation.innerText = `Weather in ${oneDayCity},${oneDayCountry}`;
    let temperature = KelvinToCelsiusFormula(oneDayData.main.temp);
    oneDayTemp.innerText = ~~temperature;
    oneDayPhenomena.innerText = oneDayData.weather[0].main;
    let date = new Date().toString().split(' ', 5);
    let time = date[4].split(':', 2);
    time = time[0] + ':' + time[1];
    oneDayTime.innerText = time;
    date = date[1] + " " + date[2];
    oneDayDate.innerText = date;

    buildTableOneDay(oneDayData);

    function buildTableOneDay(oneDayData) {
        const trClass = 'oneDay__table-row';
        const tdClass = 'oneDay__table-col';
        let args;
        let windDeg=oneDayData.wind.deg;

        windDirection=windDirectionCompas(windDeg);
        args = [
            ['Wind', `[${oneDayData.wind.speed+" m/s"},${"\n"+windDirection}]`, trClass, tdClass],
            ['Cloudiness', `[${oneDayData.weather[0].description.charAt(0).toUpperCase() + oneDayData.weather[0].description.slice(1)}]`, trClass, tdClass],
            ['Pressure', `[${oneDayData.main.pressure +' hpa'}]`, trClass, tdClass],
            ['Humidity', `[${oneDayData.main.humidity} %]`, trClass, tdClass],
            ['Sunrise', `[${unixTimeToNormal(oneDayData.sys.sunrise)}]`, trClass, tdClass],
            ['Sunset', `[${unixTimeToNormal(oneDayData.sys.sunset)}]`, trClass, tdClass],
            ['Geo coords', `[${oneDayData.coord.lat.toFixed(2)},${oneDayData.coord.lat.toFixed(2)}]`, trClass, tdClass]
            ];
        args.forEach(element =>oneDayTable.appendChild(new OneDayTableElements(...element).getNewElement));
    }
}
