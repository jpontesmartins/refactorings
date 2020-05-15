// Refatorações

// Inline Function

// Objetivo: remove a redundância quando a leitura do trecho de código diz o mesmo que a função.


function rating(aDriver) {
    return moreThanFiveLateDeliveries(aDriver) ? 2 : 1;
}

function moreThanFiveLateDeliveries(aDriver) {
    return aDriver.numberOfLateDeliveries > 5;
}


const aDriver = {
    name: "John",
    numberOfLateDeliveries: 6
}

console.log(rating(aDriver));








