// PaymentService.js
export default class PaymentService {
    processPayment(user, amount) {
        console.log(`Xử lý thanh toán cho ${user.username} với số tiền ${amount} USD`);
        // Thực hiện xử lý thanh toán (giả định thành công)
        return true;
    }
}
