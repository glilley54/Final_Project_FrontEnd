import React from "react"
import { Link, useHistory, NavLink } from "react-router-dom";
import { Navbar,Container,Nav, Button, Image } from "react-bootstrap"
import 'bootstrap/dist/css/bootstrap.min.css';


const MyNavBar = () =>{ 
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return( 
<>

<Container>




<Navbar className="justify-content-center" bg="light" expand="lg" mx="auto">
  
    <Navbar.Brand href="#home">Dough Delivered</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link href="/">Home</Nav.Link>
        <Nav.Link href="/order">Order</Nav.Link> 
        <Nav.Link href="/instructions">Instructions</Nav.Link> 
        <Nav.Link href="/basket">Basket</Nav.Link> 
        <Button variant="outline-dark" onClick={goBack}>Back</Button>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>

</Container>

</>
)

}

export default MyNavBar