const heatingPlan = require("./heating-plan");
const HeatingPlan = heatingPlan.HeatingPlan;

test('heating plan ',() => {
    // const thePlan = new HeatingPlan(10, 20);
    const thePlan2 = new HeatingPlan(1, 5);

    //eh até ruim de testar por causa da dependência...
    
    console.log(thePlan2.getTargetTemperature());
    console.log("thePlan2.");

    // heatingPlan.caller();

    expect(1).toBe(2);
});

