// Refatoração

// Introduce Parameter Object

// Objetivo: torna explícita a relação entre os dados do item

function readingOutsideRange(station, range) {
    return station.readings.filter(r => r.temp < range.getMin() || r.temp > range.getMax());
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
}


module.exports = {
    NumberRange,
    readingOutsideRange
}

