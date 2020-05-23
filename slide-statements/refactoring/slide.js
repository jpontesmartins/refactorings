// Refatoração

// Slide Statements

// Objetivo: O códico fica mais legível quando coisas relacionadas ficam próximas 

const pricingPlan = retrievePricingPlan();
const order = retrieveOrder();

const units = order.units;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
let discount = discountableUnits * pricingPlan.discountFactor;

if (order.isRepeat) discount += 20;
const baseCharge = pricingPlan.base;
const chargePerUnit = pricingPlan.unit;
let charge = baseCharge + units * chargePerUnit;
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



//with conditionals

let allocatedResources = [];
let availableResources = [];

let result;
if (availableResources.length === 0) {
    result = createResource();
    allocatedResources.push(result);
} else {
    result = availableResources.pop();
    allocatedResources.push(result);
}

console.log("allocatedResources");
console.log(allocatedResources);
console.log("availableResources");
console.log(availableResources);

function createResource() {
    return "resource created!";
}

