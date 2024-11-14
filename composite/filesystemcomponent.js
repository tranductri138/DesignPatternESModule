export default class FileSystemComponent {
    constructor(name) {
        this.name = name;
    }

    add(component) {
        throw new Error('Method "add()" must be implemented.');
    }

    remove(component) {
        throw new Error('Method "remove()" must be implemented.');
    }

    getChild(index) {
        throw new Error('Method "getChild()" must be implemented.');
    }

    getSize() {
        throw new Error('Method "getSize()" must be implemented.');
    }
}

// lơp interface 