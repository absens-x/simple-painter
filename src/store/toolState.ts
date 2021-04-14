import { makeAutoObservable } from "mobx";

interface IToolState {}
abstract class AbstractToolState implements IToolState {}

class ToolState {
  tool: any;
  constructor() {
    makeAutoObservable(this);
  }

  setTool(tool: any) {
    this.tool = tool;
  }

  setFillColor(color: any) {
    this.tool.fillColor = color;
  }

  setStrokeColor(color: any) {
    this.tool.strokeColor = color;
  }

  setLineWidth(width: any) {
    this.tool.lineWidth = width;
  }
}

export default new ToolState();
