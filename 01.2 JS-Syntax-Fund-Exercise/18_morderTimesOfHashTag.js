function hashTag (text){
    let arrText = text.split(' ');
    let specialWords=[];

    for (let word of arrText){
        if (word.startsWith('#')){
            let pureWord = word.slice(1);
            if (containsOnlyLetters(pureWord)){
                specialWords.push(pureWord);
            }
        }
    }

    function containsOnlyLetters(word){
        const pattern = /^[a-zA-Z]+$/;
        return pattern.test(word);
    }

    for (let word of specialWords){
        console.log(word);
    }
}