import React, { useEffect, useState } from "react";
import { Card, CardColumns, Button,} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Basket = ({basket}) => {

  const handleRemoveFromBasket = () => {
    basket.remove(item);
  }

   
  return (
    <CardColumns>
      {basket.map((item) => (
        <Card className="m-4" key={item.id} style={{ width: "20rem" }}>
          <Card.Img variant="top" src={item.image} />

          <Card.Body>
            <Card.Title>{item.type}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>£{item.price}</Card.Text>
            <Button onClick={() => handleremoveFromBasket()} variant="primary" href={item.url} target="_blank">
              remove from basket
            </Button>
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  );
}

export default Basket