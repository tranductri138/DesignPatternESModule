// AuthService.js
export default class AuthService {
    authenticate(user) {
        console.log(`Xác thực người dùng: ${user.username}`);
        // Thực hiện xác thực người dùng (giả định thành công)
        return true;
    }
}
