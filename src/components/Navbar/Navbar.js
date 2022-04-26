import './navbar.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';




function Navbarh() {
  return (
    <header className="navh">
      <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <LinkContainer to='/'>
          <Navbar.Brand>BUNMI'S CUISINE</Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/'>
              <Nav.Link >Home</Nav.Link>
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

    </header>

  )
}

export default Navbarh