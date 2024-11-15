// OrderFacade.js
import AuthService from './authService.js';
import PaymentService from './paymentService.js';
import OrderService from './orderService.js';
import NotificationService from './notificationService.js';

export default class OrderFacade {
    constructor() {
        this.authService = new AuthService();
        this.paymentService = new PaymentService();
        this.orderService = new OrderService();
        this.notificationService = new NotificationService();
    }

    placeOrder(user, items, paymentAmount) {
        if (!this.authService.authenticate(user)) {
            console.log('Xác thực người dùng thất bại.');
            return false;
        }

        if (!this.paymentService.processPayment(user, paymentAmount)) {
            console.log('Xử lý thanh toán thất bại.');
            return false;
        }

        const order = this.orderService.createOrder(user, items);
        if (order.status === 'Created') {
            this.notificationService.sendNotification(user, `Đơn hàng #${order.orderId} đã được tạo thành công.`);
            return order;
        }

        console.log('Tạo đơn hàng thất bại.');
        return false;
    }
}
