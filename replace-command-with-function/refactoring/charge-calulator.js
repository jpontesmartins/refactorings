// Refatoração

// Replace command with function

// Objetivo: simplificar

function charge(customer, usage, provider) {
    const baseCharge = customer.baseRate * usage;
    return baseCharge + provider.connectionCharge;
}

module.exports = {
    charge
}

