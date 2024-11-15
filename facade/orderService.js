// OrderService.js
export default class OrderService {
    createOrder(user, items) {
        console.log(`Tạo đơn hàng cho ${user.username} với các mặt hàng: ${items.join(', ')}`);
        // Thực hiện tạo đơn hàng (giả định thành công)
        return { orderId: 12345, status: 'Created' };
    }
}
