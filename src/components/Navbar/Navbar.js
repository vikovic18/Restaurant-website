<<<<<<< HEAD
import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
=======
import './navbar.css'
import { Link } from "react-router-dom";
import { Container, Nav } from 'react-bootstrap';
>>>>>>> parent of 0f386e4 ('navbar)




function Navbar() {
  return (
<<<<<<< HEAD
    <div>
      <Navbar collapseOnSelect  bg="dark" variant='dark' expand="sm">
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>BUNMI'S CUISINE</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <LinkContainer to='/'>
              <Nav.Link>Home</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/products'>
              <Nav.Link >Products</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/contact'>
              <Nav.Link >Contact</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/about'>
              <Nav.Link >About</Nav.Link>
              </LinkContainer>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>

=======
   
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
   
>>>>>>> parent of 0f386e4 ('navbar)
  )
}

export default Navbar