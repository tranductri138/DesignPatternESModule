// NotificationService.js
export default class NotificationService {
    sendNotification(user, message) {
        console.log(`Gửi thông báo đến ${user.username}: ${message}`);
        // Thực hiện gửi thông báo (giả định thành công)
        return true;
    }
}
