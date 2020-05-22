const Priority = require('./Priority');

class Order {
    constructor(data) {
        this._priority = new Priority(data);
    }

    getPriority() {
        return this._priority;
    }

    getPriorityString() {
        return this._priority.toString();
    }

    setPriority(aString) {
        this._priority = new Priority(aString);
    }
}

module.exports = Order;

