const report = require("./inline-function");

test('inline function', () => {
    //arrange
    const aCustomer = {
        name: "John",
        location: "City"
    }

    //act
    report.reportLines(aCustomer);

    //assert
    expect(aCustomer.name).toBe("John");
    expect(aCustomer.location).toBe("City");

});