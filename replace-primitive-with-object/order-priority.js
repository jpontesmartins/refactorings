
class Order {
    constructor(data) {
        this.priority = data;
    }
}

//use/callers
const o1 = new Order("high");
const o2 = new Order("rush");
const o3 = new Order("low");

const orders = [];
orders.push(o1);
orders.push(o2);
orders.push(o3);

const highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;

console.log(highPriorityCount);

