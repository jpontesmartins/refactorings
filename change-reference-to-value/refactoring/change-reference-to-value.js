// Refatoração

// Change Reference to Value

// Objetivo: Transformar uma Entity em um Value Object (imutável)


class TelephoneNumber {
    constructor(areaCode, number) {
        this._areaCode = areaCode;
        this._number = number;
    }

    getAreaCode() { return this._areaCode; }
    getNumber() { return this._number; }

    toString() { return `(${this._areaCode}) ${this._number}`; }

    equals(other) {
        if (!(other instanceof TelephoneNumber)) return false;
        if (other.getAreaCode() === this._areaCode && other._number === this._number) {
            return true;
        }
        return false;
    }

}

class Person {
    constructor(areaCode, number) {
        this._telephoneNumber = new TelephoneNumber(areaCode, number);
    }

    getName() { return this._name; }
    setName(arg) { this._name = arg; }

    getTelephoneNumber() { return this._telephoneNumber; }

}

module.exports = {
    Person,
    TelephoneNumber
}
