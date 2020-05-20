const { charge } = require('./charge-calulator');

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
    const monthCharge = charge(customer, usage, provider);
    
    //assert
    expect(monthCharge).toBe(5);

});
