function substring(searchedWord, text){
    let arrText = text.split(' ');
    for (let word of arrText){
        if (containsWord(searchedWord.toLowerCase(), word.toLowerCase())){
            console.log(word.toLowerCase());
            return;
        }
    }
    console.log(`${searchedWord} not found!`)

    function containsWord(searchedWord,word){
        return word.includes(searchedWord) && word.length===searchedWord.length;
    }
}
