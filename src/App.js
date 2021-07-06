import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Instructions from "./components/Instructions";
import Home from "./components/Home";
import Items from "./components/Items";
import Basket from "./components/Basket";
import CustomerForm from "./components/CustomerForm";
import {getCustomers} from "./components/CustomerService";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect } from "react";





const App = () => {

  // 1.define basket state - new empty arrayList

  const [basket, setBasket] = useState([]);

  useEffect(()=>{
    updateBasket()

  },[basket])

  // function refreshPage() {
  //   window.location.reload()
  // }
  const updateBasket= ()=>{
    setBasket(basket)

  }


  const handleRemoveFromBasket = (item) => {

    const newBasket = basket
    
    const index = newBasket.indexOf(item)
    newBasket.splice(index,1);
    setBasket(newBasket)
    // refreshPage()

  }



  const [customer, setCustomer] = useState([]);


  const addCustomer = (customer) =>{
    console.log(customer)
    
    // setCustomer(temp);
  }

  




    
  // })

  // 2. write function to add items to basket

  const handleAddToBasket = (item) =>{
    setBasket([...basket,item]);
  }

  // 3.function to remove item from basket

  // const handleRemoveFromBasket =(item) =>{
  //     // delete locally
  //     setBasket(basket.filter(basket => item !== item)
  //   };
  
  // }


  
  





   

  // 3.pass down to items component


  

  return (
    <Router>
      <>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/order" render={()=> <Items handleAddToBasket={handleAddToBasket}/>}/>
        <Route path="/basket" render={()=> <Basket basket={basket} handleRemoveFromBasket={handleRemoveFromBasket} />}/>
        

        <Route path="/instructions" component={Instructions} />
        <Route path="/customerDetails" render={()=><CustomerForm addCustomer={addCustomer} />}/>
        </Switch>
      </>
    </Router>
  );
}


// handleAddToBasket={handleAddToBasket}


export default App;