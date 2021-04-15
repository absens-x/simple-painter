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

  setFillColor(color: string) {
    this.tool.fillColor = color;
  }

  setStrokeColor(color: string) {
    this.tool.strokeColor = color;
  }

  setLineWidth(width: number) {
    this.tool.lineWidth = width;
  }
}

export default new ToolState();
