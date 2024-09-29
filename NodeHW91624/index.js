import path from "node:path";
import fs from "node:fs";
import { setTimeout } from "node:timers/promises"; 

const __dirname = path.resolve(); 
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");

const readStream = fs.createReadStream(pathToFile, { encoding: 'utf8' });

readStream.on('data', async (chunk) => {
    for (const char of chunk) {
        console.log(char); 
        await setTimeout(100); 
    }
});
