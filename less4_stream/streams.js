import path from "node:path";
import fs from "node:fs";

const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const readStream = fs.createReadStream(pathToFile);

readStream.on('data', (chunk) =>{
    console.log('\n' +"chunk starts...." + '\n');
    console.log(chunk);
    console.log("chunk ends....")
})