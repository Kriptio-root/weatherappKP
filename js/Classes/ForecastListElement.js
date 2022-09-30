class ForecastElementBuilder {
    #newElement;

    constructor(element) {
        this.#newElement = createNewElement(element);

        function createNewElement(element) {
            let templateElement = document.createElement('div');
            templateElement.classList.add('forecast_element');
            templateElement.innerHTML = `
            
              <div class="forecast_element_img-block--wrapper">
               <div class="forecast_element__time">
                 ${unixTimeToNormal(element.dt)}
               </div>
                <div class="forecast_element__img">
                 <img src="${buildIconRequest(element.weather[0].icon, 1)}">
               </div>
              </div>
              <div class="forecast_element__textBlock">
               <div class="forecast_element__textBlock--inner">
                 <div class="forecast_element__textBlock--upper">
                  <div class="forecast_element__textBlock--temp">
                   ${KelvinToCelsiusFormula(element.main.temp)}&degC
                  </div>
                  <div class="forecast_element__textBlock--phenomena">
                  ${element.weather[0].description}
                  </div>
                 </div>
                 <div class="forecast_element__textBlock--lower">
                    <div class="forecast_element__textBlock--wind-speed">
                    ${element.wind.speed}, m/s
                    </div>
                    <div class="forecast_element__textBlock--cloudinessAndHumidity">
                    ${element.weather[0].main.toLowerCase()}: ${element.main.humidity}%,
                    </div>
                    <div class="forecast_element__textBlock--pressure">
                    ${element.main.pressure} hpa
                    </div>
                 </div>
               </div>
              </div>
            `
            /////////imgBlock///////////////
            // let forecastElement = document.createElement('div');
            // forecastElement.classList.add('forecast_element');
            //
            // let forecastElementImgBlockWrapper = document.createElement('div');
            // forecastElementImgBlockWrapper.classList.add('forecast_element_img-block--wrapper');
            //
            // let forecastElementTime = document.createElement('div');
            // forecastElementTime.classList.add('forecast_element__time');
            // forecastElementTime.innerText = unixTimeToNormal(element.dt);
            //
            // forecastElementImgBlockWrapper.appendChild(forecastElementTime);
            //
            // let forecastElementImg = document.createElement('div')//ready func
            // forecastElementImg.classList.add('forecast_element__img');
            // let iconLink = buildIconRequest(element.weather[0].icon, 1);
            // forecastElementImg.innerHTML = `<img src="${iconLink}">`;
            //
            // forecastElementImgBlockWrapper.appendChild(forecastElementImg);
            //
            // forecastElement.appendChild(forecastElementImgBlockWrapper);
            //
            // //////textBlock///////////////////////////
            //
            // let forecastElementTextBlock = document.createElement('div');
            // forecastElementTextBlock.classList.add('forecast_element__textBlock');
            //
            // let forecastElementTextBlockInner = document.createElement('div');
            // forecastElementTextBlockInner.classList.add('forecast_element__textBlock--inner');
            //
            // let forecastElementTextBlockUpper = document.createElement('div');
            // forecastElementTextBlockUpper.classList.add('forecast_element__textBlock--upper');
            //
            // let forecastElementTextBlockTemp = document.createElement('div');
            // forecastElementTextBlockTemp.classList.add('forecast_element__textBlock--temp');
            // forecastElementTextBlockTemp.innerHTML = `${KelvinToCelsiusFormula(element.main.temp)}&degC`;
            // let forecastElementTextBlockPhenomena = document.createElement('div');
            // forecastElementTextBlockPhenomena.classList.add('forecast_element__textBlock--phenomena');
            // forecastElementTextBlockPhenomena.innerText = `${element.weather[0].description}`;
            //
            //
            // forecastElementTextBlockInner.appendChild(forecastElementTextBlockUpper);
            // forecastElementTextBlockUpper.appendChild(forecastElementTextBlockTemp);
            // forecastElementTextBlockUpper.appendChild(forecastElementTextBlockPhenomena);
            //
            // let forecastElementTextBlockLower = document.createElement('div');
            // forecastElementTextBlockLower.classList.add('forecast_element__textBlock--lower');
            //
            // let forecastElementTextBlockWindSpeed = document.createElement('div');
            // forecastElementTextBlockWindSpeed.classList.add('forecast_element__textBlock--wind-speed');
            // forecastElementTextBlockWindSpeed.innerText = `${element.wind.speed}, m/s`;
            //
            // let forecastElementTextBlockCloudinessAndHumidity = document.createElement('div');
            // forecastElementTextBlockCloudinessAndHumidity.classList.add('forecast_element__textBlock--cloudinessAndHumidity');
            // forecastElementTextBlockCloudinessAndHumidity.innerText = `${element.weather[0].main.toLowerCase()}: ${element.main.humidity}%,`;
            //
            // let forecastElementTextBlockPressure = document.createElement('div');
            // forecastElementTextBlockPressure.classList.add('forecast_element__textBlock--pressure');
            // forecastElementTextBlockPressure.innerText = `${element.main.pressure} hpa`;
            //
            // forecastElementTextBlockLower.appendChild(forecastElementTextBlockWindSpeed);
            // forecastElementTextBlockLower.appendChild(forecastElementTextBlockCloudinessAndHumidity);
            // forecastElementTextBlockLower.appendChild(forecastElementTextBlockPressure);
            // forecastElementTextBlockInner.appendChild(forecastElementTextBlockLower);
            //
            //
            // forecastElementTextBlock.appendChild(forecastElementTextBlockInner);
            // forecastElement.appendChild(forecastElementTextBlock);
            // return forecastElement;
            return templateElement;
        };
    }

    get getNewElement() {
        return this.#newElement;
    }
}
