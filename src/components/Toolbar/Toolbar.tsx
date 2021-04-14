import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";
import Circle from "../../tools/Circle";
import Rect from "../../tools/Rect";
import "./Toolbar.scss";

const Toolbar = () => {
  function changeColor(e: any) {
    toolState.setStrokeColor(e.target.value);
    toolState.setFillColor(e.target.value);
  }

  return (
    <div className="toolbar">
      <button
        className="toolbar__btn brush"
        onClick={() => toolState.setTool(new Brush(canvasState.canvas))}
      />
      <button
        className="toolbar__btn rect"
        onClick={() => toolState.setTool(new Rect(canvasState.canvas))}
      />
      <button
        className="toolbar__btn circle"
        onClick={() => toolState.setTool(new Circle(canvasState.canvas))}
      />
      <button className="toolbar__btn eraser" />
      <button className="toolbar__btn line" />
      <input onChange={changeColor} type="color" />
      <button
        className="toolbar__btn undo"
        onClick={() => canvasState.undo()}
      />
      <button
        className="toolbar__btn redo"
        onClick={() => canvasState.redo()}
      />
      <button className="toolbar__btn save" />
    </div>
  );
};

export default Toolbar;
