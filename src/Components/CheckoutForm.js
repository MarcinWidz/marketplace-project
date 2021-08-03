import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import axios from "axios";
import "./CheckoutForm.css";

function CheckoutForm({ name, price, userToken }) {
  const stripe = useStripe();
  const elements = useElements();

  let fraisDePort = 0.8;
  let fraisProtection = 0.4;
  let total = price + fraisDePort + fraisProtection;

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
          title: name,
          amount: price,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className='checkout-div'>
      <form onSubmit={handleSubmit} action=''>
        <p className='checkout-title'>Resume de la commande:</p>
        <div className='checkout-top-div'>
          <div className='checkout-elem-div'>
            <p>Commande:</p>
            <span>{price}€</span>
          </div>
          <div className='checkout-elem-div'>
            <p>Frais protection acheteurs:</p>
            <span>{fraisProtection}0€</span>
          </div>
          <div className='checkout-elem-div'>
            <p>Frais de port:</p>
            <span>{fraisDePort}0€</span>
          </div>
        </div>
        <div className='checkout-middle'>
          <div className='checkout-total'>
            <p>
              <b>Total:</b>
            </p>
            <b>
              <span>{total.toFixed(1)}0€</span>
            </b>
          </div>
          <p className='checkout-text'>
            Il ne vous reste plus qu'un étape pour vous offrir <b>{name}</b>.
            Vous allez payer <b>{total.toFixed(1)}0€</b> (fras de protection et
            frais de port inclus).
          </p>
        </div>
        <CardElement className='card-element' />
        <input className='checkout-pay-btn' type='submit' value='Payer' />
      </form>
    </div>
  );
}

export default CheckoutForm;
