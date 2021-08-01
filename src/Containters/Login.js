import { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import "./Login.css";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const history = useHistory();

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );
      const token = response.data.token;
      setUser(token);
      token && history.push("/");
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 400) {
        setError(
          `Cet utilisateur n'existe pas. Si tu veux t'inscrire clique ${(
            <Link to={"/user/signup"}>
              <span>Ici</span>
            </Link>
          )}`
        );
      } else if (error.response.status === 401) {
        setError("Mot de pase ou le nom d'utilisateur pas valides");
      }
    }
  };

  return (
    <div className='login-div'>
      <form className='login-form' action='submit' onSubmit={handleSubmit}>
        <p className='login-title'>Connecte-toi</p>
        <label htmlFor='email'>Email:</label>
        <input
          placeholder='jondoe@youremail.com'
          type='email'
          onChange={handleEmail}
        />
        <label htmlFor='password' placeholder='password'>
          Password:
        </label>
        <input onChange={handlePassword} type='password' />
        <input className='login-btn' type='submit' />
        <Link to={"/user/signup"}>
          <p className='login-footnote'>Pas encore de compte? Inscris-toi!</p>
        </Link>
      </form>
      <p className='login-footnote' style={{ color: "red" }}>
        {error}
      </p>
    </div>
  );
}

export default Login;
