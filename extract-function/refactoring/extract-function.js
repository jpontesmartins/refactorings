// Refatoração

// Extract Function

// Objetivo: 

// No variables out of scope

function printOwing(invoice) {
    let outstanding = 0;

    printBanner();

    //calculate outstanding
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    //record due date
    recordDueDate(invoice);

    //print details
    printDetails(invoice, outstanding);

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
