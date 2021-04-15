import Tool from "./Tool";

class Circle extends Tool {
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

  mouseUpHandler = (e: MouseEvent): void => {
    this.mousePressedDown = false;
  };

  mouseDownHandler = (e: MouseEvent) => {
    this.mousePressedDown = true;
    let canvasData = this.canvas.toDataURL();

    const target = <HTMLElement>e.target;
    this.ctx?.beginPath();
    this.startX = e.pageX - target.offsetLeft;
    this.startY = e.pageY - target.offsetTop;
    this.saved = canvasData;
  };

  mouseMoveHandler = (e: MouseEvent) => {
    if (this.mousePressedDown) {
      const target = <HTMLElement>e.target;
      let currentX = e.pageX - target.offsetLeft;
      let currentY = e.pageY - target.offsetTop;
      let w = currentX - this.startX;
      let h = currentY - this.startY;
      const r = Math.sqrt(w ** 2 + h ** 2);
      this.draw(this.startX, this.startY, r);
    }
  };

  draw(x: number, y: number, r: number) {
    const img = new Image();
    img.src = this.saved;
    img.onload = async () => {
      this.ctx?.clearRect(0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
      this.ctx?.beginPath();
      this.ctx?.arc(x, y, r, 0, 2 * Math.PI);
      this.ctx?.fill();
      this.ctx?.stroke();
    };
  }
}

export default Circle;
