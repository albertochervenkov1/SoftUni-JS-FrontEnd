function cooking(...input){
    let number = Number(input[0]);
    for (let i=1; i<input.length; i++){
        let action = input[i];
        switch (action){
            case ('chop'): console.log(number/=2); break;
            case ('dice'): console.log(number**=1/2); break;
            case ('spice'): console.log(number+=1); break;
            case('bake'): console.log(number*=3); break;
            case('fillet'): console.log(number*=0.8); break;
        }
    }
}