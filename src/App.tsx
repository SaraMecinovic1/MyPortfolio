import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";
import FilmifyPage from "./pages/FilmifyPage";
import NavBar from "./component/NavBar";
import FinasmartPage from "./pages/FinasmartPage";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/filmify" element={<FilmifyPage />} />
        <Route path="/finansmart" element={<FinasmartPage />} />
      </Routes>
    </div>
  );
}

export default App;
