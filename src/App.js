import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Offer from "./Containters/Offer";
import Home from "./Containters/Home";
import Header from "./Components/Header";

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/offer'>
            <Offer />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>

        <Link to={"/offer"}></Link>
      </div>
    </Router>
  );
}
