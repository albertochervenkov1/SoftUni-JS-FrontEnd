function solve(list){
    let output=new Map();

    for (const item of list) {
        let[name, number]=item.split(' ');
        if (output.has(name)) {
            output.set(name,number);
        }
        else{
            output.set(name,number);
        }
    }
    for (const key in output.entries) {
        console.log(`${key} -> ${output[key]}`);
    }
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)