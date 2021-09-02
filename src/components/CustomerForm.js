import {useState} from "react";
import {postCustomer} from "./CustomerService";
import { postOrder } from "./OrderService";
import { useHistory } from "react-router-dom";
import { Button, Carousel,Container, Row,Image, CardColumns, Card,Form} from "react-bootstrap";


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

       

        

        
        
        
       

        <Container>

    <Carousel align="center">
  <Carousel.Item interval={2000}>

    <img width={1300} height={500} alt="1000x500"src="https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
      alt="First slide"
    />
  
  </Carousel.Item>

  <Carousel.Item interval={2000}>
    <img width={1300} height={500} alt="1000x500"src="https://images.unsplash.com/photo-1534963063257-6b65b54e438b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
      alt="Second slide"
    />
  </Carousel.Item>
  <Carousel.Item interval={2000}>
    <img width={1300} height={500} alt="1000x500"
      src="https://images.unsplash.com/photo-1564128442383-9201fcc740eb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1402&q=80"
      alt="Third slide"
    />
  </Carousel.Item>
</Carousel>

    <br></br>

    </Container>

        </>
    
        
        

    );
}

export default CustomerForm;