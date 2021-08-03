import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";

function CheckoutForm({ price, userToken, title }) {
  const stripe = useStripe();
  const elements = useElements();
  console.log(price);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const cardElement = elements.getElement(CardElement);
      const stripeResponse = await stripe.createToken(cardElement, {
        name: userToken,
      });
      const stripeToken = stripeResponse.token.id;
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/payment",
        {
          token: stripeToken,
          title: title,
          amount: price,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <form onSubmit={handleSubmit} action=''>
      <CardElement />
      <p>sqdqsddsqdq</p>
      <input type='submit' />
    </form>
  );
}

export default CheckoutForm;
