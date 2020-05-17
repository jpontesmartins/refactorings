const heatingPlan = require("./heating-plan");
const HeatingPlan = heatingPlan.HeatingPlan;

test('max as 5, heating plan ',() => {
    const thePlan = new HeatingPlan(1, 5);
    const temperature = thePlan.getTargetTemperature(15);
    expect(temperature).toBe(5);
});

test('min as 1, heating plan ',() => {
    const thePlan = new HeatingPlan(1, 5);
    const temperature = thePlan.getTargetTemperature(-10);
    expect(temperature).toBe(1);
});

test('allowed range (1-5), heating plan ',() => {
    const thePlan = new HeatingPlan(1, 5);
    const temperature = thePlan.getTargetTemperature(3);
    expect(temperature).toBe(3);
});



