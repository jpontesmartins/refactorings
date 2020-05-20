const ChargeCalculator = require('./charge-calulator');

test(' charge calculator', ()=> {
    //arrange
    const customer = {
        baseRate: 1
    }
    const usage = 2;
    const provider = {
        connectionCharge: 3
    }
    
    //act
    const monthCharge = new ChargeCalculator(customer, usage, provider).getCharge();
    
    //assert
    expect(monthCharge).toBe(5);

});
