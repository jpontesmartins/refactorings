const Order = require('./Order');
const Priority = require('./Priority');

// callers
const o1 = new Order("high");
const o2 = new Order("rush");
const o3 = new Order("low");
const o4 = new Order("low");

const orders = [];
orders.push(o1);
orders.push(o2);
orders.push(o3);
orders.push(o4);

const highPriorityCount = orders.filter(order => order.getPriority().higherThan(new Priority("normal"))).length;

module.exports = {
    highPriorityCount
}


