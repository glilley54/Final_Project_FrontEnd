import {useState} from "react";
import {postCustomer} from "./CustomerService";
import { postOrder } from "./OrderService";
import { useHistory } from "react-router-dom";
import { Button, Container, Row, CardColumns, Card} from "react-bootstrap";

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
        

        </Container> 

        </>
    
        
        

    );
}

export default CustomerForm;