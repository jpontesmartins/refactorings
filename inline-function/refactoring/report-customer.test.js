const report = require("./report-customer");

test(' inline-function ', ()=> {
    //arrange
    const aCustomer = {
        name: "John",
        location: "City"
    }

    //act
    const lines = report.reportLines(aCustomer);
    
    //assert
    expect(lines[0]).toEqual(['name','John']);
    expect(lines[1]).toEqual(['location','City']);
    


});


