import React from "react";
import CustomButton from "../customButton/CustomButton.component";
import "./cartDropdown.styles.scss";
const cartDropdown = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items" />
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default cartDropdown;
