// Refatorações

// Separate Query from Modifier

// Objetivo: remover efeitos colaterais deixando uma função pura

// Dica: qualquer função quer retorne algum valor 
// não deve ter efeitos colaterais.

function alertForMiscreant(people) {
    for (const p of people) {
        if (p === "Don") {
            setOffAlarms();
            return "Don";
        }
        if (p === "John") {
            setOffAlarms();
            return "John";
        }
    }
    return "";
}


function setOffAlarms() {
    console.log("Alarm! Alarm!");
}


