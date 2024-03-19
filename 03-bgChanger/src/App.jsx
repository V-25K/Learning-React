import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("white");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <h1 className="text-black">BackGround Color Changer</h1>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }}
            >
              Green
            </button>
            <button
              onClick={() => setColor("pink")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "pink" }}
            >
              pink
            </button>
            <button
              onClick={() => setColor("coral")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "coral" }}
            >
              coral
            </button>
            <button
              onClick={() => setColor("greenyellow")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "greenyellow" }}
            >
              greenyellow
            </button>
            <button
              onClick={() => setColor("orange")}
              className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
              style={{ backgroundColor: "orange" }}
            >
              orange
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
