function reversedChars(...chars){
    let result ='';
    for (let ch of chars){
        result+=ch;
    }
    let output='';
    for (let i=result.length-1; i>=0; i--){
        output+=result[i]+' ';
    }

    console.log(output);
}