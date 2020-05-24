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
    // act
    extractFunction.printOwing(invoice);

    // assert



});