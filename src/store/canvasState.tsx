import { makeAutoObservable } from "mobx";

class CanvasState {
  canvas: any = null;
  constructor() {
    makeAutoObservable(this);
  }

  setCanvas(canvas: any) {
    this.canvas = canvas;
  }
}

export default new CanvasState();
