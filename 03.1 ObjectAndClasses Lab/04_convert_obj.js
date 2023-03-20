function solve(text){
    let personAsJSON = JSON.parse(text);
    for (let key in personAsJSON){
        console.log(`${key}: ${personAsJSON[key]}`);
    }
}