import EventEmitter from "events";

export default class Logger extends EventEmitter {
    constructor() {
        super();
    }

    information(message) {
        this.emit('information', message);
    }

    warning(message) {
        this.emit('warning', message);
    }

    errors(message) {
        this.emit('errors', message);
    }
}