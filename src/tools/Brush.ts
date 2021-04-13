import Tool from "./Tool";

class Brush extends Tool {
  constructor(canvas: any) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  mouseUpHandler(e: any) {}

  mouseDownHandler(e: any) {}

  mouseMoveHandler(e: any) {}
}

export default Brush;
