function KelvinToCelsiusFormula(kTemperature){
    const KelvinToCelsiusDifference=273.15;
    let cTemperature=0;
    this.cTemperature=kTemperature-KelvinToCelsiusDifference;
    cTemperature=Math.round(this.cTemperature);
    return cTemperature;
}