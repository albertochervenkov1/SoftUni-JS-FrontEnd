function sumDigits (number){
    let numberAsString = number.toString();
    let sum=0;
    for (let num of numberAsString){
        sum+=Number(num);
    }
    console.log(sum);
}
