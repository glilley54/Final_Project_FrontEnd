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




<Navbar className="justify-content-center" bg="info" expand="lg" mx="auto">
  
    <Navbar.Brand href="#home">Dough Delivered</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
      <Nav.Link><Link to="/">Home</Link> </Nav.Link>
        <Nav.Link><Link to="/order">Order</Link></Nav.Link> 
        <Nav.Link><Link to="/instructions">Instructions</Link></Nav.Link> 
        <Nav.Link><Link to="/basket">Basket</Link></Nav.Link> 
        <Button  onClick={goBack}>Back</Button>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>

</Container>

</>
)

}

export default MyNavBar