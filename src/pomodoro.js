let timeToString = (time) =>{
    let minute = parseInt(time / 60);
    let second = parseInt(time % 60);
    
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;


    if(second === 0)
        second = "00";
    if(minute === 0)
        minute = "00";

    return `${minute}:${second}`;
}

module.exports = (getTime) => {
    time = 25 * 60;
    timer = setInterval(_ => {

        getTime(timeToString(time--));

        if( time === -1 )
            clearInterval(timer);
    }, 1000);
}