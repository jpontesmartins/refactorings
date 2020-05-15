//remover efeitos colaterais..

// "any function that returns a value 
// should not have observable side effects 
// - que command query sepparation"

// ao encontrar uma função que tenha
// efeitos colaterais,
// separar a LÓGICA da função de seus EFEITOS


//aqui está o que antes era efeito colateral
function alertForMiscreant(people) {
    if (findMiscreant(people) !== "") {
        setOffAlarms();
    }
}

//aqui está a função pura
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


function setOffAlarms() {
    console.log("alarm!");
}

module.exports = {
    alertForMiscreant,
    findMiscreant
}