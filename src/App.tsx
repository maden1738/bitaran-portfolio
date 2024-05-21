import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Research from "./pages/Research";
import Teachings from "./pages/Teachings";
import Navbar from "./components/common/Navbar";
import Research1 from "./pages/Research1";
import Research2 from "./pages/Research2";
import Research3 from "./pages/Research3";
import SingleSubject from "./pages/SingleSubject";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research1" element={<Research1 />} />
        <Route path="/research2" element={<Research2 />} />
        <Route path="/research3" element={<Research3 />} />
        <Route path="/teachings" element="">
          <Route path="" element={<Teachings />} />
          <Route path=":slug" element={<SingleSubject />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
