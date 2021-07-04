// import React, { useEffect, useState } from "react";
// import { Card, CardColumns, Button } from "react-bootstrap";

// const Items2 = () => {
//     const [data, setData] = useState([]);
   
//      useEffect(() => {
//        fetch("http://localhost:8080/items")
//          .then((res) => res.json())
//          .then((data) => setData(data.results));
//      }, []);

//   return (
//     <CardColumns>
//       {data.map((items) => (
//         <Card className="m-4" key={items.type} style={{ width: "20rem" }}>
//           <Card.Img variant="top" src={items.image} />

//           <Card.Body>
//             <Card.Title>{items.type}</Card.Title>
//             <Card.Text>{items.description}</Card.Text>
//             <Button variant="primary" href={items.url} target="_blank">
//               More Info
//             </Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </CardColumns>
//   );
// }

// export default Items2