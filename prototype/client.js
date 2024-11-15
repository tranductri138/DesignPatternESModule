// Client.js
import Manager from './manager.js';
import Developer from './developer.js';

// Tạo nguyên mẫu Manager
const managerPrototype = new Manager('Alice', 90000, 'Sales');

// Tạo nguyên mẫu Developer
const developerPrototype = new Developer('Bob', 80000, 'JavaScript');

// Sao chép các đối tượng từ nguyên mẫu
const managerClone = managerPrototype.clone();
managerClone.name = 'Charlie'; // Thay đổi thuộc tính cụ thể
managerClone.department = 'Marketing';

const developerClone = developerPrototype.clone();
developerClone.name = 'Dave'; // Thay đổi thuộc tính cụ thể
developerClone.programmingLanguage = 'Python';

// Hiển thị chi tiết các đối tượng
console.log(managerPrototype.getDetails());
// Output: Alice - Manager - $90000 - Department: Sales

console.log(managerClone.getDetails());
// Output: Charlie - Manager - $90000 - Department: Marketing

console.log(developerPrototype.getDetails());
// Output: Bob - Developer - $80000 - Language: JavaScript

console.log(developerClone.getDetails());
// Output: Dave - Developer - $80000 - Language: Python
