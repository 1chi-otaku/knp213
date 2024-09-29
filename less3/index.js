import path from 'node:path'

const __filename = import.meta.filename;
const __dirname = import.meta.dirname;

console.log(path.sep); // \ system seperator.
console.log(path.extname(__filename));
console.log(path.parse(__filename)); //Полностью объект {root, dir, base, extention, name}.
console.log(path.join("users","logs","log.dat")); // users\logs\log.dat. Клеит и фиксит если что-то неправильно.
console.log(path.resolve(__dirname, "users", "logs")); 
console.log(path.isAbsolute(__dirname)); //Абсолютный путь должен начинать с корня диска С, наппример.
console.log(path.dirname(__filename));