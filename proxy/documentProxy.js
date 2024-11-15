import Document from './document.js';
import RealDocument from './realDocument.js';

export default class DocumentProxy extends Document {
    constructor(user, content) {
        super(content);
        this.user = user; // Thông tin người dùng
        this.realDocument = null;
    }

    // Kiểm tra quyền truy cập trước khi đọc
    read() {
        if (this.canRead()) {
            this.ensureRealDocument();
            return this.realDocument.read();
        } else {
            throw new Error('Người dùng không có quyền đọc tài liệu này.');
        }
    }

    // Kiểm tra quyền truy cập trước khi ghi
    write(newContent) {
        if (this.canWrite()) {
            this.ensureRealDocument();
            this.realDocument.write(newContent);
        } else {
            throw new Error('Người dùng không có quyền ghi vào tài liệu này.');
        }
    }

    // Đảm bảo rằng RealDocument đã được khởi tạo (Lazy Initialization)
    ensureRealDocument() {
        if (!this.realDocument) {
            this.realDocument = new RealDocument(this.content);
        }
    }

    // Kiểm tra quyền đọc (giả định)
    canRead() {
        // Thực hiện kiểm tra quyền truy cập dựa trên thông tin người dùng
        // Ví dụ đơn giản:
        return this.user.roles.includes('reader') || this.user.roles.includes('admin');
    }

    // Kiểm tra quyền ghi (giả định)
    canWrite() {
        // Thực hiện kiểm tra quyền truy cập dựa trên thông tin người dùng
        // Ví dụ đơn giản:
        return this.user.roles.includes('writer') || this.user.roles.includes('admin');
    }
}
