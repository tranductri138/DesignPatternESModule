// DrawingAPIAdapter.js
import DrawingAPI from './drawingApi.js';
import ExternalDrawingLibrary from './externalDrawingLib.js';

export default class DrawingAPIAdapter extends DrawingAPI {
    constructor() {
        super();
        this.externalLibrary = new ExternalDrawingLibrary();
    }

    drawCircle(x, y, radius) {
        const diameter = radius * 2;
        this.externalLibrary.renderCircle(x, y, diameter);
    }
}
