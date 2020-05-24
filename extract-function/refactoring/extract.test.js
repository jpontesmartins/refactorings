const extractFunction = require('./extract-function');

test('extract function..', () => {
    // arrange
    const invoice = {
        orders: [{
            amount: 10
        }, {
            amount: 10
        }, {
            amount: 10
        }],
        customer: "Fulano",
    }
    // act (...esse mesmo ou ou outstanding? pois o resto é print...)
    extractFunction.printOwing(invoice);

    // assert



});