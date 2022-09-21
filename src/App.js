import React from "react";
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";
import Home from "./Screens/Home/Home";
import Header from "./components/Header/Header";

function App() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route exact path="/" element={<Home />}  />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
