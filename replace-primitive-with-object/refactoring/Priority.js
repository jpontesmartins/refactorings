
class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;

        if (Priority.legalValues().includes(value)) {
            this._value = value;
        } else {
            throw new Error(`${value} is invalid`);
        }
    }

    toString() {
        return this._value;
    }

    _getIndex() {
        return Priority.legalValues().findIndex(level => level === this._value)

    }
    static legalValues() {
        return ['low', 'normal', 'high', 'rush'];
    }

    equals(other) {
        return this._getIndex() == other._getIndex();
    }

    higherThan(other) {
        return this._getIndex() > other._getIndex();
    }

    lowerThan(other) {
        return this._getIndex() < other._getIndex();
    }

}

module.exports = Priority;