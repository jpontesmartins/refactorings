const security = require("./sqfm");

//arrange
//act
//assert
test('should alert for miscreant', () => {
    const people = ["Steve","John","Peter"];
    
    const alert = security.findMiscreant(people);
    security.alertForMiscreant(people);
    
    expect(alert).toBe("John");

})