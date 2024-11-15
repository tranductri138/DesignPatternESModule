// Document.js
export default class Document {
    constructor(content) {
        this.content = content;
    }

    read() {
        return this.content;
    }

    write(newContent) {
        this.content = newContent;
    }
}
