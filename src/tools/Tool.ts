class Tool {
  canvas: any;
  ctx: any;

  constructor(canvas: any) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
  }

  destroyEvents() {
    this.canvas.onmousemove = null;
    this.canvas.onmousedown = null;
    this.canvas.onmouseup = null;
  }
}

export default Tool;
