function solve(product, n){
    switch (product) {
        case "coffee": console.log(`${(n*1.50).toFixed(2)}`); break;
        case "water": console.log(`${(n*1.00).toFixed(2)}`); break;
        case "coke": console.log(`${(n*1.40).toFixed(2)}`); break;
        case "snacks": console.log(`${(n*2.00).toFixed(2)}`); break;
    }
}