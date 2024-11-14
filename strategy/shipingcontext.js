// ShippingContext.js
export default class ShippingContext {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    calculateShipping(packageDetails) {
        return this.strategy.calculate(packageDetails);
    }
}
