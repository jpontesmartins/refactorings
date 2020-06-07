// Refatoração

// Extract Class

// Objetivo: Separação de responsabilidades


class TelephoneNumber {

    setAreaCode(arg) { this._areaCode = arg; }
    getAreaCode() { return this._areaCode; }

    getNumber() { return this._number; }
    setNumber(arg) { this._number = arg; }

    toString() { return `(${this._areaCode}) ${this._number}`; }

}

class Person {
    constructor() {
        this._telephoneNumber = new TelephoneNumber();
    }

    getName() { return this._name; }
    setName(arg) { this._name = arg; }

    getTelephoneNumber() { return this._telephoneNumber; }
}

const person = new Person();
person.setName("Fulano");
person.getTelephoneNumber().setAreaCode("00");
person.getTelephoneNumber().setNumber("1234-5678");

console.log(person.getTelephoneNumber().toString());
console.log(person);