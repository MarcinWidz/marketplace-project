import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react";
import Offer from "./Containters/Offer";
import Home from "./Containters/Home";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link>Home</Link>
            </li>
            <li>
              <Link>Offer</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/offers'>
            <Offer />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
