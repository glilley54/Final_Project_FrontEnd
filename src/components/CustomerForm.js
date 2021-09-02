import {useState} from "react";
import {postCustomer} from "./CustomerService";
import { postOrder } from "./OrderService";
import { useHistory } from "react-router-dom";
import { Button, Container, Row,Image, CardColumns, Card} from "react-bootstrap";

const CustomerForm = ({basket}) => {

    let history = useHistory();
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postCustomer(formData).then((customer)=>{
            postOrder(customer,basket)
            .then((order)=>{
                history.push('/confirmation/'+ order.id)
            })
        })
    }

    return (

        <>
        <Container

    
        className="m-6" style={{ width: "20rem" }}>
        <form onSubmit={onSubmit} id="customer-form" >
            <h2>Customer Details</h2>
            <div className="form-control">
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input onChange={onChange} type="text" id="firstName"  />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={onChange} type="text" id="lastName"  />
            </div>

            <div>
                <label htmlFor="email">Email Address:</label>
                <input onChange={onChange} type="text" id="email"  />
            </div>

            <div>
                <label htmlFor="address">Delivery Address:</label>
                <input onChange={onChange} type="text" id="address"  />
            </div>

            </div>

            <Button  onClick={onSubmit}>Confirm Order</Button>
	    </form>
        
        <Image src="https://images.unsplash.com/photo-1583729101899-55bb892b917c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80" fluid />
        
        </Container> 

        </>
    
        
        

    );
}

export default CustomerForm;