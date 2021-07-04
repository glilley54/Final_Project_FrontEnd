
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Instructions from "./components/Instructions";
import Home from "./components/Home";
import Items from "./components/Items2";
import CustomerDetailsForm from "./components/CustomerDetailsForm";



const App = () => {
  

  return (
    <Router>
      <>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Items} />
        <Route path="/instructions" component={Instructions} />
        <Route path="/customerdetails" component={CustomerDetailsForm} />
        </Switch>
      </>
    </Router>
  );
}



export default App;