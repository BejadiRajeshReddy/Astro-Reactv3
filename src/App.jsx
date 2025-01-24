import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./components/Main";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import Horoscope from "./components/Horo";

function App() {
  return (
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/horo" element={<Horoscope />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
        <Footer />
      </div>
  );
}

export default App;
