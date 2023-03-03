import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-loading"
import './App.css';
import Auth from "./pages/auth";
import Students from "./pages/student";
import Teachers from "./pages/teacher";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/teachers" element={<Teachers />} />
        <Route path="/students" element={<Students />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
