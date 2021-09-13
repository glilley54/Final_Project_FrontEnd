import React, { useEffect, useState } from "react";
import {Redirect} from 'react-router-dom';

import { useHistory } from "react-router-dom";
import { Card, CardColumns, Button, Container, Row} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

const Basket = ({basket, handleRemoveFromBasket}) => {


  let history = useHistory();

  const onClick = () => {
   console.log("ive been clicked")
    history.push('/customerDetails')
  }

  

 
  return (
    <>
    <Container> 

    <CardColumns>
    <Row>  
      {basket.map((item) => (
        <Card key={item.id} style={{ width: "20rem" }}>
          <Card.Img variant="top" src={item.image} />

          <Card.Body>
            <Card.Title>{item.type}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>£{item.price}</Card.Text>
            <Button onClick={() => {handleRemoveFromBasket(item)}} variant="primary" href={item.url} target="_blank"> 
              remove from basket
            </Button>
          </Card.Body>
        </Card>
      ))}
      <Button onClick={onClick} >checkout</Button>
      </Row>
      
    </CardColumns>

    

    

    </Container>
    </>
  );

}

export default Basket