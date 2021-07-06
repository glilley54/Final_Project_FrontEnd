import {useState} from "react";
import {postCustomer} from "./CustomerService";

const CustomerForm = ({addCustomer}) => {
    
    const [formData, setFormData] = useState({})

    const onChange = (e) =>{
        formData[e.target.id] = e.target.value;
        setFormData(formData);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        postCustomer(formData).then((data)=>{
            addCustomer(data);
        })
    }

    return (
        <form onSubmit={onSubmit} id="customer-form" >
            <h2>Add Customer Details</h2>
            <div className="formWrap">
                <label htmlFor="firstName">First Name:</label>
                <input onChange={onChange} type="text" id="firstName"  />
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

export default CustomerForm;