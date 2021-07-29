import axios from "axios";
import { useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [email, setEmail] = useState();

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

      Cookies.set("token", token, { expires: 666 });

      history.push("/");

      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form action='submit' onSubmit={handleSubmit}>
        <label htmlFor='Username' placeholder='username'>
          Username:
        </label>
        <input onChange={handleUsername} value={username} type='text' />
        <label htmlFor='email'>E-mail:</label>
        <input
          onChange={handleEmail}
          value={email}
          type='text'
          placeholder='jondoe@my-email.com'
        />
        {/* <label htmlFor='phone'>Phone:</label>
        <input type='number' /> */}
        <label htmlFor='password' placeholder='password'>
          Password:
        </label>
        <input onChange={handlePassword} value={password} type='password' />
        <input type='submit' />
        <button>Test</button>
      </form>
    </div>
  );
}

export default Signup;
