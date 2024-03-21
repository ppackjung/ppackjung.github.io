import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import MbtiTest from "./page/MbtiTest";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
          <Routes>
              <Route path="/" element={<MbtiTest />} />
              <Route path="/" element={<MbtiTest />} />
          </Routes>
      </div>
    </BrowserRouter> 
  );
}

export default App;
