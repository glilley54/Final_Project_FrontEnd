import React, { useEffect, useState } from "react";
import { Card, Button, Container, Row, CardGroup} from "react-bootstrap";
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
 
   
    <CardGroup> 
   
    
      {items.map((item) => (
        <Card className="m-4" key={item.id} style={{ width: "20rem" }}>
          <Card.Img fluid variant="top" src={item.image} />

          <Card.Body>
            <Card.Title>{item.type}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Card.Text>£{item.price}</Card.Text>
            <Button onClick={() => handleAddToBasket(item)}  variant="info" href={item.url} target="_blank">
              Add to basket
            </Button>
          </Card.Body>
        </Card>
      ))}
      
      
    </CardGroup>
    
    </Container>
  );
}

export default Items