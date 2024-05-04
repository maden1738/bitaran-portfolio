import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Research from "./pages/Research";
import Teachings from "./pages/Teachings";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/teachings" element={<Teachings />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
