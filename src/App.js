import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Register from "./components/Register";
import Login from "./components/Login";
import Home from "./pages/Home";
import "./App.css"
import Contacts from "./pages/Contacts";

const App = () => {
  return(
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App;