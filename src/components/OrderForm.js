// 1.access a customer object
// 2. access the basket
// 3. create a form make new order takes inboth customer and basket
// 3. check INSOMNIA to check we can post correctly.
// 4. on save button POST to postmapping of my order  


import {useState} from "react";
import {postOrder} from "./OrderService";

const OrderForm = ({customer,basket}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postOrder(formData).then((data)=>{
            
        })


        const customerOptions = customers.map((customer, index) => {
            return <option key={index} value={index}>{customer.firstName}</option>
        })
    }

    return (
        <form onSubmit={onSubmit} id="order-form" >
            <h2>Add Order Details</h2>
            <div className="formWrap">
                <label htmlFor="customerName">Customer Name:</label>
                <input onChange={onChange} type="npm start" id="firstName"  />
            </div>
            <div className="formWrap">
                <label htmlFor="lastName">Last Name:</label>
                <input onChange={onChange} type="text" id="lastName"  />
            </div>

            <div className="formWrap">
                <label htmlFor="email">Email Address:</label>
                <input onChange={onChange} type="text" id="email"  />
            </div>

            <div className="formWrap">
                <label htmlFor="address">Delivery Address:</label>
                <input onChange={onChange} type="text" id="address"  />
            </div>

            <input type="submit" value="Save" id="save"/>
	    </form>

    );
}

export default OrderForm;