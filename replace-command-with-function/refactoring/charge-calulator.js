// Refatoração

// Replace command with function

// Objetivo: simplificar

class ChargeCalculator {
    constructor(customer, usage, provider) {
        this._customer = customer;
        this._usage = usage;
        this._provider = provider;
    }

    getBaseCharge() {
        return this._customer.baseRate * this._usage;
    }

    getCharge() {
        return this.getBaseCharge() + this._provider.connectionCharge;
    }
}

module.exports = ChargeCalculator;
