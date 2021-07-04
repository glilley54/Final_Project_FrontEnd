import React from "react"
import { Navbar,Container,Nav } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const MyNavBar = () =>{ 
  return( 
<Navbar bg="light" expand="lg">
  <Container>
    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#order">Order</Nav.Link>
        <Nav.Link href="#instructions">Instructions</Nav.Link>
        <Nav.Link href="#basket">Basket</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
)

}


export default MyNavBar