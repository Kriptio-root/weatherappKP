function windDirectionCompas(windDeg){
    let windDirection='';
    if(windDeg==0)
    {
        windDirection='North'
    }
    else if(windDeg<45){
        windDirection='North-north-east'
    }
    else if (windDeg<90) {
        windDirection = "North-east-east"
    }
    else if (windDeg==90)
    {
        windDirection='East'
    }
    else if (windDeg<120)
    {
        windDirection='East-east-south'
    }
    else if (windDeg<180)
    {
        windDirection='East-south-south'
    }
    else if (windDeg==180)
    {
        windDirection='East-south-south'
    }
    else if (windDeg<220)
    {
        windDirection='South-south-west'
    }
    else if (windDeg<270)
    {
        windDirection='South-west-west'
    }
    else if (windDeg==270)
    {
        windDirection='South-west-west'
    }

    else if (windDeg<320)
    {
        windDirection='West-west-north'
    }
    else if (windDeg<359)
    {
        windDirection='West-north-north'
    }
    windDirection=windDirection+`(${windDeg})`;
    return windDirection;
}