// Refatoração

// Extract Function

// Objetivo: Extrair um trecho de código para uma função que tenha um nome auto explicativo

// No variables out of scope/ Using local variable/ Reassigning local variable

const Clock = require('./clock');

function printOwing(invoice) {
    
    printBanner();
    
    let outstanding = calculateOutstanding(invoice);

    recordDueDate(invoice);

    printDetails(invoice, outstanding);

}

function calculateOutstanding(invoice) {
    let outstanding = 0;
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }
    return outstanding;
}

function recordDueDate(invoice) {
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);
}

function printDetails(invoice, outstanding) {
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);
}

function printBanner() {
    console.log('-------------');
    console.log('customer owes');
    console.log('-------------');
}


module.exports = {
    printOwing
}