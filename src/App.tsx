import { Routes, Route } from "react-router-dom";
import "./App.css";
import StartPage from "./pages/start/StartPage";
import { useColor } from "./contexts/ColorMode";
import GamePage from "./pages/game/GamePage";
import { GAME_ROUTE, HOME_ROUTE, TYPE_ROUTE } from "./constants/Routes";
import ChooseType from "./pages/type/ChooseType";
import { useEffect } from "react";
import {growthbook} from '../growthBook.ts'

function App() {
  const { color } = useColor();
  useEffect(() => {
    // Load features asynchronously when the app renders
    growthbook.loadFeatures();
  }, []);

  return (
    <div
      style={{
        backgroundColor: color === "dark" ? "#242424" : "white",
        color: color === "dark" ? "rgba(255, 255, 255, 0.87)" : "black",
      }}
    >
      <Routes>
        <Route path={HOME_ROUTE} element={<StartPage />} />
        <Route path={TYPE_ROUTE} element={<ChooseType />} />
        <Route path={GAME_ROUTE} element={<GamePage />} />
      </Routes>
    </div>
  );
}

export default App;
