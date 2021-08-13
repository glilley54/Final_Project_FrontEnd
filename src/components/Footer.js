import React from "react"
import { Navbar,Container } from "react-bootstrap"

const Footer = () => (

<>

  <Navbar bg="light" variant="light">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://images.unsplash.com/photo-1537734796389-e1fc293cf856?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=632&q=80"
          width="30"
          height="30"
          className="d-inline-block align-top" 
        />{' '}
      Dough Delivered by Gordon Lilley 2021
      </Navbar.Brand>
    </Container>
  </Navbar>
</>
)

export default Footer;