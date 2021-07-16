import React, { useEffect, useState } from "react";
import { Card, CardDeck, Button, Container, Row} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Items = ( {handleAddToBasket} ) => {
    const [items, setItems] = useState([]);
   
     useEffect(() => {
       fetch("http://localhost:8080/items")
         .then((res) => res.json())
         .then((data) => setItems(data));
     }, []);

  return (
    <Container>
    <br></br>
 <br></br>
   
    <CardDeck>
    <Row >
    
      {items.map((item) => (
        <Card className="m-4" key={item.id} style={{ width: "20rem" }}>
          <Card.Img variant="top" src={item.image} />

          <Card.Body>
            <Card.Title>{item.type}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>£{item.price}</Card.Text>
            <Button onClick={() => handleAddToBasket(item)}  variant="primary" href={item.url} target="_blank">
              Add to basket
            </Button>
          </Card.Body>
        </Card>
      ))}
      </Row>
      
    </CardDeck>
    
    </Container>
  );
}

export default Items