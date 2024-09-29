import EventEmitter from "events";

export default class Dice extends EventEmitter {
    constructor() {
        super();
    }
    roll() {
        let result = Math.floor(Math.random() * 6) + 1;
        this.emit('rolled', result);
    }
}