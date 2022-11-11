import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="*" element={<NotFound />}></Route>
    </Routes>
  );
};

export default App;
