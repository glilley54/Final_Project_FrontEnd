
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Instructions from "./components/Instructions";
import Home from "./components/Home";
import Items from "./components/Items";
import CustomerDetailsForm from "./components/CustomerDetailsForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState,useEffect } from "react";





const App = () => {

  // 1.define basket state - new empty arrayList

  const [basket, setBasket] = useState([]);


  const fetchBasket = async () => {
    setBasket(basket)
  }


  useEffect(() => {
    fetchBasket();
  }, [])

console.log(basket);

    
  // })

  // 2. write function to add items to basket

  const handleAddToBasket = (item) =>{
    setBasket([...basket,item]);
  }




   

  // 3.pass down to items component


  

  return (
    <Router>
      <>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />

        <Route path="/order" render={()=> <Items handleAddToBasket={handleAddToBasket}/>}/>
        <Route path="/basket" render={()=> <Basket basket={basket}/>}/>
        

        <Route path="/instructions" component={Instructions} />
        <Route path="/customerdetails" component={CustomerDetailsForm} />
        </Switch>
      </>
    </Router>
  );
}


// handleAddToBasket={handleAddToBasket}


export default App;