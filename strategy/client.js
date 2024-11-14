// Client.js
import ShippingContext from './shipingcontext.js';
import ShippingByGround from './shippingbyground.js';
import ShippingByAir from './shippingbyair.js';
import ShippingInternational from './shippingbyinternational.js';

const groundStrategy = new ShippingByGround();
const airStrategy = new ShippingByAir();
const internationalStrategy = new ShippingInternational();

const shippingContext = new ShippingContext(groundStrategy);

const packageDetails = {
    weight: 10, 
    distance: 1000
};

console.log(`Phí vận chuyển bằng đường bộ: ${shippingContext.calculateShipping(packageDetails)} USD`);

shippingContext.setStrategy(airStrategy);
console.log(`Phí vận chuyển bằng đường hàng không: ${shippingContext.calculateShipping(packageDetails)} USD`);

shippingContext.setStrategy(internationalStrategy);
console.log(`Phí vận chuyển quốc tế: ${shippingContext.calculateShipping(packageDetails)} USD`);
