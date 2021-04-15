import Tool from "./Tool";

class Rect extends Tool {
  mousePressedDown: boolean = false;
  startX: number = 0;
  startY: number = 0;
  saved: string = "";

  constructor(canvas: HTMLCanvasElement) {
    super(canvas);
    this.listen();
  }

  listen() {
    this.canvas.onmousemove = this.mouseMoveHandler;
    this.canvas.onmousedown = this.mouseDownHandler;
    this.canvas.onmouseup = this.mouseUpHandler;
  }

  mouseUpHandler = () => {
    this.mousePressedDown = false;
  };

  mouseDownHandler = (e: MouseEvent) => {
    const target = <HTMLElement>e.target;
    this.mousePressedDown = true;

    this.ctx?.beginPath();
    this.startX = e.pageX - target.offsetLeft;
    this.startY = e.pageY - target.offsetTop;
    this.saved = this.canvas.toDataURL();
  };

  mouseMoveHandler = (e: MouseEvent) => {
    if (this.mousePressedDown) {
      const target = <HTMLElement>e.target;

      const currentX = e.pageX - target.offsetLeft;
      const currentY = e.pageY - target.offsetTop;
      let width = currentX - this.startX;
      let height = currentX - this.startX;
      this.draw(this.startX, this.startY, width, height);
    }
  };

  draw(x: number, y: number, w: number, h: number) {
    const img: HTMLImageElement = new Image();
    img.src = this.saved;
    img.onload = () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.rect(x, y, w, h);
      this.ctx?.fill();
      this.ctx?.stroke();
    };
    this.ctx?.rect(x, y, w, h);
    this.ctx?.fill();
    this.ctx?.stroke();
  }
}

export default Rect;
