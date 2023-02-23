function solve(text, word){
    let censored=text.replace(word, repeat(word));
    while (censored.includes(word)) {
        censored=censored.replace(word, repeat(word));
    }
    console.log()
}

solve('This is a word and it also is a sentence', 'a');