import FileSystemComponent from './filesystemcomponent.js';

export default class File extends FileSystemComponent {
    constructor(name, size) {
        super(name);
        this.size = size;
    }

    getSize() {
        return this.size;
    }
}

//file js