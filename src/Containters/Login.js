import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const history = useHistory();

  const handleEmail = (event) => {
    const value = event.target.value;
    setEmail(value);
  };
  const handlePassword = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email: email,
          password: password,
        }
      );

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
        <input type='text' onChange={handleEmail} />
        <label htmlFor='password' placeholder='password'>
          Password:
        </label>
        <input onChange={handlePassword} type='password' />
        <input type='submit' />
      </form>
    </div>
  );
}

export default Login;
