// ShippingByGround.js
import ShippingStrategy from './shipping.js';

export default class ShippingByGround extends ShippingStrategy {
    calculate(packageDetails) {
        const baseRate = 5;
        const weightRate = 0.5;
        return baseRate + (packageDetails.weight * weightRate);
    }
}
