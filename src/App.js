import "./App.css";
import Main from "./components";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from "./components/Pages/Auth/Login";
import Register from "./components/Pages/Auth/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        {/* <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
