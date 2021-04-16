import Tool from "./Tool";

class Line extends Tool {
  mousePressedDown = false;
  currentX = 0;
  currentY = 0;
  saved: string = "";

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.canvas.onmousemove = this.mouseMoveHandler;
    this.canvas.onmousedown = this.mouseDownHandler;
    this.canvas.onmouseup = this.mouseUpHandler;
  }

  mouseUpHandler = () => {
    this.mousePressedDown = false;
  };

  mouseDownHandler = (e: MouseEvent) => {
    this.mousePressedDown = true;
    const { offsetLeft, offsetTop } = <HTMLElement>e.target;
    this.currentX = e.pageX - offsetLeft;
    this.currentY = e.pageY - offsetTop;
    this.ctx?.beginPath();
    this.ctx?.moveTo(this.currentX, this.currentY);
    this.saved = this.canvas?.toDataURL();
  };

  mouseMoveHandler = (e: MouseEvent) => {
    if (this.mousePressedDown) {
      const { offsetLeft, offsetTop } = <HTMLElement>e.target;
      const x = e.pageX - offsetLeft;
      const y = e.pageY - offsetTop;
      this.draw(x, y);
    }
  };

  draw(x: number, y: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.moveTo(this.currentX, this.currentY);
      this.ctx?.lineTo(x, y);
      this.ctx?.stroke();
    };
  }
}

export default Line;
