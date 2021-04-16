import Brush from "./Brush";

class Eraser extends Brush {
  mousePressedDown: boolean = false;

  draw(x: number, y: number) {
    this.strokeColor = "white";
    this.ctx?.lineTo(x, y);
    this.ctx?.stroke();
  }
}

export default Eraser;
