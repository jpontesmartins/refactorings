// Refatoração

// Extract Class

// Objetivo: Separação de responsabilidades


class Person {

    getName() { return this._name; }

    setName(arg) { this._name = arg; }

    getTelephoneNumber() { return `(${this.officeAreaCode}) ${this.officeNumber}`; }

    setOfficeAreaCode(arg) { this._officeAreaCode= arg; }
    
    getOfficeAreaCode() { return this._officeAreaCode; }

    setOfficeNumber(arg) { this._officeNumber = arg; }
    
    getOfficeNumber() { return this._officeNumber; }
    
}

const person = new Person();
person.setName("Fulano");
person.setOfficeAreaCode("00");
person.setOfficeNumber("1234-5678");

console.log(person);