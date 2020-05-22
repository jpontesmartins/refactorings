
class Order {
    constructor(data) {
        this._priority = data;
    }

    getPriority() {
        return this._priority;
    }

    setPriority(aString) {
        this._priority = aString;
    }
}

module.exports = Order;

