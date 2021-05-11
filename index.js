const fs = require('fs');


// Synchronous file operation
const textIn = fs.readFileSync('./dev-data/input.txt', 'utf-8');
console.log(textIn);


const textOut = fs.writeFileSync('./dev-data/output.txt', `Update Avocado details: ${textIn} at ${Date.now()}`);
console.log("Written: " );

// Asynchronous file operation

fs.readFile('./dev-data/input-name.txt', 'utf-8', (error, data) => {
    if (error) return console.log("1: ", error);
    fs.readFile(`./dev-data/${data}`, 'utf-8', (error1, data1) => {
        if (error) return console.log("2: ", error1);
        fs.writeFile('./dev-data/output-async.txt', `${data1}`, () => {
            console.log("Written...");
        })
    })
});