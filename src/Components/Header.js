import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function Header({ userToken, setUser }) {
  return (
    <div className='nav-div'>
      <ul className='nav'>
        <li>
          <Link to={"/"}>
            <img alt='' src={logo} />
          </Link>
        </li>
        <input className='search-bar' type='text' />
        {userToken ? (
          <Link to='/user/login'>
            <button onClick={() => setUser(null)}>Se déconnecter</button>
          </Link>
        ) : (
          <>
            <Link to='/user/signup'>
              <li>S'inscrire</li>
            </Link>
            <Link to='/user/login'>
              <li>Se Connecter</li>
            </Link>
          </>
        )}
        <li>Vends tes Articles</li>
      </ul>
    </div>
  );
}

export default Header;
