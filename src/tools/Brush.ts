import Tool from "./Tool";

class Brush extends Tool {
  mouseDown = false;

  constructor(canvas: any) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler.bind(this);
    this.canvas.onmousedown = this.mouseDownHandler.bind(this);
    this.canvas.onmouseup = this.mouseUpHandler.bind(this);
  }

  draw(x: any, y: any) {
    this.ctx.lineTo(x, y);
    this.ctx.stroke();
  }

  mouseUpHandler(e: any) {
    this.mouseDown = false;
  }

  mouseDownHandler(e: any) {
    this.mouseDown = true;
    this.ctx.beginPath();
    this.ctx.moveTo(
      e.pageX - e.target.offsetLeft,
      e.pageY - e.target.offsetTop
    );
  }

  mouseMoveHandler(e: any) {
    if (this.mouseDown) {
      this.draw(e.pageX - e.target.offsetLeft, e.pageY - e.target.offsetTop);
    }
  }
}

export default Brush;
