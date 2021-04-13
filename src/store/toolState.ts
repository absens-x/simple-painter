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
}

export default new ToolState();
