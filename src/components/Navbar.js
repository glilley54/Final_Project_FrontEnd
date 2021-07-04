import React from "react";
import { Link, useHistory } from "react-router-dom";


const NavBar = () => {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  }

  return (
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/order">Order</Link>
      </li>
      <li>
        <Link to="/instructions">Instructions</Link>
      </li>
      <Link to="/basket">Basket</Link>
      <li>
      
      <Link to="/customerdetails">Customer Details</Link>
      </li>
      <li>

        <button onClick={goBack}>Back</button>
      </li>
    </ul>
  );
}

export default NavBar;