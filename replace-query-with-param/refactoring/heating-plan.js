// Refatoração

// replace Query with Parameter

// Objetivo: Para remover algo do escopo e da responsabilidade da função



// Exemplo de alguma dependência usada pela classe HeatingPlan
// obs..: É até mais trabalhoso de criar o teste... 
const thermostat = {
    selectedTemperature: 15,
    currentTemperature: 16
}

class HeatingPlan {
    constructor(min, max) {
        this._min = min;
        this._max = max;
    }

    getTargetTemperature() {
        if (thermostat.selectedTemperature > this._max) {
            return this._max;
        } else if (thermostat.selectedTemperature < this._min) {
            return this._min;
        } else {
            return thermostat.selectedTemperature;
        }
    }
}

module.exports = {
    HeatingPlan,
    caller
}

function setToHeat() {
    console.log("heat++");
}
function setToCool() {
    console.log("cool++");
}
function setOff() {
    console.log("nothing");
}

function caller() {
    const thePlan = new HeatingPlan(10, 20);
    console.log(thePlan);
    console.log(thePlan.getTargetTemperature());

    if (thePlan.getTargetTemperature() > thermostat.currentTemperature) {
        setToHeat();
    } else if (thePlan.getTargetTemperature() < thermostat.currentTemperature) {
        setToCool();
    } else {
        setOff();
    }
}
