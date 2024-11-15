// Client.js
import DrawingAPIAdapter from './drawingApiAdapter.js';

class Circle {
    constructor(x, y, radius, drawingAPI) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.drawingAPI = drawingAPI;
    }

    draw() {
        this.drawingAPI.drawCircle(this.x, this.y, this.radius);
    }
}

// Sử dụng Adapter để kết nối với ExternalDrawingLibrary
const drawingAPI = new DrawingAPIAdapter();
const circle = new Circle(100, 150, 50, drawingAPI);

// Vẽ hình tròn
circle.draw();
// Output: Đang vẽ hình tròn tại (100, 150) với đường kính 100
