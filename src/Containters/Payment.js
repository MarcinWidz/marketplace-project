import { useLocation } from "react-router-dom";
import CheckoutForm from "../Components/CheckoutForm";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

function Payment() {
  const stripePromise = loadStripe("pk_test_5z9rSB8XwuAOihoBixCMfL6X");
  const location = useLocation();
  console.log("state===>", location.state.title);
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm
        name={location.state.name}
        price={location.state.price}
        userToken={location.state.userToken}
      />
    </Elements>
  );
}

export default Payment;
