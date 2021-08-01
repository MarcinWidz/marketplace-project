import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Header.css";

import Filters from "./Filters";

function Header({
  userToken,
  setUser,
  data,
  setData,
  values,
  setValues,
  priceMin,
  setPriceMin,
  priceMax,
  setPriceMax,
  title,
  setTitle,
  sort,
  setSort,
  search,
  setSearch,
}) {
  return (
    <div className='nav-div'>
      <ul className='nav'>
        <li>
          <Link to={"/"}>
            <img alt='' src={logo} />
          </Link>
        </li>
        <div className='filters-div'>
          <Filters
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
        </div>
        {userToken ? (
          <Link to='/user/login'>
            <div className='header-item-div'>
              <button onClick={() => setUser(null)}>Se déconnecter</button>
            </div>
          </Link>
        ) : (
          <>
            <Link style={{ textDecoration: "none" }} to='/user/signup'>
              <div className='header-item-div'>
                <li>S'inscrire</li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to='/user/login'>
              <div className='header-item-div'>
                <li>Se Connecter</li>
              </div>
            </Link>
          </>
        )}
        <div className='header-cta-div'>
          <Link className='sell-btn' to='/user/login'>
            <li>Vends tes Articles</li>
          </Link>
        </div>
      </ul>
    </div>
  );
}

export default Header;
