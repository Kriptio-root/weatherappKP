function buildIconRequest(icon,iconFormat){
    if (iconFormat==2 ){
        iconFormat="@2x.png";
    }
    else{
        iconFormat=".png";
    }
   let iconLink="http://openweathermap.org/img/wn/"+icon+iconFormat;
    return iconLink;
}