import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from "./Screens/Home/Home";
import Footer from "./components/Footer/Footer";
import HamburderMenu from "./components/Header/HamburgerMenu";

function App() {
  return (
    <BrowserRouter>
    <HamburderMenu/>
      <Routes>
        <Route exact path="/" element={<Home />}  />
      </Routes>
      {/* <Footer /> */}
    </BrowserRouter>
  );
}

export default App;
