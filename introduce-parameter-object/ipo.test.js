const temperatures = require("./ipo");

test(' introduce parameter object', () => {
    //arrange
    const station = {
        name: "ZB1",
        readings: [
            { temp: 47, time: "2020-05-05 20:00" },
            { temp: 53, time: "2020-05-05 20:00" },
            { temp: 58, time: "2020-05-05 20:00" },
            { temp: 53, time: "2020-05-05 20:00" },
            { temp: 51, time: "2020-05-05 20:00" }
        ]
    }
    const operationPlan = {
        temperatureFloor: 52,
        temperatureCeiling: 55
    }
    const range = new temperatures.NumberRange(
        operationPlan.temperatureFloor,
        operationPlan.temperatureCeiling
    );

    //act
    const alerts = temperatures.
        readingOutsideRange(station, range);

    // console.log(alerts);

    //assert
    expect(alerts[0].temp).toBe(47);
    expect(alerts[1].temp).toBe(58);
    expect(alerts[2].temp).toBe(51);
});


