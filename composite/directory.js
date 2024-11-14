// Directory.js
import FileSystemComponent from './filesystemcomponent.js';

export default class Directory extends FileSystemComponent {
    constructor(name) {
        super(name);
        this.children = []; 
    }

    add(component) {
        this.children.push(component);
    }

    remove(component) {
        this.children = this.children.filter(child => child !== component);
    }

    getChild(index) {
        return this.children[index];
    }

    getSize() {
        return this.children.reduce((total, child) => total + child.getSize(), 0);
    }
}


// directory