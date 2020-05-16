const security = require("./alert-for-miscreant");

test('alert for miscreant', ()=> {
    
    const people = ["Steve","John","Peter"];
    const found = security.findMiscreant(people);
    security.setOffAlarms();

    expect(found).toBe("John");

});





