class ForecastBuilder {
    #newElement;
    constructor(JSONData) {
        this.#newElement = createNewElement(JSONData);

        function createNewElement(JSONData) {
            let args=JSONData.list;
            const foreCastSection = document.querySelector('.forecast--wrapper');
            let relDate;
            let firstElemDateUnproccesed=JSONData.list[0].dt_txt.slice(8,10);
            let firstElemDate=new Date(parseInt(JSONData.list[0].dt_txt.slice(0,4)), parseInt(JSONData.list[0].dt_txt.slice(5,7)), parseInt(JSONData.list[0].dt_txt.slice(8,10)));
            foreCastSection.appendChild(new ForecastSecondaryHeaderBuilder(firstElemDate,1).getNewElement);
            args.forEach(element =>{
                relDate = new Date(parseInt(element.dt_txt.slice(0,4)), parseInt(element.dt_txt.slice(5,7)), parseInt(element.dt_txt.slice(8,10)));
                if(element.dt_txt.slice(8,10)==firstElemDateUnproccesed)
                {
                    foreCastSection.appendChild(new ForecastElementBuilder(element).getNewElement);
                    }else{
                    firstElemDateUnproccesed=element.dt_txt.slice(8,10);
                    foreCastSection.appendChild(new ForecastSecondaryHeaderBuilder(relDate).getNewElement);
                }
            });
        }
    }
}