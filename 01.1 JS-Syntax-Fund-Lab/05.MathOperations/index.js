function solve(num1, num2, txt){
    switch (txt) {
        case '+':
            console.log(num1+num2)
            break;
        case '-':
                console.log(num1-num2)
            break;
        case '*':
                console.log(num1*num2)
            break;
            case '/':
                console.log(num1/num2)
            break;
            case '%':
                console.log(num1%num2)
            break;
            case '**':
                console.log(num1**num2)
            break;
        default:
            break;
    }
}