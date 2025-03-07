import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar";
import Projects from "./components/Projects";
import "./App.css";
import "./style.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Projects />
    </div>
  );
}

export default App;
