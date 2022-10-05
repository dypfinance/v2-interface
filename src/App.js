import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from "./Screens/Home/Home";
import Dyp from "./Screens/Dyp/Dyp";
import Footer from "./components/Footer/Footer";
import HamburgerMenu from "./components/Header/HamburgerMenu";
import Navbar from "./components/Navbar/Navbar";
import About from "./Screens/About/About";
import ScrollTop from "./components/ScrollTop/ScrollTop";
import Disclaimer from "./Screens/Disclaimer/Disclaimer";

function App() {
  return (
    <BrowserRouter>
      <HamburgerMenu />
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dyp" element={<Dyp />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/disclaimer" element={<Disclaimer />} />
      </Routes>
      <ScrollTop/>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
