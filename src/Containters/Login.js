// import Link from "react-router-dom";

function Login() {
  return (
    <div>
      <form action='submit'>
        <label htmlFor='Username' placeholder='username'>
          Username:
        </label>
        <input type='text' />
        <label htmlFor='password' placeholder='password'>
          Password:
        </label>
        <input type='password' />
        <input type='submit' />
      </form>
    </div>
  );
}

export default Login;
