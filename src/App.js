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
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);

  const setUser = (token) => {
    if (token) {
      Cookies.set("userToken", token);
      setUserToken(token);
    } else {
      Cookies.remove("userToken");
      setUserToken(null);
    }
  };

  return (
    <Router>
      <Header userToken={userToken} setUser={setUser} />
      <Switch>
        <Route path='/offer/:id'>
          <Offer />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/user/login'>
          <Login setUser={setUser} />
        </Route>
        <Route path='/user/signup'>
          <Signup setUser={setUser} />
        </Route>
      </Switch>
    </Router>
  );
}
