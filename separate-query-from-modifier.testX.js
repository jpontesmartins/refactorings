const security = require("./separate-query-from-modifier");

test('shoud return John',()=> {
    const people = ["Steve","John","Peter"];
    security.alertForMiscreant(people);
    expect(security.findMiscreant(people)).
        toBe("John");
});
