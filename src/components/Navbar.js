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
      <link to="/basket">Basket</link>
      <li>
        <button onClick={goBack}>Back</button>
      </li>
    </ul>
  );
}

export default NavBar;