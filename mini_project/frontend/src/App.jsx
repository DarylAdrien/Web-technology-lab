import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
import Home from "./components/Home";

// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/cart" element={<h2 className="text-center mt-4">Cart Page</h2>} />
//                 <Route path="/login" element={<h2 className="text-center mt-4">Login Page</h2>} />
//             </Routes>
//         </Router>
//     );
// }

function App() {
  return (
    <div>
      <Home />
    </div>
  );
}
export default App;
