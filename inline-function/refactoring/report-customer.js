// Refatorações

// Inline Function

// Objetivo: remove a redundância quando a leitura do trecho de código diz o mesmo que a função.


function reportLines(aCustomer) {
    const lines = [];
    lines.push(["name", aCustomer.name]);
    lines.push(["location", aCustomer.location]);
    return lines;
}

module.exports = {
    reportLines
}

