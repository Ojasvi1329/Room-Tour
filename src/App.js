import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import RealEstateScene from "./pages/RealEstateScene";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import "./App.css";
import logo from "./pages/logo.png";

const App = () => {
  const modelPaths = [
    "/models/kitchen.glb",
    "/models/living_room.glb",
    "/models/dining.glb",
    "/models/neon_bedroom.glb",
  ];

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} alt="Logo" className="App-logo" />
          <h1 className="App-title">forREAL-Your Dream Home Awaits</h1>
          <nav>
            <ul>
              <li>
                <Link className="nav-button" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="nav-button" to="/about">
                  About Us
                </Link>
              </li>
              <li>
                <Link className="nav-button" to="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="nav-button" to="/RealEstateScene">
                  3D Gallery
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/RealEstateScene"
              element={<RealEstateScene modelPaths={modelPaths} />}
            />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
