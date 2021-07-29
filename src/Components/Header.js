import { Link } from "react-router-dom";
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
        <Link to={"../Containters/Signup.js"}>
          <li>S'inscrire</li>
        </Link>
        <Link to={"../Containters/Login.js"}>
          <li>Se Connecter</li>
        </Link>
        <li>Vends tes Articles</li>
      </ul>
    </div>
  );
}

export default Header;
