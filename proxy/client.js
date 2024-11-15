import DocumentProxy from './documentProxy.js';

// Định nghĩa người dùng
const user1 = {
    name: 'Alice',
    roles: ['reader'] // Chỉ có quyền đọc
};

const user2 = {
    name: 'Bob',
    roles: ['writer'] // Chỉ có quyền ghi
};

const user3 = {
    name: 'Charlie',
    roles: ['admin'] // Có tất cả quyền
};

// Tạo Proxy cho tài liệu
const proxyDoc1 = new DocumentProxy(user1, 'Nội dung tài liệu 1.');
const proxyDoc2 = new DocumentProxy(user2, 'Nội dung tài liệu 2.');
const proxyDoc3 = new DocumentProxy(user3, 'Nội dung tài liệu 3.');

try {
    console.log(`${user1.name} đọc tài liệu: ${proxyDoc1.read()}`);
    // Thử ghi tài liệu bằng user1 (sẽ bị từ chối)
    proxyDoc1.write('Nội dung mới cho tài liệu 1.');
} catch (error) {
    console.error(`${user1.name}: ${error.message}`);
}

try {
    // user2 không thể đọc tài liệu (chỉ có quyền ghi)
    console.log(`${user2.name} đọc tài liệu: ${proxyDoc2.read()}`);
} catch (error) {
    console.error(`${user2.name}: ${error.message}`);
}

try {
    // user2 ghi tài liệu
    proxyDoc2.write('Nội dung mới cho tài liệu 2.');
    console.log(`${user2.name} đã ghi thành công tài liệu 2.`);
} catch (error) {
    console.error(`${user2.name}: ${error.message}`);
}

try {
    // user3 có tất cả quyền
    console.log(`${user3.name} đọc tài liệu: ${proxyDoc3.read()}`);
    proxyDoc3.write('Nội dung mới cho tài liệu 3.');
    console.log(`${user3.name} đã ghi thành công tài liệu 3.`);
} catch (error) {
    console.error(`${user3.name}: ${error.message}`);
}
