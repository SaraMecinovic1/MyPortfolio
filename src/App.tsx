import { Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import "./index.css";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
    </Routes>
  );
}

export default App;
