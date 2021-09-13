import React from "react";
import { getOrderById } from "./OrderService";
import {useParams} from "react-router-dom";
import { useState,useEffect } from "react";
import { Button, Container, Row, CardColumns, Card} from "react-bootstrap";






const Confirmation = (props) => {

// 1.write the get order by id function in order service
// 2. react router props - write the code in confirmation file to pull in oder id
// 3. fetch order details and rendr relevant information in the return statement





let { orderId } = useParams();


const [order, setOrder] = useState(null);
   
     useEffect(() => {
        getOrderById(orderId)
         .then((data) => setOrder(data));
     }, []);

     if (!order) 
     return "...loading"
     

return (

   

<>
<Container>  

<Card className="m-4"  text-align= "centre" style={{ width: "60rem" }}> 
    

            <h1>Confirmation of your order</h1>

            <div id="confirmation-text">
        
            <p>ORDER ID NUMBER= {orderId}</p>
            <p>NAME: {order.customer.firstName +  order.customer.lastName}</p>
            <p>ORDER DATE: {order.date}</p>
            <p>DELIVERY ADDRESS:{order.customer.address}</p>

            </div>

          

            </Card>


            </Container>
        </>

)
}

export default Confirmation;