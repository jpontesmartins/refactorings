const orderDiscount = require("./order-discount");
const Order = orderDiscount.Order;

test('test', () => {
    //arrange
    const order = new Order();
    //act
    const finalPrice = order.getFinalPrice();

    //assert
    expect(finalPrice).toBe(400);

});