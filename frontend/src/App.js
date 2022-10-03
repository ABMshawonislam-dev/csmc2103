import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Registration from "./pages/registration";

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/profile" element={<Profile />} exact></Route>
        <Route path="/registration" element={<Registration />} exact></Route>
        <Route path="/" element={<Home />} exact></Route>
      </Routes>
    </>
  );
}

export default App;
