// ShippingByAir.js
import ShippingStrategy from './shipping.js';

export default class ShippingByAir extends ShippingStrategy {
    calculate(packageDetails) {
        const baseRate = 10;
        const weightRate = 1.0;
        return baseRate + (packageDetails.weight * weightRate);
    }
}
