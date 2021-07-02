// import React, { useEffect, useState } from "react";
// import { Card, CardColumns, Button } from "react-bootstrap";

// const Items = () => {
//     const [data, setData] = useState([]);
   
//      useEffect(() => {
//        fetch("http://localhost:8080/items")
//          .then((res) => res.json())
//          .then((data) => setData(data.results));
//      }, []);

//   return (
//     <CardColumns>
//       {data.map((item) => (
//         <Card className="m-4" key={item.type} style={{ width: "20rem" }}>
//           <Card.Img variant="top" src={item.image} />

//           <Card.Body>
//             <Card.Title>{item.type}</Card.Title>
//             <Card.Text>{item.description}</Card.Text>
//             <Button variant="primary" href={item.url} target="_blank">
//               More Info
//             </Button>
//           </Card.Body>
//         </Card>
//       ))}
//     </CardColumns>
//   );
// }

// export default Items