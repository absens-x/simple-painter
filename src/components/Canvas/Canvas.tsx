import { observer } from "mobx-react-lite";
import { useEffect, useRef } from "react";
import canvasState from "../../store/canvasState";
import toolState from "../../store/toolState";
import Brush from "../../tools/Brush";
import "./Canvas.scss";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
    toolState.setTool(new Brush(canvasRef.current));
  }, []);

  function mouseDownHandler() {
    canvasState.pushToUndo(canvasRef.current?.toDataURL());
  }

  return (
    <div className="canvas">
      <canvas
        onMouseDown={() => mouseDownHandler()}
        ref={canvasRef}
        width={600}
        height={400}
      ></canvas>
    </div>
  );
};

export default observer(Canvas);
