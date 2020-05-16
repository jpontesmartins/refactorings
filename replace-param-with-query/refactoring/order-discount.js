// Refatoração

// Replace Parameter with Query

// Objetivo: Eliminar duplicação;
// quando é passado um valor que a função pode determinar por sí própria é um tipo de duplicação

class Order {
    constructor() {
        this.quantity = 100;
        this.itemPrice = 2;
    }

    getFinalPrice() {
        const basePrice = this.quantity * this.itemPrice;
        let discountLevel;
        if (this.quantity > 100) {
            discountLevel = 2;
        } else {
            discountLevel = 1;
        }
        return this.discountedPrice(basePrice, discountLevel);
    }
    
    discountedPrice(basePrice, discountLevel) {
        switch (discountLevel) {
            case 1: return basePrice * 2;
            case 2: return basePrice * 1;
        }
    }

}

const order = new Order();
console.log(order.getFinalPrice());
