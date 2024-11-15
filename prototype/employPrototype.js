// EmployeePrototype.js
export default class EmployeePrototype {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }

    clone() {
        // Sử dụng Object.assign để sao chép đối tượng
        return Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    }

    getDetails() {
        return `${this.name} - ${this.position} - $${this.salary}`;
    }
}
