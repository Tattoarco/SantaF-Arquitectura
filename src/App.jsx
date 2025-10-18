import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import History from "./pages/History";
import MakingOff from "./pages/MakingOff";
import Proyect from "./pages/Proyect";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/makingOff" element={<MakingOff />} />
        <Route path="/proyect" element={<Proyect />} />
      </Routes>
    </>
  );
}

export default App;
