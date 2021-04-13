import { useEffect, useRef } from "react";
import canvasState from "../../store/canvasState";
import "./Canvas.scss";

const Canvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    canvasState.setCanvas(canvasRef.current);
  }, []);

  return (
    <div className="canvas">
      <canvas ref={canvasRef} width={600} height={400}></canvas>
    </div>
  );
};

export default Canvas;
