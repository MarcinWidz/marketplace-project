import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Offer from "./Containters/Offer";
import Home from "./Containters/Home";
import Header from "./Components/Header";
import Login from "./Containters/Login";
import Signup from "./Containters/Signup";
import Cookies from "js-cookie";

export default function App() {
  const [setUserToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    Cookies.set("userToken", token);
    setUserToken(token);
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/offer/:id'>
          <Offer />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/user/login'>
          <Login />
        </Route>
        <Route>
          <Signup path='/user/signup' setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
}
