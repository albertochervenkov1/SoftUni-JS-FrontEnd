function solve(n, num){
    let sum=0;
    let result="";
    for (let i = n; i <= num; i++) {
        sum+=i;
        result+=`${i} `;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}