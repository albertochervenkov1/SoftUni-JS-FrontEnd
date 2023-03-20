function solve(str){
    str = str.split(' ');
    let output = new Map()

    for (let word of str) {
        word = word.toLowerCase()
        if (output.has(word)) {
            output.set(word, output.get(word) + 1)
        } else {
            output.set(word, 1)
        }
    }
    for (item of output) {
        if (item[1] % 2 !== 0) {
            process.stdout.write(`${item[0]} `)
        }
    }
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')