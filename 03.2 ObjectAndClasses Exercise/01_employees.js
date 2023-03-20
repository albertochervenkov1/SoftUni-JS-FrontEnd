function solve(list){
    for (const item of list) {
        console.log(`Name: ${item} -- Personal Number: ${item.length}`);
    }
}

solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
])