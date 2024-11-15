// Manager.js
import EmployeePrototype from './employPrototype.js';

export default class Manager extends EmployeePrototype {
    constructor(name, salary, department) {
        super(name, 'Manager', salary);
        this.department = department;
    }

    getDetails() {
        return `${this.name} - ${this.position} - $${this.salary} - Department: ${this.department}`;
    }
}
