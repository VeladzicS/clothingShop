import React from "react";
import StripeCheckout from "react-stripe-checkout";

const stripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I1wsxEQOwQQZzniJge5hVtUnZSaOZMxmqomP1a4UOwP6aHfFS88hfKObHr0J0i11KX1dQQXbq7tfgSupxsF2EWu00hMc3HUph";
  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default stripeButton;
