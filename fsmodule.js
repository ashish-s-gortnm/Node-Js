const fs = require('fs'); 

fs.readFile('file.txt', 'utf8', (err, data)=>{
    if(err) console.log(err);
    else console.log(data);
})

const a = fs.readFileSync('file.txt')

console.log(a.toString())

// fs.writeFile('file2.txt', "This is a data", ()=>{
//     console.log("Written to the file")
// });

fs.writeFileSync('file2.txt', "This is a second file.")
b = fs.readFileSync('file2.txt' );
console.log(b.toString())

console.log("Finished reading file.")