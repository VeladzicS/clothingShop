import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const stripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51I1wsxEQOwQQZzniJge5hVtUnZSaOZMxmqomP1a4UOwP6aHfFS88hfKObHr0J0i11KX1dQQXbq7tfgSupxsF2EWu00hMc3HUph";
  const onToken = (token) => {
    axios({
      url: "payment",
      method: "post",
      data: {
        amount: priceForStripe,
        token,
      },
    })
      .then((response) => {
        alert("Payment Succesfull");
      })
      .catch((error) => {
        console.log("Payment error", JSON.parse(error));
        alert(
          "There was an issue with you payment. Please make sure you use provided test credit card from our site."
        );
      });
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
