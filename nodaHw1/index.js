import EventEmitter from "events";
import Dice from "./Dice.js";
import Logger from "./Logger.js"
const emitter = new EventEmitter();

console.log("1 - - - - - - - -  - - - - ")
emitter.on('click', () => {
    console.log('H1');
});
emitter.on('click', () => {
    console.log('H2');
});
emitter.on('click', () => {
    console.log('H3');
});
emitter.emit('click');

console.log("2 - - - - - - - -  - - - - ")


function error2() {
    console.log('Error2');
}

emitter.on('error', () => {
    console.log('Error 1');
});

emitter.on('error', error2);

emitter.on('error', () => {
    console.log('Error 3');
});
emitter.emit('error');

emitter.removeListener('error', error2);


emitter.emit('error');

console.log("3 - - - - - - - -  - - - - ")

const dice = new Dice();
dice.on('rolled', (result) => {
    console.log('Dice roll ' + result);
});


dice.roll();
dice.roll();
dice.roll();

console.log("4 - - - - - - - -  - - - - ")

const logger = new Logger();


logger.on('information', (message) => {
    console.log(message); 
});

logger.on('warning', (message) => {
    console.warn(message); 
});

logger.on('errors', (message) => {
    console.error(message); 
});


logger.information('This is an informational message.');
logger.warning('This is a warning message.');
logger.errors('This is an error message!!');