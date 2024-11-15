// Developer.js
import EmployeePrototype from './employPrototype.js';

export default class Developer extends EmployeePrototype {
    constructor(name, salary, programmingLanguage) {
        super(name, 'Developer', salary);
        this.programmingLanguage = programmingLanguage;
    }

    getDetails() {
        return `${this.name} - ${this.position} - $${this.salary} - Language: ${this.programmingLanguage}`;
    }
}
