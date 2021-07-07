// // 1.access a customer object
// // 2. access the basket
// // 3. create a form make new order takes inboth customer and basket
// // 3. check INSOMNIA to check we can post correctly.
// // 4. on save button POST to postmapping of my order  


// import {useState} from "react";
// import {postOrder} from "./OrderService";

// const OrderForm = ({customer,basket}) => {
    
//     const [formData, setFormData] = useState({})

//     const onChange = (e) =>{
//         formData[e.target.id] = e.target.value;
//         setFormData(formData);
//     }

//     const onSubmit = (e) =>{
//         e.preventDefault();
//         postOrder(formData).then((data)=>{
            
//         })


//         const customerOptions = customers.map((customer, index) => {
//             return <option key={index} value={index}>{customer.firstName}</option>
//         })

//         const orderOptions = basket.map((basket, index) => {
//             return <option key={index} value={index}>{basket.type}</option>
//     }

//     return (
//         <form onSubmit={onSubmit} id="order-form" >
//             <h2>Add Order Details</h2>
//             <div className="formWrap">
//             <select name="customer" onChange= defaultValue=
//         <option disabled value='select-a-customer'>Select a customer</option>
//         {customerOptions}
//     </select>   
//             </div>
//             <div className="formWrap">
        
//             <option disabled value='add-your-order'>add your order</option>
//             {orderOptions}
//     </select>   
//             </div>

//             <div className="formWrap">
//                 <label htmlFor="email">Email Address:</label>
//                 <input onChange={onChange} type="text" id="email"  />
//             </div>

//             <div className="formWrap">
//                 <label htmlFor="address">Delivery Address:</label>
//                 <input onChange={onChange} type="text" id="address"  />
//             </div>

//             <input type="submit" value="Save" id="save"/>
// 	    </form>

//     );
// }

// export default OrderForm;