import axios from "axios";

function Signup() {
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup"
      );
      console.log(response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      <form action='submit'>
        <label htmlFor='Username' placeholder='username'>
          Username:
        </label>
        <input type='text' />
        <label htmlFor='email'>E-mail:</label>
        <input type='text' placeholder='jondoe@my-email.com' />
        <label htmlFor='password' placeholder='password'>
          Password:
        </label>
        <input type='password' />
        <input type='submit' onSubmit={handleSubmit} />
      </form>
    </div>
  );
}

export default Signup;
