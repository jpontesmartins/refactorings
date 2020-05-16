// Refatoração

// Introduce Parameter Object

//Objetivo: torna explícita a relação entre os dados do item

const station = {
    nam: "ZB1",
    readings: [
        { temp: 47, time: "2020-05-05 20:00" },
        { temp: 53, time: "2020-05-05 20:00" },
        { temp: 58, time: "2020-05-05 20:00" },
        { temp: 53, time: "2020-05-05 20:00" },
        { temp: 51, time: "2020-05-05 20:00" }
    ]
}

function readingOutsideRange(station, min, max) {
    return station.readings.filter(r => r.temp < min || r.temp > max);
}

const operationPlan = {
    temperatureFloor: 52,
    temperatureCeiling: 55
}

const alerts = readingOutsideRange(station,
    operationPlan.temperatureFloor,
    operationPlan.temperatureCeiling);

console.log(alerts);



