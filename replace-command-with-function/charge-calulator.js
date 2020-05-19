// Refatoração

// Replace commando with function

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

const customer = {
    baseRate: 1
}
const usage = 2;

const provider = {
    connectionCharge: 3
}

const monthCharge = new ChargeCalculator(customer, usage, provider).getCharge();
console.log(monthCharge);



