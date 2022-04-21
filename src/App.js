

import {
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import HomePage from './components/HomePage/Homepage';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import About from  './components/About/About';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
      </Routes>
      
    </div>

  );
}

export default App;
