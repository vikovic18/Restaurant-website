import { Container, Navbar, Nav, Row } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';





function NavbarR() {
  return (
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

  )
}

export default NavbarR




