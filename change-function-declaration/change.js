// Refatoração

// Change Function Declaration

// Objetivo: Mudar a assinatura de uma função (nome, parâmetros, etc)

// Renaming a Function (simple mechanics) - apenas altera o nome
// Renaming a Function (migration mechanics) - cria uma nova função sendo chamada pela antiga
// Adding a parameter
// Changing a parameter to one of its properties

// Renaming a Function (migration mechanics)
function circum(radius) {
    return 2 * Math.PI * radius;
}

// Adding a parameter
class Book {
    addReservation(customer) {
        this._reservations.push(customer);
    }
}

// Changing a parameter to one of its properties
function inNewEngland(aCustomer){
    return ["MA","CT","ME"].includes(aCustomer.address.state);
}

const customer1 = {
    address: {
        state: "MA"
    }
}
const customer2 = {
    address: {
        state: "CT"
    }
}
const customer3 = {
    address: {
        state: "AA"
    }
}
const someCustomers = [customer1, customer2, customer3];

const newEnglanders = someCustomers.filter(customer => inNewEngland(customer));






