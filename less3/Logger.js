import path from 'node:path';
import fs  from 'node:fs';

const __dirname = import.meta.dirname;

export default class Logger {

    constructor(logFileName = 'log.txt') {
        this._logFilePath = path.resolve(__dirname, 'logs', logFileName);
    }

    logSync(level, message) {
        const time = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        const formattedMessage = '[' + time + '] [' + level + ']: ' + message + '\n';
        fs.appendFileSync(this._logFilePath, formattedMessage, (err) => {
            if (err) {
                console.error('Something went wrong', err);
            } else {
                console.log('Sucess.');
            }
        });
    }

    infoSync(message) {
        this.logSync('INFO', message);
    }

    errSync(message) {
        this.logSync('ERROR', message);
    }

    warnSync(message) {
        this.logSync('WARNING', message);
    }

    logAsync(level, message) {
        const time = new Date().toLocaleDateString() + " " + new Date().toLocaleTimeString();
        const formattedMessage = '[' + time + '] [' + level + ']: ' + message + '\n';
        fs.appendFile(this._logFilePath, formattedMessage, (err) => {
            if (err) {
                console.error('Something went wrong', err);
            } else {
                console.log('Sucess.');
            }
        });
    }

    info(message) {
        this.logAsync('INFO', message);
    }

    err(message) {
        this.logAsync('ERROR', message);
    }

    warn(message) {
        this.logAsync('WARNING', message);
    }

    showLog(){
        fs.readFile(this._logFilePath, (err, content) => {   
            if(err){
                console.error("Error");
                process.exit();
            }
            console.log(content.toString());
        })
    }
}
