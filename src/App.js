import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Offer from "./Containters/Offer";
import Home from "./Containters/Home";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import axios from "axios";

export default function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        console.log(response.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path='/offer'>
            <Offer />
          </Route>
          <Route path='/'>
            <Home data={data} setData={setData} />
          </Route>
        </Switch>

        <Link to={"/offer"}></Link>
      </div>
    </Router>
  );
}
