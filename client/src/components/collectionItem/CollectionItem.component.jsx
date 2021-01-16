import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import CustomButton from "../customButton/CustomButton.component";
import "./CollectionItem.styles.scss";

import { addItem } from "../../redux/cart/cart.actions";

const CollectionItem = ({ item, addItem, cartItems }) => {
  const { name, price, imageUrl } = item;
  const isItemInCart = cartItems.find((cartItem) => cartItem.id === item.id);

  return (
    <div className="collection-item">
      <div className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className="collection-footer">
        <span className="name">{name}</span>
        <span className="name">{price}</span>
      </div>
      {isItemInCart ? (
        <CustomButton className="custom-button" inverted>In Cart</CustomButton>
      ) : (
        <CustomButton className="custom-button" onClick={() => addItem(item)} inverted>
          Add to cart
        </CustomButton>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});
const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps, mapDispatchToProps)(CollectionItem);
