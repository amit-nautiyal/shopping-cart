import React from "react";
import PropTypes from "prop-types";

const Cart = props => {
  return (
    <aside className="cart">
      <header className="cart__header">Cart</header>
      <section className="cart__body">
        {props.cartItems.map(c => (
          <div className="cart-group" key={c.name}>
            <div className="cart-row">
              <span>Name:</span>
              <span>{c.name}</span>
            </div>
            <div className="cart-row">
              <span>Price:</span>
              <span>{c.price}</span>
            </div>
            <div className="cart-row">
              <span>Qty:</span>
              <span>{c.quantity}</span>
            </div>
            <span
              className="remove-link"
              onClick={() => props.removeFunc(c.name)}
            >
              <em>Remove item</em>
            </span>
          </div>
        ))}
        {props.cartItems.length > 0 && (
          <>
            <div>Total</div>
          </>
        )}
      </section>
    </aside>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.array.isRequired,
  removeFunc: PropTypes.func.isRequired
};

export default Cart;
