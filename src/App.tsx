import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Navbar from "./components/navbar";
import CartAbsolute from "./components/cart-absolute-card";
import Footer from "./components/footer";
import About from "./pages/about";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/about" element={<About />} />
      </Routes>
      <CartAbsolute />
      <Footer />
    </Router>
  );
};

export default App;
