import React from "react";
import { getOrderById } from "./OrderService";
import {useParams} from "react-router-dom";
import { nullLiteral } from "@babel/types";
import { useState,useEffect } from "react";






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
    

            <h1>Confirmation of your order</h1>
            <p>order id number= {orderId}</p>
            <p>Name: {order.customer.firstName}</p>
            <p>Date: {order.date}</p>
            
            <hr></hr>
        </>

)
}

export default Confirmation;