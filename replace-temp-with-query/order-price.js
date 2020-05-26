// Refatoração

// Replace Temp with Query

// Objetivo: Quebrar funções muito grandes. 
// Transformar variaveis da função em funções menores facilita extrair as partes da função.

class Order {
    constructor(quantity, item) {
        this._quantity = quantity;
        this._item = item;
    }

    getPrice() {
        const basePrice = this._quantity * this._item;
        const discountFactor = 0.98;
        if (basePrice > 1000) {
            discountFactor -= 0.03;
        }
        return basePrice * discountFactor;

    }

}

