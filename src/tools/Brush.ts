import Tool from "./Tool";

class Brush extends Tool {
  mousePressedDown: boolean = false;

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.canvas.onmousemove = this.mouseMoveHandler;
    this.canvas.onmousedown = this.mouseDownHandler;
    this.canvas.onmouseup = this.mouseUpHandler;
    // this.canvas
  }

  draw(x: number, y: number) {
    if (this.ctx) {
      this.ctx.lineTo(x, y);
      this.ctx.stroke();
    }
  }

  mouseUpHandler = (): void => {
    this.mousePressedDown = false;
  };

  mouseDownHandler = (e: MouseEvent): void => {
    this.mousePressedDown = true;
    const target = <HTMLElement>e.target;

    this.ctx?.beginPath();
    this.ctx?.moveTo(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
  };

  mouseMoveHandler = (e: MouseEvent): void => {
    const target = <HTMLElement>e.target;

    if (this.mousePressedDown) {
      this.draw(e.pageX - target.offsetLeft, e.pageY - target.offsetTop);
    }
  };
}

export default Brush;
