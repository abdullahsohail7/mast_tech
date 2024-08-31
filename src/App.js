import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Team from "./components/Team";
import WhyMast from "./components/WhyMast";
import GetXYZ from "./components/GetXYZ"; // Import the new component

function App() {
  const [isMenuShown, setIsMenuShown] = useState(false);

  return (
    <Router>
      <Navbar isMenuShown={isMenuShown} setIsMenuShown={setIsMenuShown} />
      <Routes>
        {/* Home Page Route */}
        <Route 
          path="/" 
          element={
            <>
              <HeroSection isMenuShown={isMenuShown} />
              <About />
              <Team />
              <WhyMast />
              <Contact />
              <Footer />
            </>
          } 
        />
        
        {/* /get Route */}
        <Route path="/get" element={<GetXYZ />} />

        {/* You can define other routes as needed */}
        {/* Example: <Route path="/about" element={<About />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
