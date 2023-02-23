function vacation (countPeople, groupType, dayOfWeek){
    let price=0;
    switch(groupType){
        case ('Students'):
            switch(dayOfWeek){
                case ('Friday'): price=8.45; break; 
                case ('Saturday'): price=9.80; break; 
                case ('Sunday'): price=10.46; break; 
            } break;
        case ('Business'):
            switch(dayOfWeek){
                case ('Friday'): price=10.90; break; 
                case ('Saturday'): price=15.60; break; 
                case ('Sunday'): price=16; break; 
            } break;
        case ('Regular'):
        switch(dayOfWeek){
            case ('Friday'): price=15; break; 
            case ('Saturday'): price=20; break; 
            case ('Sunday'): price=22.50; break; 
        } break;
    }
    let total_price = countPeople*price;
    if (groupType==='Students' && countPeople>=30){
        total_price*=0.85;
    } else if (groupType==='Business' && countPeople>=100) {
        total_price-=10*price;
    } else if (groupType==='Regular' && countPeople>=10 && countPeople<=20){
        total_price*=0.95;
    }

    console.log(`Total price: ${total_price.toFixed(2)}`)
}