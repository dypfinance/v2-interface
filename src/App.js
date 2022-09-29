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

function App() {
  return (
    <BrowserRouter>
      <HamburgerMenu />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/dyp" element={<Dyp />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
