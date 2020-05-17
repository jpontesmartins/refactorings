// Refatoração

// Replace Temp with Query

// Objetivo: Ao quebrar funções muito grandes, 
// transformar variaveis dela em funções deixa mais fácil extrair as partes da função.

class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    getPrice() {
        return this.getBasePrice() * this.getDiscountFactor();
    }

    getDiscountFactor() {
        let discountFactor = 0.98;
        if (this.getBasePrice() > 1000) {
            discountFactor -= 0.03;
        }
        return discountFactor;
    }

    getBasePrice() {
        return this._quantity * this._item;
    }
}

module.exports = Order;