// Refatoração

// Extract Function

// Objetivo: Extrair um trecho de código para uma função que tenha um nome auto explicativo

// No variables out of scope/ Using local variable/ Reassigning local variable

function printOwing(invoice) {
    let outstanding = 0;

    console.log('-------------');
    console.log('customer owes');
    console.log('-------------');

    //calculate outstanding
    for (const o of invoice.orders) {
        outstanding += o.amount;
    }

    //record due date
    const today = Clock.today;
    invoice.dueDate = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 30);


    //print details
    console.log(`name: ${invoice.customer}`);
    console.log(`amount: ${outstanding}`);
    console.log(`due: ${invoice.dueDate.toLocaleDateString()}`);

}