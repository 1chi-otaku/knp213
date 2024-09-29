import path from "node:path";
import fs from "node:fs";
import { Transform, pipeline } from "node:stream"; 
import { setTimeout } from "node:timers/promises"; 

const __dirname = path.resolve(); 
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");
const pathToFile2 = path.join(pathToFolder, "data2.txt");

const readStream = fs.createReadStream(pathToFile, { encoding: 'utf8' });

readStream.on('data', async (chunk) => {
    for (const char of chunk) {
        console.log(char); 
        await setTimeout(100); 
    }

    await setTimeout(3000); 

});

const writeStream = fs.createWriteStream(pathToFile2, {
    encoding: 'utf8',
});

const upperCaseTransform = new Transform({
    transform(chunk, encoding, callback) {
        callback(null, chunk.toString().toUpperCase());
    },
});

readStream.on('data', (chunk) => {
    let i = 0;
    function printChar() {
        if (i < chunk.length) {
            process.stdout.write(chunk[i]);
            i++;
            setTimeout(printChar, 100);
        }
    }
    printChar();
});

readStream.pipe(upperCaseTransform).pipe(writeStream);

//r
