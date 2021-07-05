import React from "react";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import { Button } from "react-bootstrap";


const CustomerDetailsForm = () => (


<Form>
  <Form.Row>
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="name" placeholder="First Name" />
    </Form.Group>



    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="name" placeholder="Last Name" />
    </Form.Group>
  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Email</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>


  
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

)

export default CustomerDetailsForm


// const handlePost = function(pirate){
//   const request = new Request();
//   request.post("/api/pirates", pirate)
//   .then(() => window.location = '/customers)
// }