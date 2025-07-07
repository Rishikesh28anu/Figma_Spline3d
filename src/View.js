import { useEffect, useRef } from "react";
import { Application } from "@splinetool/runtime";

export default function View() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const app = new Application(canvas);
    app.load("https://prod.spline.design/k57DRqusTJSxVZLX/scene.splinecode");
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100vw", height: "100vh", display: "block" }}
    ></canvas>
  );
}
