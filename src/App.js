
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./components/NavBar";
import Instructions from "./components/Instructions";
import Home from "./components/Home";
import Items from "./components/Items";
import ErrorPage from "./components/ErrorPage";


const App = () => {
  

  return (
    <Router>
      <>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/order" component={Items} />
        <Route path="/instructions" component={Instructions} />
        </Switch>
      </>
    </Router>
  );
}



export default App;