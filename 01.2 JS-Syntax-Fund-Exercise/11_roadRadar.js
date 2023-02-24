function roadRadar (speed, area){
    let speed_limit_motorway= 130;
    let speed_limit_interstate= 90;
    let speed_limit_city = 50;
    let speed_limit_residential = 20;

    switch (area){
        case ('city'): checkSpeedOfArea(speed, speed_limit_city); break;
        case ('residential'): checkSpeedOfArea(speed, speed_limit_residential); break;
        case ('interstate'): checkSpeedOfArea (speed, speed_limit_interstate); break;
        case ('motorway'): checkSpeedOfArea(speed, speed_limit_motorway); break;
    }
    function checkSpeedOfArea(speed, speed_limit){
        if (speed<=speed_limit){
            console.log(`Driving ${speed} km/h in a ${speed_limit} zone`);
        } else {
            let diff=Math.abs(speed - speed_limit);
            let status_speeding=speedStatus(diff);
            console.log(`The speed is ${diff} km/h faster than the allowed speed of ${speed_limit} - ${status_speeding}`)
        };

    }
    function speedStatus(diff){
        if (diff<=20){
            return 'speeding';
        }else if (diff<=40){
            return 'excessive speeding';
        } else {
            return 'reckless driving';
        }
    }
}