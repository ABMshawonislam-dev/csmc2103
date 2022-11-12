import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Profile from "./pages/profile";
import Home from "./pages/home";
import Registration from "./pages/registration";
import Navbar from "./components/nabvar/Navbar";
import { useSelector } from "react-redux";
import { useState } from "react";
import Newsfeedpage from "./pages/neewsfeed/Newsfeedpage";

function App() {
  let [user, setUser] = useState({});
  let users = useSelector((state) => state);
  setTimeout(() => {
    setUser(users.user.userInfo);
  }, 2000);

  return (
    <>
      {user && <Navbar />}

      <Routes>
        <Route path="/login" element={<Login />} exact></Route>
        <Route path="/profile" element={<Profile />} exact></Route>
        <Route path="/registration" element={<Registration />} exact></Route>
        <Route path="/newsfeed" element={<Newsfeedpage />} exact></Route>
        <Route path="/" element={<Home />} exact></Route>
      </Routes>
    </>
  );
}

export default App;
