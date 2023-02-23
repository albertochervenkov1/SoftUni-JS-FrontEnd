function solve(input){
    let result;
    if (typeof(input)=='number') {
        result=Math.pow(input, 2)*Math.PI;
        console.log(input.toFixed(2));
    }
    else{
        console.log(`We can not calculate the circle,area beacuse we recieve a ${typeof(input)}`);
    }
}
