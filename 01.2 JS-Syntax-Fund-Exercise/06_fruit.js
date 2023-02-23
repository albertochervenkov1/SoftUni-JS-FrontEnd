function priceOfFruit (fruit, grams, price_per_kg){
    let kilograms=grams/1000;
    let total_price = kilograms*price_per_kg;

    console.log(`I need \$${total_price.toFixed(2)} to buy ${kilograms.toFixed(2)} kilograms ${fruit}.`)
}