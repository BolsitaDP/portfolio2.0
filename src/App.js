import { useState } from "react";
import "./App.css";
import RoutesDef from "./components/routesdef/RoutesDef";
import Darkmode from "./components/themes/Darkmode";
import SetColor from "./components/themes/SetColor";

function App() {
  const [mode, setMode] = useState("dark");
  const [color, setColor] = useState("red");

  const handleMode = () => {
    mode === "light" ? setMode("dark") : setMode("light");
  };

  const changeColor = (data) => {
    switch (data) {
      case "red":
        setColor("red");
        break;
      case "blue":
        setColor("blue");
        break;
      case "green":
        setColor("green");
        break;
      case "orange":
        setColor("orange");
        break;

      default:
        break;
    }
  };

  return (
    <div className={`App ${mode} ${color}`}>
      <div className="themeSwitcher">
        <Darkmode mode={handleMode} icon={mode} />
        <SetColor color={changeColor} />
      </div>
      <RoutesDef />
    </div>
  );
}

export default App;
