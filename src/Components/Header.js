import { BrowserRouter as Router, Link } from "react-router-dom";
import logo from "../assets/logo.svg";
function Header() {
  return (
    <div className='nav-div'>
      <ul className='nav'>
        <li>
          <Link to={"/"}>
            <img alt='' src={logo} />
          </Link>
        </li>
        <input className='search-bar' type='text' />
        <li>S'inscrire</li>
        <li>Se Connecter</li>
        <li>Vends tes Articles</li>
      </ul>
    </div>
  );
}

export default Header;
