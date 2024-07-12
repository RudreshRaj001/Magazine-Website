import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import LoginSignup from "./Pages/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "./Pages/AllCategories";
import About from "./Pages/About";
import Category1 from "./Sections/Category1/Category1.jsx"; // Import the new Category1 page

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/category1" element={<Category1 />} />{" "}
          {/* Add the new route */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
