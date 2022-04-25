import {
  Routes,
  Route,
} from "react-router-dom";
import Navbarh from './components/Navbar/Navbar';
import HomePage from './components/HomePage/Homepage';
import Contact from './components/Contact/Contact';
import Products from './components/Products/Products';
import About from './components/About/About';
import Footer from './components/Footer/Footer';
import { Container } from 'react-bootstrap';


function App() {
  return (
    <div>
      <Navbarh />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
          </Routes>

        </Container>
      </main>
      <Footer />
    </div>

  );
}

export default App;



