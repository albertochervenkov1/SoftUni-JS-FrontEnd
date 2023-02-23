function func(number){
    AllDigitsSame(number);
    sumDigits(number);

    function AllDigitsSame(number){
        let numToString=number.toString();
        let firstDigit=numToString[0];
        for (let i=1; i<numToString.length; i++){
            if(numToString[i]!==firstDigit){
                console.log('false');
                return;
            }     
        }
        console.log('true');

    }
    function sumDigits(number){
        var total_sum=0;
        while (number){
            total_sum+=number%10;
            number=Math.floor(number/10);
        }
        console.log(total_sum);
    }
}