import React, { useEffect, useState } from "react";
import { Card, CardColumns, Button,} from "react-bootstrap";
// import 'bootstrap/dist/css/bootstrap.min.css';

const Items = () => {
    const [items, setItems] = useState([]);
   
     useEffect(() => {
       fetch("http://localhost:8080/items")
         .then((res) => res.json())
         .then((data) => setItems(data));
     }, []);

  return (
    <CardColumns>
      {items.map((item) => (
        <Card className="m-4" key={item.id} style={{ width: "20rem" }}>
          <Card.Img variant="top" src={item.image} />

          <Card.Body>
            <Card.Title>{item.type}</Card.Title>
            <Card.Text>{item.description}</Card.Text>
            <Button variant="primary" href={item.url} target="_blank">
              More Info
            </Button>
          </Card.Body>
        </Card>
      ))}
    </CardColumns>
  );
}

export default Items