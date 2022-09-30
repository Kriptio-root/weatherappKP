function unixTimeToNormal(unixTime){
    const milliseconds=unixTime*1000;
    const dateObject=new Date(milliseconds).toString().split(' ', 5);
    let time=dateObject[4].split(':',3);
    time = time[0]+':'+time[2];
    return time;
}
