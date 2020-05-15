// Refatorações

// Inline Function

// Objetivo: remove a redundância quando a leitura do trecho de código diz o mesmo que a função.


function reportLines(aCustomer) {
    const lines = [];
    gatherCustomerData(lines, aCustomer);
    return lines;
}

function gatherCustomerData(out, aCustomer) {
    out.push(["name", aCustomer.name]);
    out.push(["location", aCustomer.location]);
}

const aCustomer = {
    name: "John",
    location: "City"
}

console.log(reportLines(aCustomer));







