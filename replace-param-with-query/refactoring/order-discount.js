// Refatoração

// Replace Parameter with Query

// Objetivo: Eliminar duplicação; 
// É um tipo de duplicação quando é passado um valor para a função que ela pode determinar por sí própria.

class Order {
    constructor() {
        this.quantity = 100;
        this.itemPrice = 2;
    }

    getFinalPrice() {
        const basePrice = this.quantity * this.itemPrice;
        return this.discountedPrice(basePrice);
    }
    
    discountLevel() {
        let discountLevel;
        if (this.quantity > 100) {
            discountLevel = 2;
        }
        else {
            discountLevel = 1;
        }
        return discountLevel;
    }

    discountedPrice(basePrice) {
        switch (this.discountLevel()) {
            case 1: return basePrice * 2;
            case 2: return basePrice * 1;
        }
    }

}

module.exports = {
    Order
}
