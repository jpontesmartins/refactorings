// Refatorações

// Separate Query from Modifier

// Objetivo: remover efeitos colaterais deixando uma função pura
// Dica: qualquer função quer retorne algum valor não deve ter efeitos colaterais.

function alertForMiscreant(people) {
    if (findMiscreant(people) !== "") {
        setOffAlarms();
    }
}

function setOffAlarms() {
    console.log("Alarm! Alarm!");
}

function findMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            return "Don";
        }
        if (p === "John") {
            return "John";
        }
    }
    return "";
}

module.exports = {
    alertForMiscreant,
    setOffAlarms,
    findMiscreant
}

