const { Person, TelephoneNumber } = require('./change-reference-to-value');


describe('change reference to value', () => {
    it('person has a telephone number', () => {
        const person = new Person("00","1234-5678");
        expect(person.getTelephoneNumber().toString()).toBe("(00) 1234-5678");
    });

    it('change reference to value - immutable', () => {
        const telephone1 = new TelephoneNumber("00", "1234-5678");
        const telephone2 = new TelephoneNumber("00", "1234-5678");

        expect(telephone1.equals(telephone2)).toBe(true);
    });
});