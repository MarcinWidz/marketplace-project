import axios from "axios";
import { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import "./Signup.css";

function Signup({ setUser }) {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [userExists, setUserExists] = useState(false);

  const handleUsername = (event) => {
    const value = event.target.value;
    setUsername(value);
  };
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
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          username: username,
          email: email,
          password: password,
        }
      );
      const token = response.data.token;

      setUser(token);

      history.push("/");

      console.log(response);
    } catch (error) {
      console.log(error.response);
      if (error.response.status === 409) {
        setUserExists(true);
      }
    }
  };

  return (
    <div className='signup-div'>
      <form className='signup-form' action='submit' onSubmit={handleSubmit}>
        <label className='signup-title' htmlFor=''>
          S'inscrire
        </label>
        <label htmlFor='Username'>Username:</label>
        <input
          onChange={handleUsername}
          value={username}
          placeholder='username'
          type='text'
        />
        <label htmlFor='email'>E-mail:</label>
        <input
          onChange={handleEmail}
          value={email}
          type='email'
          placeholder='jondoe@my-email.com'
        />
        <label htmlFor='password' placeholder='password'>
          Password:
        </label>
        <input onChange={handlePassword} value={password} type='password' />
        <input className='submit-btn' value="S'inscrire" type='submit' />
        <Link to={"/user/login"}>
          <p className='signup-footnote'>Tu as déjà un compte? Connecte-toi!</p>
        </Link>
      </form>
      {userExists && (
        <p style={{ color: "red" }}>
          <p style={{ display: "inline" }}>
            Cet utilisateur existe déjà. Pour te connecter clique
          </p>
          <Link to={"/user/login"}>
            <span> ici</span>
          </Link>
        </p>
      )}
    </div>
  );
}

export default Signup;
