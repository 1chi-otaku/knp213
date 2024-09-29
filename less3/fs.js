import path from 'node:path'
import fs from "node:fs";

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
//write - запись = append - перезапись.

const shortFilePath = path.resolve(__dirname, 'files', 'short.txt');
const shortNewFilePath = path.resolve(__dirname, 'files', 'short_new.txt');
const bigFilePath = path.resolve(__dirname, 'files', 'big.txt');
const theBiggestFilePath = path.resolve(__dirname, 'files', 'thebiggest.txt');


const content = fs.readFileSync(shortFilePath, { encoding: 'utf-8' });

//console.log(content);

//fs.writeFile( path.resolve(__dirname, 'files', 'new_short.txt'), content);


fs.readFile(shortFilePath, (err, content) => {   //Async Read
    if(err){
        console.error("Error");
        process.exit();
    }
    console.log(content.toString());
})


fs.readFile(shortFilePath, (err, content) => {   //Async Write Перезапись
    if(err){
        console.error("Error");
        process.exit();
    }
    fs.writeFile(shortNewFilePath, content, (err) =>{
        if(err) console.log(err);
        else console.log("success");
    })
})
