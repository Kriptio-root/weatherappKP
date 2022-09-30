function buildFiveDayBlock(fiveDaysData) {
    fiveDaysData=JSON.parse(fiveDaysData);
    //Build main header
    const foreCastSection = document.querySelector('.forecast--wrapper');
    let fiveDaysHeaderWrapper=document.createElement('div');
    fiveDaysHeaderWrapper.classList.add('forecast_header');
    let fiveDaysHeader=document.createElement('h2');
    fiveDaysHeader.classList.add('forecast_header__text');
    fiveDaysHeader.innerText=`Hourly weather and forecasts in ${fiveDaysData.city.country}, ${fiveDaysData.city.name}`;
    fiveDaysHeaderWrapper.appendChild(fiveDaysHeader);
    foreCastSection.appendChild(fiveDaysHeaderWrapper);
    //Build secondary header
    let cas= new ForecastBuilder(fiveDaysData);
}