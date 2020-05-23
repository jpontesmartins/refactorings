// Refatoração

// Slide Statements

// Objetivo: O códico fica mais legível quando coisas relacionadas ficam próximas 

const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const units = order.units;
let discount;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);


function retrievePricingPlan() {
    return {
        base: 100,
        unit: 1,
        discountThreshold: 1,
        discountFactor: 2
    };
}


function retrieveOrder() {
    return {
        units: 1,
        isRepeat: true
    }
}

function chargeOrder(charge) {
    console.log('charge order ' + charge);

}

module.exports = {
    charge
}