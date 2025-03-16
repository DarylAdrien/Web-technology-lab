import React from "react";
import Home from "./pages/Home";
import "bootstrap-icons/font/bootstrap-icons.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BestSeller from "./pages/Best_seller";
import New from "./pages/New";
import Skincare from "./pages/Skincare";
import Eyes from "./pages/Eyes";
import Face from "./pages/Face";
import Lips from "./pages/Lips";
import Service from "./pages/Service";


function App() {
  return (
    <Router>
      <Routes>
        {/* Home Page Route */}
        <Route path="/" element={<Home />} />

        {/* Best Seller Page Route */}
        <Route path="/best_seller" element={<BestSeller />} />
        <Route path="/new" element={<New />} />
        <Route path="/face" element={<Face />} />
        <Route path="/eyes" element={<Eyes />} />
        <Route path="/service" element={<Service />} />
        <Route path="/skincare" element={<Skincare />} />
        <Route path="/lips" element={<Lips />} />
      </Routes>
    </Router>
  );
}

export default App;
