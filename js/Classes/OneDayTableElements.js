class OneDayTableElements {
    #newElement;
    constructor(JSONKey, JSONVal, trCssClass,tdCssClass) {
        this.#newElement = createNewElement(JSONKey, JSONVal, trCssClass, tdCssClass);

        function createNewElement(JSONKey, JSONVal, trCssClass, tdCssClass) {
            // console.log(JSONVal)
            JSONVal=JSONVal.substring(1, JSONVal.length-1);
            // console.log(typeof JSONVal);
            // console.log(JSONVal);
            let newlocalElement = document.createElement("tr");
            let firstTd=document.createElement('td');
            let secondTd=document.createElement('td');
            let mapsLink="https://www.google.com/maps/place/31%C2%B057'07.6%22N+31%C2%B057'07.6%22E/@" + JSONVal + ",10z/data=!4m5!3m4!1s0x0:0x0!8m2!3d31.9521!4d31.9521";
            newlocalElement.classList.add(trCssClass);
            newlocalElement.appendChild(firstTd)
            firstTd.classList.add(tdCssClass);
            firstTd.innerText = JSONKey;
            newlocalElement.appendChild(secondTd)
            secondTd.classList.add(tdCssClass);
            secondTd.innerText = JSONVal;
            if (firstTd.innerText=='Geo coords')
                secondTd.innerHTML = `<a class="link" href=${mapsLink}>[${JSONVal}]</a>`;
            return newlocalElement;
        }
    }
    get getNewElement(){
        return this.#newElement;
    }
}