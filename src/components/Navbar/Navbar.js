import { Container, Navbar, Nav, Row } from 'react-bootstrap';





function NavbarR() {
  return (
    <div>
      <Navbar collapseOnSelect  bg="dark" variant='dark' expand="sm">
        <Container>
          <Navbar.Brand href="/">BUNMI'S CUISINE</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/products">Products</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>


            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>



    </div>

  )
}

export default NavbarR




