import path from 'node:path';
import fs  from 'node:fs';

const __dirname = import.meta.dirname;

const filePath = path.resolve(__dirname, 'logs',"log.txt");

console.log(filePath.toString());

const content = fs.readFileSync(filePath, 'utf-8');

const lines = content.split('\n').length;
console.log("There are " + lines + " lines");