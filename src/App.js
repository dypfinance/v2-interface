import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from "./Screens/Home/Home";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}  />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
