const Order = require('./order-priority');

//use/callers
const o1 = new Order("high");
const o2 = new Order("rush");
const o3 = new Order("low");

const orders = [];
orders.push(o1);
orders.push(o2);
orders.push(o3);

//alteracao a ser realizada no priority
const highPriorityCount = orders.filter(o => "high" === o.getPriority() || "rush" === o.getPriority()).length;

module.exports = {
    highPriorityCount
}
