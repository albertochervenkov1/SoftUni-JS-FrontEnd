function solve(input, num){
    let rotations=num%input.length;
    for (let i = 0; i < rotations; i++) {
        firstNum = input.shift();
        input.push(firstNum);
    }
    console.log(input.join(' '));
}
solve([32, 21, 61, 1], 4)