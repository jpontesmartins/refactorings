// Refatoração

// Replace Primitive with Object

// Objetivo: Transformar um dado de um tipo primitivo em um objeto mais complexo, contendo seus próprios comportamentos

const Priority = require('./Priority');

class Order {
    constructor(priorityLevel) {
        this._priority = new Priority(priorityLevel);
    }

    getPriority() {
        return this._priority;
    }


}
module.exports = Order;