// Refatoração

// Introduce Parameter Object

// Objetivo: torna explícita a relação entre os dados do item

function readingOutsideRange(station, range) {
    return station.readings.filter(reading => range.contains(reading.temp));
}


class NumberRange {
    constructor(min, max) {
        this._data = {
            min: min,
            max: max
        }
    }
    getMin() { return this._data.min; }

    getMax() { return this._data.max; }

    contains(temp) {
        return temp < this.getMin() || temp > this.getMax();
    }
}


module.exports = {
    NumberRange,
    readingOutsideRange
}