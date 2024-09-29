import "dotenv/config";
import EventEmitter from "events";
import Buyer from "./Buyer.js";
// const start = performance.now();
// console.log(process.env.APP_TITLE);


// console.log((performance.now() - start) / 1000);



// console.log('start')

// setTimeout(() => {
//     console.log('setTimeout')
    
// }, 0);

// Promise.resolve().then(() => {
//     console.log("promise")
// });
// queueMicrotask(()  =>{
//     console.log("microtask")
// })

// console.log('end')




const emitter = new EventEmitter();

emitter.setMaxListeners(100);

// const buyers = [
//     new Buyer('Serhii', 'Serhii@gmail.com'),
//     new Buyer('Tom', 'tom@gmail.com'),
//     new Buyer('Serhii2', 'Serhii2@gmail.com'),
//     new Buyer('Serhii3', 'Serhii3@gmail.com'),
// ];
// for (const buyer of buyers) {
//     emitter.on('Sale', () => buyer.notifyAboutSale());
// }


const listener1 = () =>{
    console.log("i am 1")
}

const listener2 = () =>{
    console.log("i am 2")
}

const listener3 = () =>{
    console.log("i am 3")
}

const listener4 = () =>{
    console.log("i am 4")
}

emitter.on('click', () => listener1());
emitter.on('click', () => listener2());
emitter.on('click', () => listener3());

console.log(emitter.getMaxListeners());
emitter.emit('click');

emitter.off('click', listener1);

emitter.emit('click');

console.log(emitter.eventNames());