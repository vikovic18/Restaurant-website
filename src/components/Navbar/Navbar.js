import './navbar.css'
import { Link } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';




function Navbar() {
  return (
   
    <header className="">
        <nav>
            <div className="logo">
                <Link to="/" className="logoStyle">WFD</Link> 
            </div>
            <ul className="navbar-ul">
                <li>
                    <Link to="/" className="headerlink-title">HOME</Link> 
                </li>
                <li>
                    <Link to="/products" className="headerlink-title">PRODUCT</Link> 
                </li>
                <li>
                    <Link to="/about" className="headerlink-title">ABOUT</Link> 
                </li>
                <li>
                    <Link to="/contact" className="headerlink-title">CONTACT</Link> 
                </li>

            </ul>
        </nav>
        {/* <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
        
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar> */}
    </header>
   
  )
}

export default Navbar