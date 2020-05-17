// Refatoração

// replace Query with Parameter

// Objetivo: Para remover algo do escopo e da responsabilidade da função

class HeatingPlan {
    constructor(min, max) {
        this._min = min;
        this._max = max;
    }

    getTargetTemperature(selectedTemperature) {
        if (selectedTemperature > this._max) {
            return this._max;
        } else if (selectedTemperature < this._min) {
            return this._min;
        } else {
            return selectedTemperature;
        }
    }
}

module.exports = {
    HeatingPlan
}