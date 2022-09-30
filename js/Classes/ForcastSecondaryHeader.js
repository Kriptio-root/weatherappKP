class ForecastSecondaryHeaderBuilder {
    #newElement;

    constructor(relDate,today=0) {
        this.#newElement = createNewElement(relDate,today);

        function createNewElement(relDate,today) {
            let date = relDate.toString().slice(0, 10);
            let forecastDateWrapper = document.createElement('div');
            forecastDateWrapper.classList.add('forecast_date');
            let forecastDateText = document.createElement('h2');
            forecastDateText.classList.add('forecast_date__text');
            if (today===1){
                forecastDateText.innerText = `${date} Today`;
            }
            else{
            forecastDateText.innerText = `${date}`;
            }
            forecastDateWrapper.appendChild(forecastDateText)
            return forecastDateWrapper;
        };
    }

    get getNewElement() {
        return this.#newElement;
    }
}
