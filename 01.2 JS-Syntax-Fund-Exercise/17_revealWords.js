function revealWords(searchWords, text){
    let arrWord = searchWords.split(', ');
    let arrText = text.split(' ');
    for (let word of arrWord){
        for (let i=0; i<arrText.length; i++){
            if (arrText[i].includes('*') && arrText[i].length===word.length){
                arrText[i]=word;
                break;
            }
        }
    }
    let result='';
    for (let word of arrText){
        result+=word+' ';
    }
    console.log(result);
}