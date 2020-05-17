const Order = require("./order-price");

test(' order price ', () => {
    const order = new Order(1000,2);
    expect(order.getPrice()).toBe(1900);
});