import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import FilmifyPage from "./pages/FilmifyPage";
import NavBar from "./component/NavBar";
import FinasmartPage from "./pages/FinasmartPage";
import DataPage from "./pages/DataPage";
import GymPage from "./pages/GymPage";
import SpotifyPage from "./pages/SpotifyPage";
import TodoPage from "./pages/TodoPage";
import JewerlyPage from "./pages/JewerlyPage";
import NexusPage from "./pages/NexusPage";

function App() {
  return (
    <div className="w-full">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/filmify" element={<FilmifyPage />} />
        <Route path="/finansmart" element={<FinasmartPage />} />
        <Route path="/data" element={<DataPage />} />
        <Route path="/evogym" element={<GymPage />} />
        <Route path="/spotify" element={<SpotifyPage />} />
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/jewerly" element={<JewerlyPage />} />
        <Route path="/nexus" element={<NexusPage />} />
      </Routes>
    </div>
  );
}

export default App;
