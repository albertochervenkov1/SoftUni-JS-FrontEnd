function solve(num, input){
    let newArr=[];
    for (let i = 0; i < num; i++) {
        newArr.push(input[i]);
    }
    let output="";
    for (let i = newArr.length-1; i >=0; i--) {
        output+=`${newArr[i]} `
    }
    console.log(output)
}
solve(3, [10, 20, 30, 40, 50])