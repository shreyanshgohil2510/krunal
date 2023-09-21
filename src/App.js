import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Hello from "./pages/Hello";
const App = () => {
  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hello" element={<Hello />} />
    </Routes>
  );
};

export default App;
