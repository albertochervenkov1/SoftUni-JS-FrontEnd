function solve(n1, n2, n3){
    let result=Number.MAX_SAFE_INTEGER;
    if (n1<result) {
        result=n1;
    }
    if (n2<result) {
        result=n2
    }
    if(n3<result){
        result=n3;
    }
    console.log(result);
}
function solve2(...numbers){
    console.log(Math.min(...numbers));
}