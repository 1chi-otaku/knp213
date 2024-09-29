import path from "node:path";
import fs from "node:fs";
import { rejects } from "node:assert";

const __dirname = import.meta.dirname;
const pathToFolder = path.join(__dirname, "files");
const pathToFile = path.join(pathToFolder, "data.txt");



const buffer = Buffer.from("NODEJS PROGRAMMING");

const createFolder = () => {
    return new Promise((resolve, reject) => {
      fs.mkdir(pathToFolder, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  };
const writeFileAsync = (path, data) => {
    return new Promise((resolve, reject) => {
      fs.writeFile(path, data, (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  };

  const readFileAsync = () => {
    return new Promise((resolve, reject) => {
      fs.readFile(pathToFile, 'utf8', (err, data) => {
        if (err) reject(err);
        else resolve(data);
      });
    });
  };


  async function asyncawait() {
    await createFolder();
    await writeFileAsync(pathToFile, buffer);
    const fileContent = await readFileAsync();
    console.log(fileContent);
  }

  asyncawait();
  
  
