function circleArea(radius){
    let radiusType = typeof radius;
    if (radiusType ==='number'){
        let circleArea = Math.PI*radius**2;
        console.log(circleArea.toFixed(2));
        return;
    }
    console.log(`We can not calculate the circle area, because we receive a ${radiusType}.`);

}