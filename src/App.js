import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";
import Offer from "./Containters/Offer";
import Home from "./Containters/Home";
import Header from "./Components/Header";
import Login from "./Containters/Login";
import Signup from "./Containters/Signup";
import Publish from "./Containters/Publish";
import Footer from "./Components/Footer";
import Payment from "./Containters/Payment";
import Cookies from "js-cookie";
import "./App.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

library.add(faSearch);

export default function App() {
  const [userToken, setUserToken] = useState(Cookies.get("userToken") || null);
  const [data, setData] = useState();
  const [values, setValues] = useState([0, 50]);
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(250);
  const [title, setTitle] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");

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
      <Header
        userToken={userToken}
        setUser={setUser}
        data={data}
        setData={setData}
        values={values}
        setValues={setValues}
        priceMin={priceMin}
        setPriceMin={setPriceMin}
        setPriceMax={setPriceMax}
        priceMax={priceMax}
        setTitle={setTitle}
        title={title}
        sort={sort}
        setSort={setSort}
        search={search}
        setSearch={setSearch}
      />
      <Switch>
        <Route exact path='/offer/publish'>
          <Publish userToken={userToken} />
        </Route>
        <Route path='/offer/:id'>
          <Offer />
        </Route>
        <Route exact path='/'>
          <Home data={data} setData={setData} userToken={userToken} />
        </Route>
        <Route path='/user/login'>
          <Login setUser={setUser} />
        </Route>
        <Route path='/user/signup'>
          <Signup setUser={setUser} />
        </Route>
        <Route path='/payment'>
          <Payment />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
