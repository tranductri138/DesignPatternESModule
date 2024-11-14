// ShippingInternational.js
import ShippingStrategy from './shipping.js';

export default class ShippingInternational extends ShippingStrategy {
    calculate(packageDetails) {
        const baseRate = 20;
        const weightRate = 2.0;
        const distanceRate = packageDetails.distance * 0.1;
        return baseRate + (packageDetails.weight * weightRate) + distanceRate;
    }
}
