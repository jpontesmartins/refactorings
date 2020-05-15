// Refatorações

// Separate Query from Modifier

// Objetivo: remover efeitos colaterais deixando uma função pura

// Dica: qualquer função quer retorne algum valor 
// não deve ter efeitos colaterais.

// 0. ler o código
// - dispara o alarme E retorna o nome do criminoso;
// - efeito colateral: dispara alarme;
// - separar o RETORNO do ALARME; 

// 1, copiar funcao
// 2. remover efeitos colaterais da nova funcao


//modifier
function alertForMiscreant(people) {
    if (findMiscreant(people) !== "") {
        setOffAlarms();
    }
}

//query
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
    console.log("Alarm! Alarm!");
}

module.exports = {
    alertForMiscreant,
    findMiscreant
}


