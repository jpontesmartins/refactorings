

class Person {

    getName() { return this._name; }

    setName(arg) { this._name = arg; }

    getTelephoneNumber() { return `(${this.officeAreaCode}) ${this.officeNumber}`; }

    getOfficeAreaCode() { return this._officeAreaCode; }

    setOfficeAreaCode(arg) { this._officeAreaCode= arg; }

    getOfficeNumber() { return this._officeNumber; }

    setOfficeNumber(arg) { this._officeNumber = arg; }

}

const person = new Person();
person.setName("Fulano");
person.setOfficeAreaCode("00");
person.setOfficeNumber("1234-5678");

console.log(person);